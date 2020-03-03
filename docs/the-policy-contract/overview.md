# Overview

Policies are rules to which the fund manager must adhere. They come in a few different flavors. Each specific policy has its own contract \(`AssetWhitelist`, `MaxConcentration`, etc...\). The arguments passed to these contracts' deployment methods vary based on what the policy is enforcing and are fairly intuitive. For instance, `AssetWhiteList`'s deployment method accepts an array of addresses, `MaxConcentration` accepts a BigNumber, and so on. A full discussion of policies and their enforcement dynamics can be found [here](https://docs.melonport.com/chapters/fund.html#policies).

**One thing to note: to deploy specific policy contracts, you must pass the corresponding byte code to the that contract's deployment method.** Luckily, MelonJS provides that for you as well.   

Let's create a `MaxPositions` policy, whose purpose is fairly self-explanatory. 

```javascript
const { MaxPositions } = require('@melonproject/melonjs');
const { MaxPositionsBytecode } = require('@melonproject/melonjs/abis/MaxPositions.bin');

const fundAddress = string // the address of the fund 
const manager = new PolicyManager(environment, policyManagerAddress)

const numberOfPositions = new BigNumber(5);
const transaction = MaxPositions.deploy(environment, MaxPositionsByteCode, fundAddress, numberOfPositions);

transaction.validate()
  .then(() => transaction.prepare({ gasPrice: GAS_PRICE })) // of your choosing, or omit this
  .then((options) => {
    const tx = transaction.send(options);

    tx.once('transactionHash', hash => console.log(`Pending: ${hash}`));
    tx.once('receipt', receipt => resolve(receipt));
    tx.once('error', error => reject(error));
  })
  .catch(error) => reject(error));
  });
```

Once you've deployed the Policy contract, you need to register it with your fund using the PolicyManager contract that you created when you set up the fund.

```javascript
const {PolicyManager } = require('@melonproject/melonjs');

const maxPositionsAddress = receipt.contractAddress // the address of the contract you just deployed
const maxPositionsSignature = string // the signature of the max positions policy
const policyManagerAddress = string // the address of the fund's policy manager contract
const fundAddress = string // the address of the fund


const manager = new PolicyManager(environment, policyManagerAddress)
const transaction = manager.registerPolicy(fundAddress, maxPositionsSignature, maxPositionsAddress
```

