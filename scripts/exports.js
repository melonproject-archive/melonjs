#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Collect all abi files.
const source = path.resolve(process.cwd(), 'src', 'contracts');
const abis = glob.sync('*.abi.json', { cwd: source });

const contents = abis.map(item => {
  const name = item.split('.', 1)[0];
  return `export { default as ${name} } from './contracts/${item}';`;
}).join('\n');

const destination = path.resolve(process.cwd(), 'src', 'contracts.ts');
fs.writeFileSync(destination, contents, 'utf8');
