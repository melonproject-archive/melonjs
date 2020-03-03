# Querying Fund Metrics

You can also use the `Accounting` contract to query the fund's holdings.

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

