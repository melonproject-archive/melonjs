# Kyber Network

{% hint style="info" %}
This example requires an [environment](../../building-blocks/environment/) instance as described [here](../../building-blocks/environment/).
{% endhint %}

```javascript
import { Trading, KyberTradingAdapter KyberNetworkProxy } from '@melonproject/melonjs';

// first we'll find the available price for 100 MLN
const makerAddress = environment.getToken('WETH').address // WETH, which we'll trade for...
const takerAddress = environment.getToken('MLN').address  // MLN
const takerQty = new BigNumber(100).multipliedBy('1e18'); // amount of the makerToken that you'd like to swap for the destToken with the appropriate number of decimal places
const priceChecking = new KyberNetworkProxy(environment, environment.deployment.kyber.addr.KyberNetworkProxy);
const rate = await priceChecking.getExpectedRate(makerToken, takerToken, makerQty);

// rate is an object shaped like so:
//{ expectedRate: new BigNumber(expectedRate), slippageRate: new BigNumber(slippageRate) }


// Assuming that price is agreeable, we'll next submit an order by preparing a transaction and pushing it through the normal pattern
const trading = new Trading(environment, tradingAddress); // tradingContract is the string address of the trading contract belonging to the fund in question. This will define a Trading class specific to the fund.
const tradingAddress = string; // address of the fund's trading contract
const managerAddress = '0x3fmoiwe...' // the fund manager's address
const makerQty = takerQty.multipliedBy(rate.expectedRate)
const gasPrice = 2000000000000; // specify the gas price (refer to http://ethgasstation.info/).

// assemble an orderArgs object to pass to the takeOrderFunction
const orderArgs =  {
  makerAsset: makerAddress; // address of the makerToken
  takerAsset: takerAddress; // address of the takerToken
  makerQuantity: makerQty; // amount of the makerToken
  takerQuantity: takerQty; // amount of the takerToken
}

// Create the adapter instance
const adapter = await KyberTradingAdapter.create(environment, exchange, trading);

// Create the transaction
const transaction = adapter.takeOrder(managerAddress, orderArgs)

// Push it through the normal pattern
await transaction.send(transaction.prepare({
    gasPrice,
})
```

