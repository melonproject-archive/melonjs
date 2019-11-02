#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const https = require('https');
const url = require('url');
const os = require('os');
const zlib = require('zlib');
const tar = require('tar');
const glob = require('glob');
const prettier = require('prettier');

const version = fs.readFileSync(path.join(process.cwd(), '.protocol'), 'utf8').trim();
const filename = `melon-protocol-${version}`;
const organization = 'melonproject';
const project = 'protocol';
const release = `https://github.com/${organization}/${project}/releases/download/${version}/${filename}.tar.gz`;

function download(from, to) {
  return new Promise((resolve, reject) => {
    https.get(from, response => {
      if (response.statusCode >= 400) {
        reject(response);
      }

      if (response.statusCode > 300 && response.statusCode < 400 && response.headers.location) {
        if (url.parse(response.headers.location).hostname) {
          return download(response.headers.location, to)
            .then(resolve)
            .catch(reject);
        }

        return download(url.resolve(url.parse(from).hostname, response.headers.location), to)
          .then(resolve)
          .catch(reject);
      }

      const file = path.join(to, path.basename(release));
      response
        .pipe(fs.createWriteStream(file))
        .on('error', reject)
        .on('finish', () => resolve(file));
    });
  });
}

function extract(from, to) {
  return new Promise((resolve, reject) => {
    let stream = fs.createReadStream(from);
    if (/(gz|tgz)$/i.test(from)) {
      stream = stream.pipe(zlib.createGunzip());
    }

    stream
      .pipe(tar.extract({ cwd: to }))
      .on('error', reject)
      .on('finish', resolve);
  });
}

(async () => {
  const config = await prettier.resolveConfig(process.cwd());
  const destination = path.resolve(process.cwd(), 'src', 'abis');

  if (!fs.existsSync(destination)) {
    fs.mkdirSync(destination);
  }

  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'melon-protocol-'));
  const downloaded = await download(release, tmp);
  await extract(downloaded, tmp);

  // Create typescript exports for all .abi files.
  const abis = glob.sync('*.abi', { cwd: tmp });
  abis.forEach(item => {
    const name = path.basename(item).split('.', 1)[0];
    const content = fs.readFileSync(path.join(tmp, item));

    let output = "import { AbiItem } from 'web3-utils';\n\n";
    output += '// tslint:disable-next-line:variable-name\n';
    output += `export const ${name}Abi = ${content} as AbiItem[];`;

    output = prettier.format(output, { ...config, parser: 'typescript' });
    fs.writeFileSync(path.join(destination, `${name}.abi.ts`), output, 'utf8');
  });

  // Create typescript exports for all .bin files.
  const bins = glob.sync('*.bin', { cwd: tmp });
  bins.forEach(item => {
    const name = path.basename(item).split('.', 1)[0];
    const content = fs.readFileSync(path.join(tmp, item));

    let output = '// tslint:disable-next-line:variable-name\n';
    output += `export const ${name}Bytecode = '${content}';`;

    output = prettier.format(output, { ...config, parser: 'typescript' });
    fs.writeFileSync(path.join(destination, `${name}.bin.ts`), output, 'utf8');
  });
})();
