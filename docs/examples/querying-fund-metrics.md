# Querying Fund Metrics

The `Accounting` contract exposes a number of query methods you can use to investigate a fund's metrics and holdings. 

{% hint style="info" %}
This example requires an [environment](../building-blocks/environment/) instance as described [here](../building-blocks/environment/).
{% endhint %}

```javascript
import { Accounting } from '@melonproject/melonjs';

// the address of the fund's accounting contract
const accountingAddress = '0x92eb512143439ea1b3ad67249dd61ed99783d252'; 

// the address of the fund manager
const fundManagerAddress = '0x1e28b0d5edc7b1acad5abf4a048b5a1f6493673f'; 

// the Melon token object
const melon = environment.getToken('MLN');

// create an instance of the fund's accounting contract
const accounting = new Accounting(environmnet, accountingAddress);

// an array of objects shaped like this: [ {address: string, amount: BigNumber}... ]
const fundHoldings = await accounting.getFundHoldings(); 

// an object containing the fund's financial metrics - see below for an example
const calculationResults = await accounting.getCalculationResults(); 

// a number representing the historical maximum number of assets the fund owned
const maxOwnedAssets = await accounting.getMaxOwnedAssets(); 

// a number equal to the length of the owned assets array
const ownedAssetsArrayLength = await accounting.getOwnedAssetsLength(); 

// the address of the asset in a particular index in the owned assets array
const specificAsset = await accounting.ownedAsset(index); 

// an array of addresses of all currently owned assets
const allAssets = await accounting.allAssets(); 

// a BigNumber equal to the fund's holding of a specific token, in this case MLN
const mlnHoldingAmount = await accounting.getAssetHolding(melon.address); 

// a BigNumber equal to the fund's default share price
const defaultSharePrice = await accounting.getDefaultSharePrice(); 

// the address of the Fund's native asset
const fundNativeAsset = await accounting.getNativeAsset(); 

// the fund's latest Gross Asset Value as a BigNumber
const fundGAV = await accounting.getGAV(); 

// the cost of 1 share of the fund in MLN
const shareCostInMLN = await accounting.getShareCostInAsset(
  new BigNumber(1), 
  melon.address
);

```

The `CalculationResults` object returned from `accounting.getCalculationResults` is shaped thusly:

```javascript

CalculationResults {
  sharePrice: BigNumber;
  gav: BigNumber;
  nav: BigNumber;
  feesInDenominationAsset: BigNumber;
  feesInShares: BigNumber;
  gavPerShareNetManagementFee: BigNumber;
}
```

