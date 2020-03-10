# PriceTolerance

A `PriceTolerance` policy restricts a fund from trading when the price of an asset has varied too much from the last protocol-wide price update. 

{% hint style="info" %}
This example requires an [environment](../../building-blocks/environment/) instance as described [here](../../building-blocks/environment/).
{% endhint %}

{% hint style="info" %}
One thing to note: to deploy specific policy contracts, you must pass the corresponding byte code to the that contract's deployment method. 
{% endhint %}

```javascript
import { PriceTolerance, PolicyManager } from '@melonproject/melonjs';
import { PriceToleranceBytecode } from '@melonproject/melonjs/abis/MaxPositions.bin';

// the address of the fund's manager 
const fundManager = '0x1141caf50b083e21bb48130460ce11eb47758545'; 

// the address of the fund's PolicyManger contract
const policyManagerAddress = '0x91986328a5fc560a0d725bbc2daf5df5dca7aa7e'; 

// the number, in percent, you'd like to set for priceTolerance
const tolerance = 10; 

// specify the gas price (refer to http://ethgasstation.info/).
const gasPrice = 2000000000000; 

// declare the instance of the fund's PolicyManager contract
const manager = new PolicyManager(environment, policyManagerAddress);

// execute the deployment transaction
const deploymentTx = PriceTolerance.deploy(environment, PriceToleranceByteCode, fundManager, tolerance);
const deploymentOpts = await deploymentTx.prepare({gasPrice});
const deploymentReceipt = await deploymentTransaction.send(deploymentOpts);

// assign the proper address and signature to pass to the registration transaction
const priceToleranceAddress = receipt.address;
const priceToleranceSignature = receipt.signature;    

// execute the registration transaction
const registerTx = manager.registerPolicy(fundManager, priceToleranceSignature, priceToleranceAddress)
const registerOpts = await registerTx.send({gasPrice});
const registerReceipt = await registerTx.send(registerOpts);
```



