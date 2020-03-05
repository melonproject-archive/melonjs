# Setting Up a Melon Fund

Given an `Environment` and a config file, you can spin up your own Melon fund. The first step is to define a few variables that your fund will depend on. Some of these will come from the `Environment` [you've defined already](https://melonjs.melonprotocol.com/building-blocks/environment). I've defined others by pointing at `config.json` that i've imported from a make believe directory \(there's an example [`here`](https://melonjs.melonprotocol.com/building-blocks/deploy-config)\) . You'll also be executing a few transactions using the`executeTransaction` function found at the bottom of the [Transaction section](https://melonjs.melonprotocol.com/building-blocks/transaction)

```javascript
const { Version, DeployedEnvironment } = require('@melonproject/melonjs')
const config = require('./config/mainnet-deployment.json') // this is on you to configure, but there are examples linked throughout this readme
const { Eth } = require('web3-eth');
const { HttpProvider } = require('web3-providers');


// Instantiate the environment where you'll create your fund
const eth = new Eth(new HttpProvider('https://mainnet.infura.io/v3/9136e09ace01493b86fed528cb6a87a5', {
  confirmTransactionBlocks: 1,
}}));
const environment = new DeployedEnvironment(eth, config);


const managerAddress = '0x324nfw023...' // the fund manager's address. 


// instantiate the current version of the Melon Fund Factory
const factory = new Version(environment, environment.deployment.melon.addr.Version)

// declare some more necessary variables
const denominationAddress = environment.deployment.tokens.addr['WETH']; // currently all funds are denominated in WETH
const defaultAssets = ["WETH", "MLN", "BAT", "DAI", "LINK", "MKR", "KNC"...](t => environment.deployment.tokens.addr[t]); // an array of token addresses
const managementFeeRate = new BigNumber(2).times('1000000000000000000'); // the management fee
const performanceFeeRate = new BigNumber(20).times('1000000000000000000'); // the performance fee

// these examples contain all exchanges currently integrated with the Melon protocol
// you're free to have as many or as few of these exchanges as you like
const exchanges = [environment.deployment.oasis.addr.OasisDexExchange, 
                environment.deployment.kyber.addr.KyberNetworkProxy,
                environment.deployment.zeroExV2.addr.ZeroExV2Exchange,
                environment.deployment.zeroExV3.addr.ZeroExV3Exchange,
                environment.deployment.melon.addr.Engine,
                environment.deployment.uniswap.UniswapExchange                
                ]; // an array of decentralized exchange addresses 
const adapters = [environment.melon.addr.OasisDexAdapter,
                environemnt.melon.addr.KyberAdapter,
                environment.melon.addr.ZeroExV2Adapter,
                environment.melon.addr.ZeroExV3Adapter
                environment.melon.addr.EngineAdapter,
                enviornment.melon.addr.UniswapAdapter
                ]; // an array of those exchanges' corresponding adapter contract addresses 

// pass your newly-defined variables to the `beginSetup` function to create the transaction and you're on your way.

const setupTransaction = factory.beginSetup(managerAddress, {
  name: 'TestFund',
  fees: [environment.deployment.melon.addr.ManagementFee, environment.deployment.melon.addr.PerformanceFee],
  feeRates: [managementFeeRate, performanceFeeRate],
  feePeriods: [new BigNumber(0), new BigNumber(90 * 60 * 60 * 24)], //  in this case management fee is always redeemable, performance fee every 90 days
  exchanges: exchanges,
  adapters: adapters,
  denominationAsset: denominationAssetAddress,
  defaultAssets: defaultAssets,
});

// pass this transaction to the contract described in a prior section (linked above) to execute
await executeTransaction(setupTransaction)

// Now, you'll create the spoke contracts individually, in this order:
const accountingTx = factory.createAccounting(managerAddress);
await executeTransaction(accountingTx);

const feeManagerTx = factory.createAccounting(managerAddress);
await executeTransaction(feeManagerTx);

const participationTx = factory.createParticipation(managerAddress);
await executeTransaction(participationTx);

const policyManagerTx = factory.createPolicyManager(managerAddress);
await executeTransaction(policyManagerTx);

const sharesTx = factory.createShares(managerAddress);
await executeTransaction(sharesTx);

const tradingTx = factory.createTrading(managerAddress);
await executeTransaction(tradingTx);

const vaultTx = factory.createVault(managerAddress);
await executeTransaction(vaultTx);

const finishTx = factory.completeSetup(managerAddress);
await executeTransaction(finishTx);
```

At this point, you have a fully capable Melon Fund. 

