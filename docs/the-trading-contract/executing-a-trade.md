# Executing a Trade



Once you've got that rate, you can move on to the fun part.  

```javascript
const { Trading, KyberTradingAdapter } = require('@melonproject/melonjs');
const tradingAddress = string; // address of the fund's trading contract
const trading = new Trading(environment, tradingAddress); // tradingContract is the string address of the trading contract belonging to the fund in question. This will define a Trading class specific to the fund.

const orderArgs =  {
  makerAsset: Address; // address of the makerToken
  takerAsset: Address; // address of the takerToken
  makerQuantity: BigNumber; // amount of the makerToken with the appropriate number of decimal places ***Note that if you're calling these functions sequentially, makerQuantity shoudld be equal to the user -specified takerQuantity multiplied by the expectedRate that was fetched from the KyberNetworkProxy
  takerQuantity: BigNumber; // amount of the takerToken with the appropriate number of decimal places
}

const adapter = await KyberTradingAdapter.create(environment, exchange, trading);

const tx = adapter.takeOrder(from, orderArgs) // The from argument is the wallet address that's initiating the transaction, and kyberTakeOrderArgs an object in the shape noted above. takeOrder() returns a Transaction, which you can pass through the flow we described in the Transaction primitive section above.

const receipt = etc ... // the usual transaction confirmation flow detailed in the first section of this usage guide.
```

