# User Whitelist

Let's create a `UserWhiteList` policy, which allows a fund manager to control which addresses are allowed to request and hold shares of the fund.

{% hint style="info" %}
This example requires an [environment](../../building-blocks/environment/) instance as described [here](../../building-blocks/environment/).
{% endhint %}

{% hint style="info" %}
One thing to note: to deploy specific policy contracts, you must pass the corresponding byte code to the that contract's deployment method.
{% endhint %}

```javascript
import { UserWhiteList, PolicyManager } from '@melonproject/melonjs';
import { UserWhiteListBytecode } from '@melonproject/melonjs/abis/UserWhitelist.bin';

// the address of the fund's manager 
const fundManager = '0x234fse8...'; 

// the address of the fund's PolicyManger contract
const policyManagerAddress = '0x23890f...'; 

// the addresss of a user you want on the whiteLis
const approvedUser = '0x23nfes98...'; 

const manager = new PolicyManager(environment, policyManagerAddress);

// specify the gas price (refer to http://ethgasstation.info/)
const gasPrice = 2000000000000; 

// execute the deployment transaction
const deploymentTransaction = UserWhiteList.deploy(environment, UserWhiteListBytecode, fundManager, tolerance);
const deploymentReceipt = await deploymentTransaction.send(await deploymentTransaction.prepare({
    gasPrice,
});

// assign the proper address and signature
const userWhitelistAddress = receipt.address;
const userWhitelistSignature = receipt.signature;    

// execute the registration transaction
const registerTransaction = manager.registerPolicy(fundManager, priceToleranceSignature, priceToleranceAddress)
const registerReceipt = await registerTransaction.send(await transaction.prepare({
    gasPrice
});
```

After a `UserWhiteList` policy is deployed, you can edit it by adding and removing addresses.

```javascript
import {UserWhiteList} from '@melonproject/melonjs';

// the address of the fund's UserWhiteList
const userWhiteListAddress = '0x510451e164b3c29034c9f2983ae8654ec5e1738f'; 

// the address of the fund's manager
const managerAddress = '0xb5f2c3ab65cdd7e81ec1f48da8be2c0006eba69b'; 

const whiteList =  new UserWhiteList(environment, userWhiteListAddress)

// specify the gas price (refer to http://ethgasstation.info/).
const gasPrice = 2000000000000; 

// an account address you'll add to the list
const KYCdAddress = '0xfbf4e3511bbb80f335988e7482efe2f6e1ef387e';

// an account address you'll remove from the list
const DPRKPropDesk = '0x6cd90a734f84feb8ca99ab479ecc753eec8f1030'; 

// execute the transaction to add a user to the whitelist
const addUserTransaction = whitelist.addToWhiteList(managerAddress, KYCdAddress);
const addUserReceipt = await addUserTransaction.send(await addUserTransaction.prepare({gasPrice}));

// execute the transaction to remove a user to the whitelist
const removeUserTransaction = whitelist.removeFromWhiteList(managerAddress, DPRKPropDesk);
const removeUserReceipt = await removeUserTransaction.send(await removeUserTransaction.prepare({
  gasPrice
  })
);

// You can also use batch methods to send arrays of users to be added or removed

// execute the transaction to add a batch of users to the whitelist
const batchAddTransaction = whitelist.batchAddToWhiteList(managerAddress, [KYCdAddress, another address, another address, another address]);
const batchAddReceipt = await batchAddTransaction.send(await batchAddTransaction.prepare({gasPrice}));

// execute the transaction to remove a batch of users from the whitelist
const transaction = whitelist.batchRemoveFromWhiteList(managerAddress, [DPRKPropDesk, moreAddresses, OFAC, etc]);
const receipt = await transaction.send(await transaction.prepare({gasPrice}));
```

