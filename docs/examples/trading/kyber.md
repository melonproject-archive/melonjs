# Kyber Network



In the example below, we'll fetch a rate and then trade `WETH` for `MLN`on the [Kyber Network](https://kyber.network/). 

{% hint style="info" %}
This example requires an [environment](../../building-blocks/environment/) instance as described [here](../../building-blocks/environment/).
{% endhint %}

```javascript
import { 
  Hub,
  KyberNetworkProxy
  KyberTradingAdapter,  
  Trading
} from '@melonproject/melonjs';

// your hub address
const hubAddress = '0x05263237f43190ce0e93b48afb25dd60a03ad3c5';

// the address of the fund's manager 
const fundManager = '0x0b64bf0fae1b9ffa80cd880f5b82d467ee34c28e'; 

// declare an instance of the fund's hub to access the spoke contract addresses
const hub = new Hub(environment, hubAddress);

// the address of the fund's trading contract
const tradingAddress = hub.getRoutes().trading; 

// specify the gas price (refer to http://ethgasstation.info/).
const gasPrice = 30000000000; 

// the address of WETH, 
const makerAddress = environment.getToken('WETH').address;

// which we'll trade for MLN
const takerAddress = environment.getToken('MLN').address;  

// amount of the makerToken that you'd like to swap for the takerToken with 18 decmials
const makerQty = new BigNumber(100).multipliedBy('1e18'); 

// declare an instance of the KyberNetworkProxy contract
const priceChecking = new KyberNetworkProxy(
  environment, 
  environment.deployment.kyber.addr.KyberNetworkProxy
);

// an object shaped like: { expectedRate: BigNumber, slippageRate: BigNumber }
const rate = await priceChecking.getExpectedRate(makerToken, takerToken, makerQty);

// We'll next submit an order by preparing a transaction and pushing it through the normal pattern

// declare an instance of the fund's Trading contract
const trading = new Trading(environment, tradingAddress); 

// the amount of the taker asset as implied by the rate returned above
const takerQty = makerQty.multipliedBy(rate.expectedRate);

// assemble an orderArgs object to pass to the takeOrderFunction
const orderArgs =  {
  makerAsset: makerAddress; // address of the makerToken
  takerAsset: takerAddress; // address of the takerToken
  makerQuantity: makerQty; // amount of the makerToken
  takerQuantity: takerQty; // amount of the takerToken
};

// Create the adapter instance
const adapter = await KyberTradingAdapter.create(environment, exchange, trading);

// Create and execute the transaction
const transaction = adapter.takeOrder(fundManager, orderArgs);
const opts = await transaction.prepare({ gasPrice });
const receipt = await transaction.send(opts);
```

