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

let priceToleranceAddress = undefined; // this will be the address of your newly-deployed max positions contract
let priceToleranceSignature = undefined; // this'll be the signature

{
    // execute the deployment transaction
    const transaction = PriceTolerance.deploy(environment, PriceToleranceByteCode, fundManager, tolerance);
    const receipt = await transaction.send(await transaction.prepare({
        gasPrice,
    });
    priceToleranceAddress = receipt.address;
    priceToleranceSignature = receipt.signature;    
}

{
    // execute the registration transaction
    const transaction = manager.registerPolicy(fundManager, priceToleranceSignature, priceToleranceAddress)
    const receipt = transaction.send(await transaction.prepare({
        gasPrice
    });
}
```



