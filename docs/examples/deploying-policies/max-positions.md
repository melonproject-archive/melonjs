# MaxPositions

The `MaxPositions` policy's purpose is fairly self-explanatory: to limit the number of token positions that a fund can hold at any given time. 

{% hint style="info" %}
**One thing to note: to deploy specific policy contracts, you must pass the corresponding byte code to the that contract's deployment method.** Luckily, MelonJS provides that for you as well.
{% endhint %}

{% hint style="info" %}
This example requires an [environment](../../building-blocks/environment/) instance as described [here](../../building-blocks/environment/).
{% endhint %}

```javascript
import { MaxPositions, PolicyManager } from '@melonproject/melonjs';
import { MaxPositionsBytecode } from '@melonproject/melonjs/abis/MaxPositions.bin';

const managerAddress = '0x234fse8...' // the address of the fund's manager 
const numberOfPositions = new BigNumber(5);

const manager = new PolicyManager(environment, policyManagerAddress);
const gasPrice = 2000000000000; // specify the gas price (refer to http://ethgasstation.info/).

let maxPositionsAddress = undefined; // this will be the address of your newly-deployed max positions contract
let maxPositionsSignature = undefined; // this'll be the signature

{
    // execute the deployment transaction
    const transaction = MaxPositions.deploy(environment, MaxPositionsByteCode, managerAddress, numberOfPositions);
    const receipt = await transaction.send(await transaction.prepare({
        gasPrice,
    });
    maxPositionsAddress = receipt.address;
    maxPositionsSignature = receipt.signature;    

}

{
    // execute the registration transaction
    const transaction = manager.registerPolicy(fundAddress, maxPositionsSignature, maxPositionsAddress)
    const receipt = transaction.send(await transaction.prepare({
        gasPrice
    });
}
```

