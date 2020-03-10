# Max Concentration

A `MaxConcentration` policy restricts a fund from trading if the trade would increase the size of a fund's position in one asset over a given threshold as a percentage of the fund's portfolio.  

{% hint style="info" %}
This example requires an [environment](../../building-blocks/environment/) instance as described [here](../../building-blocks/environment/).
{% endhint %}

{% hint style="info" %}
**One thing to note: to deploy specific policy contracts, you must pass the corresponding byte code to the that contract's deployment method.** Luckily, MelonJS provides that for you as well.
{% endhint %}

```javascript
import { MaxConcentration, PolicyManager } from '@melonproject/melonjs';
import { MaxConcentrationBytecode } from '@melonproject/melonjs/abis/MaxConcentration.bin';

const fundManager = '0x234fse8...'; // the address of the fund's manager 
const policyManagerAddress = '0x23890f...'; // the address of the fund's PolicyManger contract
const concentration = 10; // the number, in percent, you'd like to set for MaxConcentration

const manager = new PolicyManager(environment, policyManagerAddress);
const gasPrice = 2000000000000; // specify the gas price (refer to http://ethgasstation.info/).


// execute the deployment transaction
const deploymentTx = MaxConcentration.deploy(environment, MaxConcentrationByteCode, fundManager, tolerance);
const deploymentOpts = await deploymentTx.prepare({gasPrice});
const deploymentReceipt = await deploymentTx.send(deploymentOpts)

const MaxConcAddr = receipt.address;
const MaxConcSig = receipt.signature;    

// execute the registration transaction
const registerTx = manager.registerPolicy(fundManager, MaxConcSig, MaxConcAddr)
const registerOpts = await registerTx.prepare({gasPrice});
const registerReceipt = await registerTx.send(registerOpts);

```

