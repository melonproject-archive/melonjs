# Environment

The `Environment` class provides the context for all the functions you'll call.  Its constructor function requires the network on which you're working \(this will be a testnet of some sort or the Ethereum mainnet if you're cooking with gas\) and a deployment `config` file that specifies the addresses of the current Melon Protocol contracts, the ERC-20 tokens that are tradeable on Melon, and the exchanges upon which they're traded. A copy of one of these files can be found in the `/examples` directory in this repo.

```javascript
const { Eth } = require('web3-eth');
const { HttpProvider } = require('web3-providers');
const { DeployedEnvironment } = require('@melonproject/melonjs');

// Instantiate the environment where you'll create your fund
const eth = new Eth(new HttpProvider('https://mainnet.infura.io/v3/9136e09ace01493b86fed528cb6a87a5', {
  confirmTransactionBlocks: 1,
}}));
const deployment = fs.readFileSync('./deployment.json');
const environment = new DeployedEnvironment(eth, deployment);
```

