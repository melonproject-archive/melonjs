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
const fundManager = '0x0b64bf0fae1b9ffa80cd880f5b82d467ee34c28e'; 

// the address of the fund's PolicyManger contract
const policyManagerAddress = '0x510451e164b3c29034c9f2983ae8654ec5e1738f'; 

// the addresss of a user you want on the whiteLis
const approvedUser = '0x44de0560774bb11b67a08716de486f7a8803f850'; 

// specify the gas price (refer to http://ethgasstation.info/)
const gasPrice = 2000000000000; 

// declare the instance of the PolicyManager contract
const manager = new PolicyManager(environment, policyManagerAddress);

// execute the deployment transaction
const deploymentTx = UserWhiteList.deploy(
  environment, 
  UserWhiteListBytecode, 
  fundManager, 
  tolerance
);
const deploymentOpts = await deploymentTx.prepare({gasPrice});
const deploymentReceipt = await deploymentTx.send(deploymentOpts);

// assign the proper address and signature
const userWhitelistSig = receipt.signature;    
const userWhitelistAddr = receipt.address;

// execute the registration transaction
const registerTx = manager.registerPolicy(
  fundManager, 
  userWhitelistSig, 
  userWhitelistAddr
);
const registerOpts = await registerTx.prepare({ gasPrice });
const registerReceipt = await registerTx.send(registerOpts);
```

After a `UserWhiteList` policy is deployed, you can edit it by adding and removing addresses.

```javascript
import {UserWhiteList} from '@melonproject/melonjs';

// the address of the fund's UserWhiteList
const userWhiteListAddress = '0x510451e164b3c29034c9f2983ae8654ec5e1738f'; 

// the address of the fund's manager
const managerAddress = '0xb5f2c3ab65cdd7e81ec1f48da8be2c0006eba69b';  

// an account address you'll add to the list
const KYCdAddress = '0xfbf4e3511bbb80f335988e7482efe2f6e1ef387e';

// an account address you'll remove from the list
const DPRKPropDesk = '0x6cd90a734f84feb8ca99ab479ecc753eec8f1030'; 

// specify the gas price (refer to http://ethgasstation.info/).
const gasPrice = 2000000000000;

// declare the instance of the fund's WhiteList contract
const whiteList = new UserWhiteList(environment, userWhiteListAddress);

// execute the transaction to add a user to the whitelist
const addUserTransaction = whitelist.addToWhiteList(managerAddress, KYCdAddress);
const addUserOpts = await addUserTransaction({gasPrice});
const addUserReceipt = await addUserTransaction.send(addUserOpts);

// execute the transaction to remove a user to the whitelist
const removeUserTx = whitelist.removeFromWhiteList(managerAddress, DPRKPropDesk);
const removeUserOpts = await removeUserTx.prepare({ gasPrice });
const removeUserReceipt = await removeUserTransaction.send(removeUserOpts);

// You can also use batch methods to send arrays of users to be added or removed
 
// execute the transaction to add a batch of users to the whitelist
const batchAddTx = whitelist.batchAddToWhiteList(managerAddress, [KYCdAddress, another address, another address, another address]);
const batchAddOpts = await batchAddTx.prepare({ gasPrice });
const batchAddReceipt = await batchAddTx.send(batchAddOpts);

// execute the transaction to remove a batch of users from the whitelist
const batchRemoveTx = whitelist.batchRemoveFromWhiteList(managerAddress, [DPRKPropDesk, moreAddresses, OFAC, etc]);
const batchRemoveOpts = await batchRemoveTx.prepare({ gasPrice });
const batchRemoveReceipt = await batchRemoveTx.send(batchRemoveOpts);
```

