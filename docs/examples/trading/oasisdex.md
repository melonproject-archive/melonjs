# OasisDex

Oasis is a liquidity pool on the Ethereum blockchain. You can read more about it [here](https://developer.makerdao.com/oasis/). In the example below, we'll trade on an OasisDex order.

{% hint style="info" %}
This example requires an [environment](../../building-blocks/environment/) instance as described [here](../../building-blocks/environment/).
{% endhint %}

```javascript
import { 
  ExchangeIdentifier,
  OasisDexExchange, 
  OasisDexTradingAdapter, 
  Trading 
} from '@melonproject/melonjs';

// your hub address
const hubAddress = '0x05263237f43190ce0e93b48afb25dd60a03ad3c5';

// the address of the fund's manager 
const fundManager = '0x0b64bf0fae1b9ffa80cd880f5b82d467ee34c28e'; 

// declare an instance of the fund's hub to access the spoke contract addresses
const hub = new Hub(environment, hubAddress);

// the address of the fund's trading contract
const tradingAddress = hub.getRoutes().trading; // declare an exchange object, shape noted in ~/buildingblocks/environment
const exchange = environment.getExchange(ExchangeIdentifier.OasisDex); 

// the maker token object
const maker = environment.getToken('WETH');

// the taker token object
const taker = environment.getToken('MLN');


// using an OasisDex order retrieved from their API and shaped as such:
const order = { 
  id: new BigNumber(112), 
  sellQuantity: new BigNumer(120), 
  buyQuantity: new BigNumber(110) 
};


// declare an instance of the Trading contract
const trading = new Trading(environment, tradingAddress); 

// create an instance of the OasisDexExchange contract
const market = new OasisDexExchange(environment, exchange.exchange); 


// create an instance of the OasisDexTradingAdapter contract
const adapter = await OasisDexTradingAdapter.create(
  environment, 
  exchange.exchange, 
  trading
); 

// use the exchange to get the specific offer
const offer = await market.getOffer(order.id); 

// the amount of the takerAsset to buy with the makerAsset
const quantity = new BigNumber(100);

// specify the gas price (refer to http://ethgasstation.info/).
const gasPrice = 2000000000000; 

// create and execute the transaction
const transaction = adapter.takeOrder(
  fundManager, 
  order.id, 
  offer, 
  quantity
);
const opts = await transaction.prepare({ gasPrice });
const receipt = await transaction.send(opts);
```

