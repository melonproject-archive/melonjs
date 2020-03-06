# Querying Fund Metrics

The `Accounting` contract exposes a number of query methods you can use to investigate a fund's metrics and holdings. 

{% hint style="info" %}
This example requires an [environment](../building-blocks/environment/) instance as described [here](../building-blocks/environment/).
{% endhint %}

```javascript
import { Accounting } from '@melonproject/melonjs';

const accountingAddress = '0x309sfdw...'; // the address of the fund's accounting contract
const fundManagerAddress = '0xfjewf2023ds...'; // address of the fund manager
const gasPrice = 2000000000000; // specify the gas price (refer to http://ethgasstation.info/).

const accounting = new Accounting(environmnet, accountingAddress);
const melon = environment.getToken('MLN');

const fundHoldings = accounting.getFundHoldings(); // fundHoldings will be an array of objects shaped like this: [ {address: string, amount: BigNumber}... ]
const fundStats = accounting.getCalculationResults(); // fundStats will be an object shaped like this:
// {     
//  sharePrice: BigNumber,
//  gav: BigNumber
//  nav: BigNumber
//  feesInDenominationAsset: BigNumber
//  feesInShares: BigNumber
//  gavPerShareNetManagementFee: BigNumber
// }

const maxOwnedAssets = await accounting.getMaxOwnedAssets(); // returns a number representing the historical maximum number of assets the fund owned
const ownedAssetsArrayLength = await accounting.getOwnedAssetsLength(); // returns a number == the lenght of the owned assets array
const specificAsset = accounting.ownedAsset(index); // returns the address of the asset in a particular index in the owned assets array
const allAssets = await accounting.allAssets(); // returns an array of addresses of all currently owned assets
const mlnHoldingAmount = await accounting.getAssetHolding(melon.address); // returns a BigNumber == the fund's holding of a specific token, in this case MLN
const defaultSharePrice = await accounting.getDefaultSharePrice(); // returns a BigNumber == the fund's default share price
const fundNativeAsset = accounting.getNativeAsset() // returns the address of the Fund's native asset
const fundGAV = await accounting.getGAV() // returns the fund's latest Gross Asset Value as a BigNumber
const shareCostInMLN = await accounting.getShareCostInAsset(new BigNumber(1), melon.address) // returns the cost of 1 share of the fund in MLN

```

