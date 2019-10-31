# MelonJS

> A convenient JavaScript interface to the Melon protocol Ethereum smart contracts.

[![Build status](https://img.shields.io/travis/Avantgarde-Finance/melonjs)](https://travis-ci.org/Avantgarde-Finance/melonjs)
[![Package version](https://img.shields.io/npm/v/@melonproject/melonjs)](https://www.npmjs.com/package/@melonproject/melonjs)
![License](https://img.shields.io/npm/l/@melonproject/melonjs)

## Installation

This library is published as an [npm package][npm]. You can install it through npm or yarn.

```
# Using yarn
yarn install @melonproject/melonjs

# Using npm
npm install @melonproject/melonjs
```

## Development

Before you can start developing, you'll need to have [Node.js][node] and [Yarn][yarn] installed.

Installing only takes two commands and you're ready to roll:

```
# Install all library dependencies.
yarn install

# Generate the abi and bytecode files for the smart contracts.
yarn codegen
```

You are now ready to start development. Check out the package.json scripts for useful commands for testing, test coverage, building and watch mode.

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
[coc]: https://github.com/Avantgarde-Finance/melonjs/blob/master/CODE_OF_CONDUCT.md
