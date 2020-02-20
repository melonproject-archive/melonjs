# MelonJS

[![Build status](https://img.shields.io/travis/melonproject/melonjs)](https://travis-ci.org/melonproject/melonjs)
[![Package version](https://img.shields.io/npm/v/@melonproject/melonjs)](https://www.npmjs.com/package/@melonproject/melonjs)
![License](https://img.shields.io/npm/l/@melonproject/melonjs)

**MelonJS** is a convenient JavaScript interface for interacting with the Melon Protocol smart contracts on the Ethereum blockchain. It allows users to call functions on the contracts at every point of a fund's life cycle. We envision this functionality enabling a wide variety of apps, from fund creation and investor relations management to trading bots and automatic portfolio rebalancing.

## Summary

MelonJS allows you to call functions on the following contracts:

- Guarantee that all values are from the same block
- Use watchers to poll for multiple blockchain state variables/functions
- Get updates when a watcher detects state has changed
- Results from out of sync nodes are automatically ignored
- Get new block updates

## Installation and Development

This library is published as an [npm package][npm]. You can install it through npm or yarn.

```bash
# Using yarn
yarn add @melonproject/melonjs

# Using npm
npm install @melonproject/melonjs
```

Before you can start developing, you'll need to have [Node.js][node] and [Yarn][yarn] installed.

Installing only takes two commands and you're ready to roll:

```bash
# Install all library dependencies.
yarn install

# Generate the abi and bytecode files for the smart contracts.
yarn codegen
```

You are now ready to start development. Check out the package.json scripts for useful commands for testing, test coverage, building and watch mode.

## Usage

MelonJS can be used with web3 utilities to create a Melon fund. Note that there are a couple of config json files referenced here. Examples of those files are contained in an `/examples` directory in this repo. 

```javascript

const BigNumber = require('bignumber.js');
const { Eth } = require('web3-eth');
const { HttpProvider } = require('web3-providers');
const { DeployedEnvironment, Version } = require('@melonproject/melonjs');
const { openFile } = require('./utils');

// Instantiate the environment and version where you'll create your fund
const eth = new Eth(new HttpProvider('http://localhost:8545', {
  confirmTransactionBlocks: 1,
}}));
const deployment = fs.readFileSync('./deployment.json');
const environment = new DeployedEnvironment(eth, deployment);
const version = new Version(environment, environment.deployment.melon.addr.Version);

// define variables to pass to fund setup
const denominationAssetAddress = environment.deployment.tokens.addr[config.QuoteToken];
const accounts = await environment.client.getAccounts();
const sender = accounts[0];
const gasPrice = 5000000000 // denominated in WEI

// call the beginSetup function to 
const tx = version.beginSetup(sender, {
  name: FundName, // a string
  fees: [environment.deployment.melon.addr.ManagementFee, environment.deployment.melon.addr.PerformanceFee],
  feeRates: [managementFeeRate, performanceFeeRate], // both BigNumbers denominated in WEI
  feePeriods: [new BigNumber(0), new BigNumber(90 * 60 * 60 * 24)],
  exchanges: exchanges, // an array of exchange addresses
  adapters: adapters, // an array of exchange adapter addresses
  denominationAsset: denominationAssetAddress, // a token address (WETH)
  defaultAssets: defaultAssets, // an array of token addresses 
});

await tx.validate();

const receipt = await tx.send(await tx.prepare({
  gasPrice,  
}));

// At this point, you'll need to call the setupSpokeContract methods individually, and in order
const accountingTx = version.createAccounting(account)
const accountingReceipt = await accountingTx.send(await accountingTx.prepare());
console.log(accountingReceipt)

```

## Testing

The tests contained in this repository use an in-memory ganache test chain.

In order to execute the tests, simply run:

```
yarn test
```

## Contributing

Third party contributions to this project are welcome and encouraged. If you want to contribute, please open an issue before submtting a pull requests so we can discuss the proposed changes and/or additions.

Please note that all repositories hosted under this organization follow our [Code of Conduct][coc], make sure to review and follow it.

[yarn]: https://yarnpkg.com
[node]: https://nodejs.org
[npm]: https://www.npmjs.com/package/@melonproject/melonjs
[coc]: https://github.com/melonproject/melonjs/blob/master/CODE_OF_CONDUCT.md

## Installation

```bash
yarn add @makerdao/multicall
```

## Usage

```javascript
import { createWatcher } from '@makerdao/multicall';

// Contract addresses used in this example
const MKR_TOKEN = '0xaaf64bfcc32d0f15873a02163e7e500671a4ffcd';
const MKR_WHALE = '0xdb33dfd3d61308c33c63209845dad3e6bfb2c674';
const MKR_FISH = '0x2dfcedcb401557354d0cf174876ab17bfd6f4efd';

// Preset can be 'mainnet', 'kovan', 'rinkeby', 'goerli' or 'xdai'
const config = { preset: 'kovan' };

// Create watcher
const watcher = createWatcher(
  [
    {
      target: MKR_TOKEN,
      call: ['balanceOf(address)(uint256)', MKR_WHALE],
      returns: [['BALANCE_OF_MKR_WHALE', val => val / 10 ** 18]],
    },
  ],
  config
);

// Subscribe to state updates
watcher.subscribe(update => {
  console.log(`Update: ${update.type} = ${update.value}`);
});

// Subscribe to batched state updates
watcher.batch().subscribe(updates => {
  // Handle batched updates here
  // Updates are returned as { type, value } objects, e.g:
  // { type: 'BALANCE_OF_MKR_WHALE', value: 70000 }
});

// Subscribe to new block number updates
watcher.onNewBlock(blockNumber => {
  console.log('New block:', blockNumber);
});

// Start the watcher polling
watcher.start();
```

```javascript
// The JSON RPC URL and multicall contract address can also be specified in the config:
const config = {
  rpcUrl: 'https://kovan.infura.io',
  multicallAddress: '0xc49ab4d7de648a97592ed3d18720e00356b4a806',
};
```

```javascript
// Update the watcher calls using tap()
const fetchWaiter = watcher.tap(calls => [
  // Pass back existing calls...
  ...calls,
  // ...plus new calls
  {
    target: MKR_TOKEN,
    call: ['balanceOf(address)(uint256)', MKR_FISH],
    returns: [['BALANCE_OF_MKR_FISH', val => val / 10 ** 18]],
  },
]);
// This promise resolves when the first fetch completes
fetchWaiter.then(() => {
  console.log('Initial fetch completed');
});
```

```javascript
// Recreate the watcher with new calls and config (allowing the network to be changed)
const config = { preset: 'mainnet' };
watcher.recreate(
  [
    {
      target: MKR_TOKEN,
      call: ['balanceOf(address)(uint256)', MKR_WHALE],
      returns: [['BALANCE_OF_MKR_WHALE', val => val / 10 ** 18]],
    },
  ],
  config
);
```

## Helper Functions

Special variables and functions (e.g. `addr.balance`, `block.blockhash`, `block.timestamp`) can be accessed by calling their corresponding helper function.
To call these helper functions simply omit the `target` property (and it will default to multicall's contract address).

```javascript
const watcher = createWatcher(
  [
    {
      call: ['getEthBalance(address)(uint256)', '0x72776bb917751225d24c07d0663b3780b2ada67c'],
      returns: [['ETH_BALANCE', val => val / 10 ** 18]],
    },
    {
      call: ['getBlockHash(uint256)(bytes32)', 11482494],
      returns: [['SPECIFIC_BLOCK_HASH_0xFF4DB']],
    },
    {
      call: ['getLastBlockHash()(bytes32)'],
      returns: [['LAST_BLOCK_HASH']],
    },
    {
      call: ['getCurrentBlockTimestamp()(uint256)'],
      returns: [['CURRENT_BLOCK_TIMESTAMP']],
    },
    {
      call: ['getCurrentBlockDifficulty()(uint256)'],
      returns: [['CURRENT_BLOCK_DIFFICULTY']],
    },
    {
      call: ['getCurrentBlockGasLimit()(uint256)'],
      returns: [['CURRENT_BLOCK_GASLIMIT']],
    },
    {
      call: ['getCurrentBlockCoinbase()(address)'],
      returns: [['CURRENT_BLOCK_COINBASE']],
    },
  ],
  { preset: 'kovan' }
);
```

## Examples

Check out this [CodePen example](https://codepen.io/michaelelliot/pen/MxEpNX?editors=0010) for a working front-end example.

To run the example in the project, first clone this repo:

```bash
git clone https://github.com/makerdao/multicall.js
```

Then install the dependencies:

```bash
yarn
```

Finally run the example script (`examples/es-example.js`):

```bash
yarn example
```

## Test

To run tests use:

```bash
yarn test
```
