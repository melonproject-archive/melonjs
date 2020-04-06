import fs from 'fs';
import path from 'path';
import https from 'https';
import url from 'url';
import os from 'os';
import zlib from 'zlib';
import glob from 'glob';
import tar from 'tar';
import prettier from 'prettier';
import { ethers } from 'ethers';

const version = fs.readFileSync(path.join(process.cwd(), '.protocol'), 'utf8').trim();
const filename = `melon-protocol-${version}`;
const organization = 'melonproject';
const project = 'protocol';
const release = `https://github.com/${organization}/${project}/releases/download/${version}/${filename}.tar.gz`;

function download(from: string, to: string) {
  const file = path.join(to, path.basename(release));

  return new Promise<string>((resolve, reject) => {
    https.get(from, (response) => {
      if (response.statusCode >= 400) {
        reject(response);
      }

      if (response.statusCode > 300 && response.statusCode < 400 && response.headers.location) {
        if (url.parse(response.headers.location).hostname) {
          return download(response.headers.location, to).then(resolve).catch(reject);
        }

        return download(url.resolve(url.parse(from).hostname, response.headers.location), to)
          .then(resolve)
          .catch(reject);
      }

      return response
        .pipe(fs.createWriteStream(file))
        .on('error', reject)
        .on('finish', () => resolve(file));
    });
  });
}

function extract(from: string, to: string) {
  return new Promise((resolve, reject) => {
    let stream = fs.createReadStream(from);
    if (/(gz|tgz)$/i.test(from)) {
      stream = stream.pipe(zlib.createGunzip()) as any;
    }

    stream
      .pipe(tar.extract({ cwd: to }))
      .on('error', reject)
      .on('finish', resolve);
  });
}

(async () => {
  const destination = path.resolve(process.cwd(), 'src', 'contracts');
  if (!fs.existsSync(destination)) {
    fs.mkdirSync(destination);
  }

  const prettierConfig = await prettier.resolveConfig(process.cwd());
  const tmpDirectory = fs.mkdtempSync(path.join(os.tmpdir(), 'melon-protocol-'));
  const downloaded = await download(release, tmpDirectory);
  await extract(downloaded, tmpDirectory);

  // Create typescript contract definitions for all .abi files.
  const abis = glob.sync('*.abi', { cwd: tmpDirectory });
  abis.forEach((item) => {
    const name = path.basename(item).split('.', 1)[0];
    const content = fs.readFileSync(path.join(tmpDirectory, item)).toString('utf8');
    const code = generate(name, new ethers.utils.Interface(JSON.parse(content)));
    const output = prettier.format(code, { ...prettierConfig, parser: 'typescript' });
    fs.writeFileSync(path.join(destination, `${name}.ts`), output, 'utf8');
  });
})();

function getInputs(fragment: ethers.utils.FunctionFragment) {
  let inputs: Array<string> = [];
  fragment.inputs.forEach((input, index) => {
    let name = input.name || `$$${index}`;
    let type = getType(input, true);
    inputs.push(name + ': ' + type);
  });

  return inputs;
}

function getOutput(fragment: ethers.utils.FunctionFragment) {
  if (!fragment.outputs.length) {
    return 'void';
  }

  if (fragment.outputs.length === 1) {
    return getType(fragment.outputs[0]);
  }

  // If all output parameters are names, we can specify the struct
  if (fragment.outputs.filter((o) => !!o.name).length === fragment.outputs.length) {
    return '{ ' + fragment.outputs.map((o) => o.name + ': ' + getType(o)).join(', ') + ' }';
  }

  // Otherwise, all we know is that it will be an Array
  return 'any[]';
}

function getOverrides(fragment: ethers.utils.FunctionFragment) {
  if (fragment.constant) {
    return 'ethers.CallOverrides';
  }

  if (fragment.payable) {
    return 'ethers.PayableOverrides';
  }

  return 'ethers.Overrides';
}

function getType(param: ethers.utils.ParamType, flexible?: boolean): string {
  if (param.type === 'address' || param.type === 'string') {
    return 'string';
  }

  if (param.type === 'bool') {
    return 'boolean';
  }

  if (param.type.substring(0, 5) === 'bytes') {
    if (flexible) {
      return 'string | ethers.utils.BytesLike';
    }

    return 'string';
  }

  const matches = param.type.match(/^u?int([0-9]+)$/);
  if (matches) {
    if (flexible) {
      return 'ethers.BigNumberish';
    }

    if (parseInt(matches[1]) < 53) {
      return 'number';
    }

    return 'ethers.BigNumber';
  }

  if (param.type === 'array' || param.type.substr(-1) === ']') {
    const matches = param.type.match(/\[([0-9]*)\]$/);
    if (matches && matches[1]) {
      const type = getType(param.arrayChildren);
      const list = Array.from(Array(parseInt(matches[1], 10)).keys())
        .map(() => type)
        .join(', ');

      return `[${list}]`;
    }

    return `${getType(param.arrayChildren)}[]`;
  }

  if (param.type === 'tuple') {
    const struct = param.components.map((p, i) => `${p.name || `$$${i}`}: ${getType(p, flexible)}`);
    return `{ ${struct.join(', ')} }`;
  }

  return 'any';
}

export function generate(name: string, contract: ethers.utils.Interface): string {
  const calls: string[] = [];
  const transactions: string[] = [];
  const abis = contract.fragments.map((fragment) => `"${fragment.format(ethers.utils.FormatTypes.full)}"`);

  const signatures = Object.keys(contract.functions);
  signatures.forEach((signature, index, array) => {
    const fragment = contract.functions[signature];
    if (index !== array.findIndex((item) => contract.functions[item].name === fragment.name)) {
      return;
    }

    const output = getOutput(fragment);
    const inputs = getInputs(fragment);
    const overrides = getOverrides(fragment);
    const formatted = fragment.format(ethers.utils.FormatTypes.minimal);

    if (fragment.constant) {
      calls.push(`
        /**
         * \`${name}\` contract call for the \`${fragment.name}\` function.
         * 
         * @contract ${name}
         * @signature ${formatted}
         */
        ${fragment.name}: (${inputs.concat([`$$overrides?: ${overrides}`]).join(', ')}) => Promise<${output}>;
      `);
    } else {
      transactions.push(`
        /**
         * \`${name}\` contract transaction for \`${fragment.name}\` function.
         * 
         * @contract ${name}
         * @signature ${formatted}
         */
        ${fragment.name}: (${inputs.join(', ')}) => TransactionWrapper<${overrides}>
      `);
    }
  });

  return `
    import { ethers } from "ethers";
    // @ts-ignore
    import { Contract, TransactionWrapper } from "../Contract";

    export class ${name} extends Contract {
      constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
        super(new.target.abi, addressOrName, providerOrSigner);
      }

      ${calls.join('\n\n')}

      ${transactions.join('\n\n')}

      static abi: string[] = [
        ${abis.join(',\n')}
      ];
    }
  `;
}
