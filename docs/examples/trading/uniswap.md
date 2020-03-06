# Uniswap

In the example below, we'll fetch a rate and then trade `WETH` for `MLN`on [Uniswap](uniswap.md). 

{% hint style="info" %}
This example requires an [environment](../../building-blocks/environment/) instance as described [here](../../building-blocks/environment/).
{% endhint %}

```javascript
import {
    UniswapExchange, 
    UniswapTradingAdapter, 
    UniswapFactory, 
    Trading,
} from '@melonproject/melonjs';

const makerAddress = environment.getToken('WETH').address // WETH, which we'll trade for
const takerAddress = environment.getToken('MLN').address  // MLN
const takerQuantity = new BigNumber(100).multipliedBy('1e18') // we'll buy 100 MLN (as always, denominated in WEI)

// first we'll find the available price for 100 MLN
const exchangeAddress = await uniswapFactory.getExchange(takerAddress) // get the address of the WETH/MLN uniswap exchange
const exchange = new UniswapExchange(environment, exchangeAddress) // create an instance of that exchange
const makerQuantity = await exchange.getTokenToEthInputPrice(takerQuantity) // query the available MLN
const price = makerQuantity.divdidedBy(takerQuantity) // do the math to deduce the rate of MLN per WETH

// Assuming that price is agreeable, we'll next submit an order by preparing a transaction and pushing it through the normal pattern
const tradingAddress = '0x32fdsl23...'; // the fund's trading contract address
const managerAddress = '0x93jfdsf...'; // the fund manager's address
const trading = new Trading(environment, tradingAddress);
const gasPrice = 2000000000000; // specify the gas price (refer to http://ethgasstation.info/).

// assemble an orderArgs object to pass to the takeOrderFunction
const orderArgs =  {
  makerQuantity: makerQty; // amount of the makerToken with the appropriate number of decimal places ***Note that if you're calling these functions sequentially, makerQuantity shoudld be equal to the user -specified takerQuantity multiplied by the expectedRate that was fetched from the KyberNetworkProxy
  takerQuantity: takerQty; // amount of the takerToken with the appropriate number of decimal places
  makerAsset: makerAddress; // address of the makerToken
  takerAsset: takerAddress; // address of the takerToken
}

// Create the adapter instance
const adapter = await UniswapTradingAdapter.create(environment, exchangeAddress, trading);

// Create the transaction
const transaction = adapter.takeOrder( managerAddress, orderArgs );

// Push it through the normal pattern
await transaction.send(transaction.prepare({
    gasPrice,
})
```



