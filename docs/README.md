# Introduction

## MelonJS

[![Build status](https://img.shields.io/travis/melonproject/melonjs)](https://travis-ci.org/melonproject/melonjs) [![Package version](https://img.shields.io/npm/v/@melonproject/melonjs)](https://www.npmjs.com/package/@melonproject/melonjs) ![License](https://img.shields.io/npm/l/@melonproject/melonjs)

**MelonJS** is a convenient JavaScript interface for interacting with the Melon Protocol smart contracts on the Ethereum blockchain. It allows users to call functions on the contracts at every point of a fund's life cycle. We envision this functionality enabling a wide variety of apps, from fund creation and investor relations management to trading bots and automatic portfolio rebalancing.

### Summary

MelonJS allows you to create instances of and call functions on the following Melon contracts:







* Accounting
* Fee Manager
* Participation
* Policy Manager
* Shares
* Trading
* Vault

### Installation and Development

This library is published as an [npm package](https://www.npmjs.com/package/@melonproject/melonjs). You can install it through npm or yarn.

```bash
# Using yarn
yarn add @melonproject/melonjs

# Using npm
npm install @melonproject/melonjs
```

Before you can start developing, you'll need to have [Node.js](https://nodejs.org) and [Yarn](https://yarnpkg.com) installed.

Installing only takes two commands and you're ready to roll:

```bash
# Install all library dependencies.
yarn install

# Generate the abi and bytecode files for the smart contracts.
yarn codegen
```

You are now ready to start development. Check out the package.json scripts for useful commands for testing, test coverage, building and watch mode.

### Testing

The tests contained in this repository use an in-memory ganache test chain.

In order to execute the tests, simply run:

```bash
yarn test
```

### Contributing

Third party contributions to this project are welcome and encouraged. If you want to contribute, please open an issue before submtting a pull requests so we can discuss the proposed changes and/or additions.

Please note that all repositories hosted under this organization follow our [Code of Conduct](https://github.com/melonproject/melonjs/blob/master/CODE_OF_CONDUCT.md), make sure to review and follow it.

