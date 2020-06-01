# PriceTolerance

A `PriceTolerance` policy restricts a fund from trading when the price of an asset has varied too much from the last protocol-wide price update. 

{% hint style="info" %}
This example requires an [environment](../../building-blocks/environment/) instance as described [here](../../building-blocks/environment/).
{% endhint %}

{% hint style="info" %}
One thing to note: to deploy specific policy contracts, you must pass the corresponding byte code to the that contract's deployment method. 
{% endhint %}

```javascript
import { Hub, PriceTolerance, PolicyManager } from '@melonproject/melonjs';
import { PriceToleranceBytecode } from '@melonproject/melonjs/abis/MaxPositions.bin';

// your hub address
const hubAddress = '0x05263237f43190ce0e93b48afb25dd60a03ad3c5';

// the address of the fund's manager 
const fundManager = '0x0b64bf0fae1b9ffa80cd880f5b82d467ee34c28e'; 

// declare an instance of the fund's hub to access the spoke contract addresses
const hub = new Hub(environment, hubAddress);

// the address of the fund's PolicyManger contract
const policyManagerAddress = hub.getRoutes().policyManager; 

// the number, in percent, you'd like to set for priceTolerance
const tolerance = 10; 

// specify the gas price (refer to http://ethgasstation.info/).
const gasPrice = 30000000000; 

// declare the instance of the fund's PolicyManager contract
const manager = new PolicyManager(environment, policyManagerAddress);

// execute the deployment transaction
const deploymentTx = PriceTolerance.deploy(
  environment, 
  PriceToleranceByteCode, 
  fundManager, 
  tolerance
);
const deploymentOpts = await deploymentTx.prepare({ gasPrice });
const deploymentReceipt = await deploymentTransaction.send(deploymentOpts);

// assign the proper address and signature to pass to the registration transaction
const priceToleranceSignature = receipt.signature;    
const priceToleranceAddress = receipt.address;

// execute the registration transaction
const registerTx = manager.registerPolicy(fundManager, priceToleranceSignature, priceToleranceAddress)
const registerOpts = await registerTx.send({ gasPrice });
const registerReceipt = await registerTx.send(registerOpts);
```



