# Uniswap

In the example below, we'll fetch a rate and then trade `WETH` for `MLN`on [Uniswap](uniswap.md). 

{% hint style="info" %}
This example requires an [environment](../../building-blocks/environment/) instance as described [here](../../building-blocks/environment/).
{% endhint %}

```javascript
import {
  ExchangeIdentifier,
  Hub,
  Trading,
  UniswapExchange, 
  UniswapTradingAdapter, 
  UniswapFactory, 
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
const gasPrice = 2000000000000; 

// the maker token object
const maker = environment.getToken('WETH');

// the taker token object
const taker = environment.getToken('MLN');

// we'll buy 100 MLN (denominated in the decimals of the respective token)
const takerQuantity = new BigNumber(100).multipliedBy(
  new BigNumber(10).exponentiatedBy(taker.decimals)
); 

// first we'll find the available price for 100 MLN

// get the address of the WETH/MLN uniswap exchange
const exchangeAddress = await UniswapFactory.getExchange(taker.address);

// create an instance of that exchange
const exchange = new UniswapExchange(environment, exchangeAddress); 

// query the available MLN
const makerQuantity = await exchange.getTokenToEthInputPrice(takerQuantity); 

// do the math to deduce the rate of MLN per WETH
const price = makerQuantity.dividedBy(takerQuantity); 

// We'll next submit an order by preparing a transaction and pushing it through the normal pattern

// create a new instance of the fund's Trading contract
const trading = new Trading(environment, tradingAddress);

// assemble an orderArgs object to pass to the takeOrderFunction
const orderArgs =  {
  makerQuantity: makerQty; // amount of the makerToken 
  takerQuantity: takerQty; // amount of the takerToken 
  makerAsset: maker.address; // address of the makerToken
  takerAsset: taker.address; // address of the takerToken
};    

// create the adapter instance
const adapter = await UniswapTradingAdapter.create(environment, exchangeAddress, trading);

// create and execute the transaction
const transaction = adapter.takeOrder( fundManager, orderArgs );
const opts = transaction.prepare({ gasPrice });
const receipt = transaction.send(opts);
```

