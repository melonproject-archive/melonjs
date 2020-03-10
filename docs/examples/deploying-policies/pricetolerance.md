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

const fundManager = '0x234fse8...'; // the address of the fund's manager 
const policyManagerAddress = '0x23890f...'; // the address of the fund's PolicyManger contract
const tolerance = 10; // the number, in percent, you'd like to set for priceTolerance

const manager = new PolicyManager(environment, policyManagerAddress);
const gasPrice = 2000000000000; // specify the gas price (refer to http://ethgasstation.info/).

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



