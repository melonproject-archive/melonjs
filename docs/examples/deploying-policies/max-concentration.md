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

 // the address of the fund's manager 
const fundManager = '0xbb471b17e7be75334cb5134e57f2cc7b99754e09';

// the address of the fund's PolicyManger contract
const policyManagerAddress = '0x83a422230f49ce9ab2d8e75c3d493a6ccf91e36a'; 

// the number, in percent, you'd like to set for MaxConcentration
const concentration = 10; 

// specify the gas price (refer to http://ethgasstation.info/).
const gasPrice = 2000000000000; 

// declare the instance of the fund's PolicyManager contract
const manager = new PolicyManager(environment, policyManagerAddress);

// execute the deployment transaction
const deploymentTx = MaxConcentration.deploy(environment, MaxConcentrationByteCode, fundManager, tolerance);
const deploymentOpts = await deploymentTx.prepare({gasPrice});
const deploymentReceipt = await deploymentTx.send(deploymentOpts)

// assign the proper address and signature to pass to the registration transaction
const maxConcAddr = deploymentReceipt.address;
const maxConcSig = deploymentReceipt.signature;    

// execute the registration transaction
const registerTx = manager.registerPolicy(fundManager, maxConcSig, maxConcAddr)
const registerOpts = await registerTx.prepare({gasPrice});
const registerReceipt = await registerTx.send(registerOpts);

```

