# User Whitelist

Let's create a `UserWhiteList` policy, which allows a fund manager to control which addresses are allowed to request and hold shares of the fund.

{% hint style="info" %}
This example requires an [environment](../../building-blocks/environment/) instance as described [here](../../building-blocks/environment/).
{% endhint %}

{% hint style="info" %}
**One thing to note: to deploy specific policy contracts, you must pass the corresponding byte code to the that contract's deployment method.** Luckily, MelonJS provides that for you as well.
{% endhint %}

```javascript
import { UserWhiteList, PolicyManager } from '@melonproject/melonjs';
import { UserWhiteListBytecode } from '@melonproject/melonjs/abis/UserWhitelist.bin';

const fundManager = '0x234fse8...'; // the address of the fund's manager 
const policyManagerAddress = '0x23890f...'; // the address of the fund's PolicyManger contract
const approvedUser = '0x23nfes98...'; // the addresss of a user you want on the whiteLis

const manager = new PolicyManager(environment, policyManagerAddress);
const gasPrice = 2000000000000; // specify the gas price (refer to http://ethgasstation.info/).

let userWhitelistAddress = undefined; // this will be the address of your newly-deployed max positions contract
let userWhitelistSignature = undefined; // this'll be the signature

{
    // execute the deployment transaction
    const transaction = UserWhiteList.deploy(environment, UserWhiteListByteCode, fundManager, [approvedUser]);
    const receipt = await transaction.send(await transaction.prepare({
        gasPrice,
    });
    userWhiteListAddress = receipt.address;
    userWhiteListSignature = receipt.signature;    

}

{
    // execute the registration transaction
    const transaction = manager.registerPolicy(fundManager, userWhitelistSignature, userWhitelistAddress)
    const receipt = await transaction.send(await transaction.prepare({
        gasPrice
    });
}
```

After a `UserWhiteList` policy is deployed, you can edit it by adding and removing addresses.

```javascript
import {UserWhiteList} from '@melonproject/melonjs';

const userWhiteListAddress = '0x2309fd...'; // the address of the fund's UserWhiteList
const managerAddress = '0xermifoe...'; // the address of the fund's manager
const whiteList =  new UserWhiteList(environment, userWhiteListAddress)
const gasPrice = 2000000000000; // specify the gas price (refer to http://ethgasstation.info/).
const KYCdAddress = '0xens32s...'; // an account address you'll add to the list
const DPRKPropDesk = '0x23enso...'; // an account address you'll remove from the list

{
    // execute the transaction to add a user to the whitelist
    const transaction = whitelist.addToWhiteList(managerAddress, KYCdAddress);
    const receipt = await transaction.send(await transaction.prepare({
        gasPrice
    });
}

{
    // execute the transaction to remove a user to the whitelist
    const transaction = whitelist.removeFromWhiteList(managerAddress, DPRKPropDesk);
    const receipt = await transaction.send(await transaction.prepare({
        gasPrice
    });
}

// You can also use batch methods to send arrays of users to be added or removed

{
    // execute the transaction to add a batch of users to the whitelist
    const transaction = whitelist.batchAddToWhiteList(managerAddress, [KYCdAddress, another address, another address, another address]);
    const receipt = await transaction.send(await transaction.prepare({
        gasPrice
    });
}

{
    // execute the transaction to remove a batch of users from the whitelist
    const transaction = whitelist.batchRemoveFromWhiteList(managerAddress, [DPRKPropDesk, moreAddresses, OFAC, etc]);
    const receipt = await transaction.send(await transaction.prepare({
        gasPrice
    });
}
```

