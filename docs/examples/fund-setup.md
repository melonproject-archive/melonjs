# Setting Up a Melon Fund

{% hint style="info" %}
This example requires an [environment](../building-blocks/environment/) instance as described [here](../building-blocks/environment/).
{% endhint %}



```javascript
import { Version, DeployedEnvironment } from '@melonproject/melonjs';

// instantiate the current version of the Melon Fund Factory
const factory = new Version(environment, environment.deployment.melon.addr.Version)

// declare some more necessary variables
const managerAddress = '0x324nfw023...' // the fund manager's address. 
const gasPrice = 2000000000000; // specify the gas price (refer to http://ethgasstation.info/).
const denominationAddress = environment.deployment.tokens.addr['WETH']; // currently all funds are denominated in WETH
const defaultAssets = environment.tokens.map(token => token.address) // 
const managementFeeRate = new BigNumber(2).multipliedBy('1e18'); // the management fee
const performanceFeeRate = new BigNumber(20).multipliedBy('1e18'); // the performance fee

// these examples contain all exchanges currently integrated with the Melon protocol
// you're free to have as many or as few of these exchanges as you like
const exchanges = environment.exchanges.map(exchange => exchange.exchange); // an array of decentralized exchange addresses 
const adapters = environment.exchanges.map(exchange => exchange.adapter); // an array of those exchanges' corresponding adapter contract addresses 

// pass your newly-defined variables to the `beginSetup` function to create the transaction and you're on your way.
{
  const transaction = factory.beginSetup(managerAddress, {
    name: 'TestFund',
    fees: [environment.deployment.melon.addr.ManagementFee, environment.deployment.melon.addr.PerformanceFee],
    feeRates: [managementFeeRate, performanceFeeRate],
    feePeriods: [new BigNumber(0), new BigNumber(90 * 60 * 60 * 24)], //  in this case management fee is always redeemable, performance fee every 90 days
    exchanges: exchanges,
    adapters: adapters,
    denominationAsset: denominationAssetAddress,
    defaultAssets: defaultAssets,
  });
  
  await transaction.send(await setupTransaction.prepare({
    gasPrice
  }));
}

// Now, you'll create the spoke contracts individually, in this order:

{
  const transaction = factory.createAccounting(managerAddress);
  await transaction.send(await setupTransaction.prepare({
      gasPrice
  }));
}

{
  const transaction = factory.createAccounting(managerAddress);
  await transaction.send(await setupTransaction.prepare({
      gasPrice
  }));  
}

{
  const transaction = factory.createParticipation(managerAddress);
  await transaction.send(await setupTransaction.prepare({
      gasPrice
  }));
}

{
  const transaction = factory.createPolicyManager(managerAddress);
  await transaction.send(await setupTransaction.prepare({
      gasPrice
  }));
}

{
  const transaction = factory.createShares(managerAddress);
  await transaction.send(await setupTransaction.prepare({
      gasPrice
  }));
}
  
{
  const transaction = factory.createTrading(managerAddress);
  await transaction.send(await setupTransaction.prepare({
      gasPrice
  }));
}

{
  const transaction = factory.createVault(managerAddress);
  await transaction.send(await setupTransaction.prepare({
      gasPrice
  }));
}

{
  const transaction = factory.completeSetup(managerAddress);
  await transaction.send(await setupTransaction.prepare({
      gasPrice
  }));
}
```

At this point, you have a fully capable Melon Fund. 

