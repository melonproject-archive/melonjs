# Querying Prices

The Melon Protocol is directly integrated with the smart contracts of various trading venues. MelonJS provides an avenue to interact with those exchanges to query prices and trade tokens. These two concerns are handled by separate classes.  

```javascript
const { KyberNetworkProxy } = require('@melonproject/melonjs');
const makerToken = string; // address of the token you own
const takerToken = string; // address of the token you want to own
const makerQty = BigNumber; // amount of the makerToken that you'd like to swap for the destToken with the appropriate number of decimal places
const priceChecking = new KyberNetworkProxy(environment, environment.deployment.kyber.addr.KyberNetworkProxy);
const expectedRate = await priceChecking.getExpectedRate(makerToken, takerToken, makerQty);
```

expectedRate is an object shaped like so:

```text
{
  expectedRate: new BigNumber(expectedRate),
  slippageRate: new BigNumber(slippageRate),
}
```

