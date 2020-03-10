# Uniswap

In the example below, we'll fetch a rate and then trade `WETH` for `MLN`on [Uniswap](uniswap.md). 

{% hint style="info" %}
This example requires an [environment](../../building-blocks/environment/) instance as described [here](../../building-blocks/environment/).
{% endhint %}

```javascript
import {
  ExchangeIdentifier,
  Trading,
  UniswapExchange, 
  UniswapTradingAdapter, 
  UniswapFactory, 
} from '@melonproject/melonjs';

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
const price = makerQuantity.divdidedBy(takerQuantity); 

// We'll next submit an order by preparing a transaction and pushing it through the normal pattern

// the fund's trading contract address
const tradingAddress = '0xfbf4e3511bbb80f335988e7482efe2f6e1ef387e'; 

// the fund manager's address
const managerAddress = '0x8bd52d089d46f9e5bc08ca66afdde58f8159870e'; 

// specify the gas price (refer to http://ethgasstation.info/).
const gasPrice = 2000000000000; 

// create a new instance of the fund's Trading contract
const trading = new Trading(environment, tradingAddress);

// assemble an orderArgs object to pass to the takeOrderFunction
const orderArgs =  {
  makerQuantity: makerQty; // amount of the makerToken with the appropriate number of decimal places ***Note that if you're calling these functions sequentially, makerQuantity shoudld be equal to the user -specified takerQuantity multiplied by the expectedRate that was fetched from the KyberNetworkProxy
  takerQuantity: takerQty; // amount of the takerToken with the appropriate number of decimal places
  makerAsset: maker.address; // address of the makerToken
  takerAsset: taker.address; // address of the takerToken
};    

// create the adapter instance
const adapter = await UniswapTradingAdapter.create(environment, exchangeAddress, trading);

// create and execute the transaction
const transaction = adapter.takeOrder( managerAddress, orderArgs );
const opts = transaction.prepare({ gasPrice });
const receipt = transaction.send(opts);
```

