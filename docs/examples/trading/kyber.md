# Kyber Network



In the example below, we'll fetch a rate and then trade `WETH` for `MLN`on the [Kyber Network](https://kyber.network/). 

{% hint style="info" %}
This example requires an [environment](../../building-blocks/environment/) instance as described [here](../../building-blocks/environment/).
{% endhint %}

```javascript
import { 
  Trading, 
  KyberTradingAdapter, 
  KyberNetworkProxy 
} from '@melonproject/melonjs';


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

// address of the fund's trading contract
const tradingAddress = '0x8bd52d089d46f9e5bc08ca66afdde58f8159870e'; 

// the fund manager's address
const managerAddress = '0xfbf4e3511bbb80f335988e7482efe2f6e1ef387e';

// declare an instance of the fund's Trading contract
const trading = new Trading(environment, tradingAddress); 

// the amount of the taker asset as implied by the rate returned above
const takerQty = makerQty.multipliedBy(rate.expectedRate);

// specify the gas price (refer to http://ethgasstation.info/).
const gasPrice = 2000000000000; 

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
const transaction = adapter.takeOrder(managerAddress, orderArgs);
const opts = await transaction.prepare({ gasPrice });
const receipt = await transaction.send(opts);
```

