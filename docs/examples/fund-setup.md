# Setting Up a Melon Fund

Starting a Melon Fund requires 9 Ethereum transactions. Together, these transactions instantiate the [hub and spoke](https://docs.melonport.com/chapters/fund.html#hub--spoke) contracts that will serve as the foundation for your fund. In order to begin this sequence of transactions, you must first decide on the parameters that will govern your fund. The first transaction must be initiated by the fund's manager. All subsequent steps can be called by anyone. 

| Step | Contract | User |
| :--- | :--- | :--- |
| `beginSetup` | `Version` | fund manager |
| `createAccounting` | `Version` | anyone |
| `createFeeManager` | `Version` | anyone |
| `createParticipation` | `Version` | anyone |
| `createPolicyManager` | `Version` | anyone |
| `createShares` | `Version` | anyone |
| `createTrading` | `Version` | anyone |
| `createVault` | `Version` | anyone |
| `completeSetup` | `Version` | anyone |

{% hint style="info" %}
This example requires an [environment](../building-blocks/environment/) instance as described [here](../building-blocks/environment/).
{% endhint %}

```javascript
import { DeployedEnvironment, Version } from '@melonproject/melonjs';

// instantiate the current version of the Melon Fund Factory
const factory = new Version(environment, environment.deployment.melon.addr.Version);

// declare the necessary variables:

// the fund manager's address
const managerAddress = '0x5b8677fb951517d55b224fbc07cd7e3ffb075203';

// specify the gas price (refer to http://ethgasstation.info/)
const gasPrice = 30000000000; 

// currently all funds are denominated in WETH
const denominationAddress = environment.getToken('WETH'); 

// use the environment to generate an array of token addresses
const defaultAssets = environment.tokens.map(token => token.address);  

// declare the management fee
const managementFeeRate = new BigNumber(2).multipliedBy('1e18'); 

// declare the performance fee
const performanceFeeRate = new BigNumber(20).multipliedBy('1e18'); 

// declare the management fee period. In this case, the management fee is always redeemable
const managementFeePeriod = new BigNumber(0);

// declare the performance fee period. In this case the performance fee is redeemable every 90 days
const performanceFeePeriod = new BigNumber(90 * 24 * 60 * 60);

// an array of decentralized exchange addresses 
const exchanges = environment.exchanges.map(exchange => exchange.exchange); 

// an array of those exchanges' corresponding adapter contract addresses 
const adapters = environment.exchanges.map(exchange => exchange.adapter); 

// pass your newly-defined variables to the `beginSetup` function to create the transaction and you're on your way.
{
  const transaction = factory.beginSetup(managerAddress, {
    name: 'TestFund',
    fees: [environment.deployment.melon.addr.ManagementFee, environment.deployment.melon.addr.PerformanceFee],
    feeRates: [managementFeeRate, performanceFeeRate],
    feePeriods: [managementFeePeriod, performanceFeePeriod],
    exchanges: exchanges,
    adapters: adapters,
    denominationAsset: denominationAssetAddress,
    defaultAssets: defaultAssets,
  });
  
  const opts = await transaction.prepare({gasPrice});
  const receipt = await transaction.send(opts);
}

// Now, you'll create the spoke contracts individually:

{
  const transaction = factory.createAccounting(managerAddress);
  const opts = await transaction.prepare({gasPrice});
  const receipt = await transaction.send(opts);
}

{
  const transaction = factory.createFeeManager(managerAddress);
  const opts = await transaction.prepare({gasPrice});
  const receipt = await transaction.send(opts);
}

{
  const transaction = factory.createParticipation(managerAddress);
  const opts = await transaction.prepare({gasPrice});
  const receipt = await transaction.send(opts);
}

{
  const transaction = factory.createPolicyManager(managerAddress);
  const opts = await transaction.prepare({gasPrice});
  const receipt = await transaction.send(opts);

{
  const transaction = factory.createShares(managerAddress);
  const opts = await transaction.prepare({gasPrice});
  const receipt = await transaction.send(opts);
}
  
{
  const transaction = factory.createTrading(managerAddress);
  const opts = await transaction.prepare({gasPrice});
  const receipt = await transaction.send(opts);
}

{
  const transaction = factory.createVault(managerAddress);
  const opts = await transaction.prepare({gasPrice});
  const receipt = await transaction.send(opts);
}

// Finally, call completeSetup to finish up.
{
  const transaction = factory.completeSetup(managerAddress);
  const opts = await transaction.prepare({gasPrice});
  const receipt = await transaction.send(opts);
}
```

At this point, you have a fully capable Melon Fund. 

