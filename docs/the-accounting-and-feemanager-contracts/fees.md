# Fees



### The Accounting and FeeManager Contracts

The Accounting contract provides several methods to check the performance of a fund. It also works in tandem with FeeManager to manage and distribute management and performance fees. 

The fund's management fee is redeemable at any time, via the FeeManager contract. 

```javascript
const { FeeManager } = require('@melonproject/melonjs')

const feeManagerAddress = string; // address of the fund's trading contract
const fundAddress = string; // address of the fund manager

const feeManager = new FeeManager(environment, feeManagerAddress);

const transaction = feeManager.rewardManagementFees(fundAddress);

const receipt = etc ... // the usual transaction confirmation flow detailed in the first section of this usage guide.
```

To reward both the accrued management and performance fees, call the Accounting contract.

```javascript
const { Accounting } = require('@melonproject/melonjs')

const accountingAddress = string; // address of the fund's Accounting contract
const fundAddress = string; // address of the fund 

const accounting = new Account(environment, accountingAddress);

const transaction = accounting.triggerRewardAllFees(fundAddress)

const receipt = etc ... // the usual transaction confirmation flow detailed in the first section of this usage guide
```

You can also use the Accounting contract to query the fund's holdings.

```javascript
const fundHoldings = accounting.getFundHoldings()
// fundHoldings will be an array of objects shaped like this:
// [{address: string, amount: BigNumber}...]
```

You'll have to do the work to put an asset's name to the address.

The Accounting contract will also do some handy calculation work for you, providing a description of the Fund across various metrics.

```javascript
const fundStats = accounting.getCalculationResults()

// fundStats will be an object shaped like this:

{     
  sharePrice: BigNumber,
  gav: BigNumber
  nav: BigNumber
  feesInDenominationAsset: BigNumber
  feesInShares: BigNumber
  gavPerShareNetManagementFee: BigNumber
}

```

