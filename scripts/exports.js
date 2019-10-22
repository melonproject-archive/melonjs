#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Collect all abi files.
const source = path.resolve(process.cwd(), 'src', 'abis');
const abis = glob.sync('*.abi.json', { cwd: source });

abis.forEach(item => {
  const name = path.basename(item).split('.', 1)[0];
  const content = fs.readFileSync(path.join(source, item));
  const destination = path.resolve(process.cwd(), 'src', 'abis', `${name}.ts`);

  let output = "import { AbiItem } from 'web3-utils';\n\n";
  output += '// tslint:disable-next-line:variable-name\n';
  output += `export const ${name}Abi = ${content} as AbiItem[];`;
  fs.writeFileSync(destination, output, 'utf8');
});
