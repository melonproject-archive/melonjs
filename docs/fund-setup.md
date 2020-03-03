# Setting Up a Melon Fund

Given an `Environment` and a config file, you can spin up your own Melon fund. The first step is to define a few variables that your fund will depend on. Some of these will come from the `Environment` you've defined already. I've defined others by pointing at `config.json` \(there's an example in the /examples folder in this directory\) .

```javascript
const { Version } = require('@melonproject/melonjs')

const managerAddress = string // the fund manager's address. 

// instantiate the current version of the Melon Protocol
const version = new Version(environmnet, config, managerAddress, gasPrice)

const denominationAddress = environment.deployment.tokens.addr[config.QuoteToken]
const defaultAssets = config.AllowedTokens.map(t => environment.deployment.tokens.addr[t]) // an array of token addresses
const managementFeeRate = new BigNumber(config.ManagementFee).times('1000000000000000000'); // the management fee
const performanceFeeRate = new BigNumber(config.PerformanceFee).times('1000000000000000000'); // the performance fee

let exchanges = string[]; // an array of decentralized exchange addresses 
let adapters = string[]; // an array of those exchanges' corresponding adapter contract addresses

```

Next, you'll pass those variables to version's `beginSetup()` method to start the process.

```javascript
  // pass your newly-defined variables to the `beginSetup` function to create the transaction and you're on your way.

  const transaction = version.beginSetup(sender, {
    name: config.FundName,
    fees: [environment.deployment.melon.addr.ManagementFee, environment.deployment.melon.addr.PerformanceFee],
    feeRates: [managementFeeRate, performanceFeeRate],
    feePeriods: [new BigNumber(0), new BigNumber(90 * 60 * 60 * 24)],
    exchanges: exchanges,
    adapters: adapters,
    denominationAsset: denominationAssetAddress,
    defaultAssets: defaultAssets,
  });


const receipt = ... // pass the transaction through the flow described above

```

At this point, you'll need to call the `createSpokeContract` methods individually as such:

```javascript
const accountingTx = version.createAccounting(sender);
const accountingReceipt = ... // pass the transaction through the flow above to generate the receipt 

console.log(accountingReceipt);
```

These contract creation methods need to be called in the following order:

* createAccounting
* createFeeManager
* createParticipation
* createPolicyManager
* createShares
* createTrading

Once the spokes are all instantiated, call `Version.completeSetup(sender)` and pass it through the normal transaction flow to tie everything together. 

