# MelonJS

[![Build status](https://img.shields.io/travis/melonproject/melonjs)](https://travis-ci.org/melonproject/melonjs)
[![Package version](https://img.shields.io/npm/v/@melonproject/melonjs)](https://www.npmjs.com/package/@melonproject/melonjs)
![License](https://img.shields.io/npm/l/@melonproject/melonjs)

**MelonJS** is a convenient JavaScript interface for interacting with the Melon Protocol smart contracts on the Ethereum blockchain. It allows users to call functions on the contracts at every point of a fund's life cycle. We envision this functionality enabling a wide variety of apps, from fund creation and investor relations management to trading bots and automatic portfolio rebalancing.

## Summary

MelonJS allows you to create instances of and call functions on the following Melon contracts:

- Accounting
- Fee Manager
- Participation
- Policy Manager
- Shares
- Trading
- Vault
- CompleteSetup

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

All MelonJS functions require the definition of an `environment` to contextualize where they are being called and the `version` of the Melon protocol within that environment. This example uses Web3 utilities, an Infura node endpoint, and a json config file to create an environment.

```javascript
const BigNumber = require('bignumber.js');
const { Eth } = require('web3-eth');
const { HttpProvider } = require('web3-providers');
const { DeployedEnvironment } = require('@melonproject/melonjs');

// Instantiate the environment and version where you'll create your fund
const eth = new Eth(new HttpProvider('https://mainnet.infura.io/v3/9136e09ace01493b86fed528cb6a87a5', {
  confirmTransactionBlocks: 1,
}}));
const deployment = fs.readFileSync('./deployment.json');
const environment = new DeployedEnvironment(eth, deployment);

```

Once you've got an environment and version defined, you can use them to set up a Melon fund.

```javascript
const BigNumber = require('bignumber.js');

async function beginSetup(environment, config, sender, gasPrice) {
  // instantiate the current version (per your environment) of the Melon protocol
  const version = new Version(environment, environment.deployment.melon.addr.Version);

  // define the variables for your fund. See the fundCofig file in the example directory in this repo for guidance here.
  const denominationAssetAddress = environment.deployment.tokens.addr[config.QuoteToken];
  const defaultAssets = config.AllowedTokens.map(t => environment.deployment.tokens.addr[t]);
  const managementFeeRate = new BigNumber(config.ManagementFee).times('1000000000000000000');
  const performanceFeeRate = new BigNumber(config.PerformanceFee).times('1000000000000000000');

  let exchanges = [];
  let adapters = [];

  // do this however you like, but the goal is to have two arrays of addresses, one for your exchanges, and the other for the corresponding adapter that the protocol uses to interact with them.

  if (config.Exchanges.includes('OasisDex')) {
    exchanges.push(environment.deployment.oasis.addr.OasisDexExchange);
    adapters.push(environment.deployment.melon.addr.OasisDexAdapter);
  }

  if (config.Exchanges.includes('KyberNetwork')) {
    exchanges.push(environment.deployment.kyber.addr.KyberNetworkProxy);
    adapters.push(environment.deployment.melon.addr.KyberAdapter);
  }

  if (config.Exchanges.includes('ZeroExV2')) {
    exchanges.push(environment.deployment.zeroExV2.addr.ZeroExV2Exchange);
    adapters.push(environment.deployment.melon.addr.ZeroExV2Adapter);
  }

  if (config.Exchanges.includes('ZeroExV3')) {
    exchanges.push(environment.deployment.zeroExV3.addr.ZeroExV3Exchange);
    adapters.push(environment.deployment.melon.addr.ZeroExV3Adapter);
  }

  if (config.Exchanges.includes('MelonEngine')) {
    exchanges.push(environment.deployment.melon.addr.Engine);
    adapters.push(environment.deployment.melon.addr.EngineAdapter);
  }
  if (config.Exchanges.includes('Uniswap')) {
    exchanges.push(environment.deployment.uniswap.addr.Engine);
    adapters.push(environment.deployment.uniswap.addr.EngineAdapter);
  }

  // pass your newly-defined variables to the `beginSetup` function and you're on your way.

  const tx = version.beginSetup(sender, {
    name: config.FundName,
    fees: [environment.deployment.melon.addr.ManagementFee, environment.deployment.melon.addr.PerformanceFee],
    feeRates: [managementFeeRate, performanceFeeRate],
    feePeriods: [new BigNumber(0), new BigNumber(90 * 60 * 60 * 24)],
    exchanges: exchanges,
    adapters: adapters,
    denominationAsset: denominationAssetAddress,
    defaultAssets: defaultAssets,
  });

  await tx.validate();

  const receipt = await tx.send(
    await tx.prepare({
      gasPrice,
    })
  );

  return receipt
}


// At this point, you'll need to call the setupSpokeContract methods individually, and in order:
const accountingTx = version.createAccounting(sender);
const accountingReceipt = await accountingTx.send(await accountingTx.prepare());
console.log(accountingReceipt);

// and so on, for createFeeManager, createParticipation, createPolicyManager, createShares, createTrading, createVault and finally completeSetup

```

## Testing

The tests contained in this repository use an in-memory ganache test chain.

In order to execute the tests, simply run:

```bash
yarn test
```

## Contributing

Third party contributions to this project are welcome and encouraged. If you want to contribute, please open an issue before submtting a pull requests so we can discuss the proposed changes and/or additions.

Please note that all repositories hosted under this organization follow our [Code of Conduct][coc], make sure to review and follow it.

[yarn]: https://yarnpkg.com
[node]: https://nodejs.org
[npm]: https://www.npmjs.com/package/@melonproject/melonjs
[coc]: https://github.com/melonproject/melonjs/blob/master/CODE_OF_CONDUCT.md
