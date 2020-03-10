# Max Positions

The `MaxPositions` policy's purpose is fairly self-explanatory: to limit the number of token positions that a fund can hold at any given time. 

{% hint style="info" %}
This example requires an [environment](../../building-blocks/environment/) instance as described [here](../../building-blocks/environment/).
{% endhint %}

{% hint style="info" %}
One thing to note: to deploy specific policy contracts, you must pass the corresponding byte code to the that contract's deployment method. 
{% endhint %}

```javascript
import { MaxPositions, PolicyManager } from '@melonproject/melonjs';
import { MaxPositionsBytecode } from '@melonproject/melonjs/abis/MaxPositions.bin';

// the address of the fund's manager 
const managerAddress = '0xce323bcc37b2e6075e22658d135c7bda0623e523'; 

// specify the max number of positions as a Big Number
const numberOfPositions = new BigNumber(5);

// specify the gas price (refer to http://ethgasstation.info/)
const gasPrice = 2000000000000; 

// declare the instance of the fund's PolicyManager contract
const manager = new PolicyManager(environment, policyManagerAddress);

// execute the deployment transaction
const deploymentTx = MaxPositions.deploy(
  environment, 
  MaxPositionsByteCode, 
  managerAddress, 
  numberOfPositions
);
const deploymentOpts = await deplomentTx.prepare({gasPrice});
const deploymentReceipt = await deploymentTx.send(deploymentOpts);

// assign the proper address and signature to pass to the registration transaction
const maxPosSig = deploymentReceipt.signature;    
const maxPosAddr = deploymentReceipt.address;

// execute the registration transaction
const registerTx = manager.registerPolicy(fundAddress, maxPosSig, maxPosAddr);
const registerOpts = await registerTx.prepare({ gasPrice });
const registerReceipt = await transaction.send(registerOpts);
```

