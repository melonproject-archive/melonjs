# OasisDex

Oasis is a liquidity pool on the Ethereum blockchain. You can read more about it [here](https://developer.makerdao.com/oasis/).

{% hint style="info" %}
This example requires an [environment](../../building-blocks/environment/) instance as described [here](../../building-blocks/environment/).
{% endhint %}

```javascript
import { OasisDexExchange, OasisDexTradingAdapter, Trading } from '@melonproject/melonjs'

//OasisDex order objects look like this:
interface OasisDexOrder {
    id: BigNumber;
    sellQuantity: BigNumber;
    buyQuantity: BigNumber;
}

// we'll construct a fictional order to take:
const order = { 
    id: new BigNumber(112), 
    sellQuantity: new BigNumber(120), 
    buyQuantity: new BigNumber(110) 
}

const managerAddress = '0x234nfds...';// the fund manager's address
const exchange = environment.getExchange('OasisDex').exchange; // declare exchange, which is the ethereum address of the OasisDex exchange contract
const tradingAddress = '0x90sefwe...'; // the address of the fund's trading contract
const trading = new Trading(environment, tradingAddress); // declare an instance of the Trading contract
const market = new OasisDexExchange(environment, exchange.exchange); // create an instance of the OasisDexExchange contract
const adapter = await OasisDexTradingAdapter.create(environment, exchange.exchange, trading); // create an instance of the OasisDexTradingAdapter contract
const offer = await market.getOffer(order.id); // use the exchange to get the specific offer
const quantity = new BigNumber(100) // the amount of the takerAsset to buy with the makerAsset

// create the transaction
const transaction = adapter.takeOrder(managerAddress, order.id, offer, quantity);

// Push it through the normal pattern
await transaction.send(transaction.prepare({
    gasPrice,
})

```

