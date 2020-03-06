# Fetching Prices

For various purposes, including calculating fund return metrics and share prices, the Melon Protocol fetches on-chain prices for all available assets once a day and saves them in state. These prices are accessible via MelonJS using query methods exposed by the  `KyberPriceSource` contract on the mainnet and the `TestingPriceFeed` contract on the rinkeby or kovan testnets.

{% hint style="info" %}
This example requires an [environment](../building-blocks/environment/) instance as described [here](../building-blocks/environment/).
{% endhint %}

```javascript
import { KyberPriceSource } from '@melonproject/melonjs';

// declare the priceSourceAddress 
const priceSourceAddress = environment.melon.addr.KyberPriceFeed;
// create a contract instance
const priceSource = KyberPriceSource(environment, priceSourceAddress);

// There are a many methods exposed on this contract instance.
// We'll lay them out below, mostly in reference to the MLN token

const mlnAddress = environment.tokens.addr.MLN;
const batAddress = environment.tokens.addr.BAT

const quoteAssetAddress = priceSource.getQuoteAsset(); // returns, at this point, the WETH address

const lastUpdate = await priceSource.getLastUpdate(); // returns the unix timestamp of the last pricefeed update

const valid = priceSource.hasValidPrice(mlnAddress); // returns a boolean indicating whether the last price feed update was successful

const mulitValid = priceSource.hasValidPrices([mlnAddress, batAddress, quoteAssetAddress]); // makes the same call as above on an array of tokens

const mlnPrice = await priceSource.getPrice(mlnAddress); // returns {price: bigNumber, timestamp: date}

const variousPrices = await priceSource.getPrice([mlnAddress, quoteAssetAddress, batAddress]); // returns an array of price objects like the method directly above

const weirdPriceExists = await priceSource.existsPriceOnAssetPair(mlnAddress, batAddress); // returns a boolean if this asset pair exists in the price feed

const mlnBatRate = await priceSource.getReferencePriceInfo(mlnAddress, batAddress); // returns the { price: BigNumber, decimals: number } relative to the pair passed to the method

const mlnInBat = await priceSource.convertQuantity(new BigNumber(10).multipliedBy('1e8'), mlnAddress, batAddress); // returns the number of BAT you'd get for 10 MLN as a BigNumber
```





