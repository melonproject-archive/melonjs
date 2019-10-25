#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const prettier = require('prettier');

const contracts = [
  // Engine
  'Version',
  'Engine',
  'Registry',

  // Price feed
  'CanonicalPriceFeed',

  // Fund
  'Hub',
  'Accounting',
  'Vault',
  'Participation',
  'Trading',
  'FeeManager',
  'PolicyManager',
  'Shares',

  // Factories
  'FundFactory',
  'AccountingFactory',
  'VaultFactory',
  'ParticipationFactory',
  'TradingFactory',
  'FeeManagerFactory',
  'PolicyManagerFactory',
  'SharesFactory',

  // Policies
  'AssetBlacklist',
  'AssetWhitelist',
  'MaxConcentration',
  'MaxPositions',
  'PriceTolerance',
  'UserWhitelist',

  // Fees
  'ManagementFee',
  'PerformanceFee',

  // Tokens
  'WETH',
  'ERC20',

  // Inherited contracts
  'Policy',
  'AddressList',
];

(async () => {
  const config = await prettier.resolveConfig(process.cwd());
  const compiled = (() => {
    try {
      const protocol = process.argv.slice(2).shift();
      const source = path.resolve(process.cwd(), protocol, 'out');
      const raw = require(path.join(source, 'compilerResult.json'));
      const keys = Object.keys(raw.contracts);
      return keys.reduce((carry, key) => ({
        ...carry,
        [key.split(':')[1]]: raw.contracts[key],
      }));
    } catch (e) {
      console.error('Failed to load compiler result.');
      process.exit(1);
    }
  })();

  const destination = path.resolve(process.cwd(), 'src', 'abis');
  if (!fs.existsSync(destination)) {
    fs.mkdirSync(destination);
  }

  contracts.forEach(name => {
    const contract = compiled[name];

    if (contract.interface) {
      let abi = "import { AbiItem } from 'web3-utils';\n\n";
      abi += '// tslint:disable-next-line:variable-name\n';
      abi += `export const ${name}Abi = ${contract.interface} as AbiItem[];`;

      const file = path.join(destination, `${name}.abi.ts`);
      fs.writeFileSync(
        file,
        prettier.format(abi, {
          ...config,
          parser: 'typescript',
        }),
        'utf8',
      );
    }

    if (contract.bytecode) {
      let bin = '// tslint:disable-next-line:variable-name\n';
      bin += `export const ${name}Bytecode = '${contract.bytecode}';`;

      const file = path.join(destination, `${name}.bin.ts`);
      fs.writeFileSync(
        file,
        prettier.format(bin, {
          ...config,
          parser: 'typescript',
        }),
        'utf8',
      );
    }
  });
})();
