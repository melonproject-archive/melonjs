import fs from 'fs';
import path from 'path';
import glob from 'glob';
import prettier from 'prettier';
import yargs from 'yargs';
import rimraf from 'rimraf';
import { generate } from './utils/generate';
import { Project, QuoteKind, IndentationText, Node } from 'ts-morph';

function prettifyText(node: Node, config: prettier.Options) {
  const options: prettier.Options = { ...config, parser: 'typescript' };
  const text = node.getText({ includeJsDocComments: true });
  return prettier.format(text, options);
}

interface Config {
  version: string;
  contracts: {
    [key: string]: string;
  };
}

const args = yargs
  .options('config', {
    default: path.resolve(__dirname, 'config', 'next.json'),
    defaultDescription: 'Latest contract version (master branch).',
    coerce: (file) => JSON.parse(fs.readFileSync(file, 'utf8')),
  })
  .option('input', {
    array: true,
    normalize: true,
    demandOption: true,
    coerce: (input) => {
      const nested = input.map((item) => {
        if (item.indexOf('*') !== -1 || item.indexOf('{') !== -1) {
          return glob.sync(item);
        }

        if (fs.existsSync(item)) {
          const stats = fs.lstatSync(item);
          if (stats.isDirectory()) {
            return glob.sync(path.join(item, '**/*.json'));
          }

          if (stats.isFile()) {
            return [item];
          }
        }

        throw new Error(
          'Failed to recognize input path. Please pass the path to a file or directory or a glob pattern.',
        );
      });

      // @ts-ignore
      return nested.flat();
    },
  })
  .option('prettier', {
    default: process.cwd(),
    defaultDescription: 'Relative to current working directory.',
    coerce: (directory) => prettier.resolveConfig.sync(directory),
  })
  .pkgConf('codegen').argv;

(async () => {
  const config = (args.config as any) as Config;
  const output = path.resolve(__dirname, '..', 'src', 'versions', config.version, 'contracts');

  rimraf.sync(output);
  if (!fs.existsSync(output)) {
    fs.mkdirSync(output, { recursive: true });
  }

  const mapping = Object.entries(config.contracts).map(([contract, destination]) => {
    try {
      const source = args.input.find((item) => {
        return path.basename(item, '.json') === contract;
      });

      if (!source) {
        throw new Error(`Missing contract output for ${contract}.`);
      }

      return {
        name: contract,
        output: JSON.parse(fs.readFileSync(path.resolve(source), 'utf8')),
        bytecode: fs.readFileSync(path.resolve(path.dirname(source), `${contract}.bin`), 'utf8').trim(),
        destination: path.resolve(path.join(output, destination)),
      };
    } catch (error) {
      throw new Error(`Failed to load source data for contract ${contract}: ${error}`);
    }
  });

  const project = new Project({
    tsConfigFilePath: `${process.cwd()}/tsconfig.json`,
    addFilesFromTsConfig: true,
    skipFileDependencyResolution: true,
    manipulationSettings: {
      useTrailingCommas: true,
      insertSpaceAfterOpeningAndBeforeClosingNonemptyBraces: true,
      quoteKind: QuoteKind.Single,
      indentationText: IndentationText.TwoSpaces,
    },
  });

  mapping.forEach((contract) => {
    const output = generate(
      project,
      contract.name,
      contract.destination,
      contract.output.abi,
      contract.output.userdoc,
      contract.output.devdoc,
    );

    output.replaceWithText(prettifyText(output, args.prettier as any));
  });

  await project.save();

  mapping.forEach((contract) => {
    const out = path.join(path.dirname(contract.destination), `${contract.name}.bin.ts`);
    const code = `export const ${contract.name}ContractBytecode = '0x${contract.bytecode}';`;
    const output = prettier.format(code, { ...(args.prettier as any), parser: 'typescript' });
    fs.writeFileSync(out, output, 'utf8');
  });

  const index = path.join(output, `index.ts`);
  const imports = mapping
    .map((contract) => {
      const name = path.join(path.relative(path.dirname(index), path.dirname(contract.destination)), contract.name);

      return [
        `export { ${contract.name}Contract } from './${name}';`,
        `export { ${contract.name}ContractBytecode } from './${name}.bin';`,
      ];
    })
    .flat()
    .join('\n');

  fs.writeFileSync(index, `${imports}\n`, 'utf8');
})();
