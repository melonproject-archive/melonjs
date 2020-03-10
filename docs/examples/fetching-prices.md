# Fetching Prices

For various purposes, including calculating fund return metrics and share prices, the Melon Protocol fetches on-chain prices for all available assets once a day and saves them in state. These prices are accessible via MelonJS using query methods exposed by the  `KyberPriceSource` contract on the mainnet and the `TestingPriceFeed` contract on the rinkeby or kovan testnets.

{% hint style="info" %}
This example requires an [environment](../building-blocks/environment/) instance as described [here](../building-blocks/environment/).
{% endhint %}

```javascript
import { KyberPriceSource } from '@melonproject/melonjs';

// the priceSourceAddress 
const priceSourceAddress = environment.melon.addr.KyberPriceFeed;

// declare an instance of the KyberPriceSource contract
const priceSource = new KyberPriceSource(environment, priceSourceAddress);

// There are a many methods exposed on this contract instance.
// We'll lay them out below

// the MLN token object
const mln = environment.getToken('MLN')

// the BAT token object
const bat = environment.getToken('BAT'

// the WETH address
const quoteAssetAddress = await priceSource.getQuoteAsset(); 

// returns the unix timestamp of the last pricefeed update
const lastUpdate = await priceSource.getLastUpdate(); 

// returns a boolean indicating whether the last price feed update was successful
const valid = await priceSource.hasValidPrice(mln.address); 

// makes the same call as above on an array of tokens
const multiValid = await priceSource.hasValidPrices([mln.address, bat.address]);

// returns {price: bigNumber, timestamp: date}
const mlnPrice = await priceSource.getPrice(mln.address); 

// returns an array of price objects like the method directly above
const variousPrices = await priceSource.getPrice([mln.address, bat.address]); 

// returns a boolean if this asset pair exists in the price feed
const weirdPriceExists = await priceSource.existsPriceOnAssetPair(mln.address, bat.address); 

// returns the { price: BigNumber, decimals: number } relative to the pair passed to the method
const mlnBatRate = await priceSource.getReferencePriceInfo(
  mln.address, 
  bat.address
); 

// returns the number of BAT you'd get for 10 MLN as a BigNumber
const mlnInBat = await priceSource.convertQuantity(
  new BigNumber(10).multipliedBy('1e8'), 
  mln.address, 
  bat.address
); 
```

