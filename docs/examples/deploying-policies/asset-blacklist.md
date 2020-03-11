# Asset Blacklist

An `AssetBlacklist` policy allows a fund manager to prevent their fund from purchasing a given list of assets. Once deployed, a manager can only add assets to `AssetBlackList`, not remove them. 

{% hint style="info" %}
This example requires an [environment](../../building-blocks/environment/) instance as described [here](../../building-blocks/environment/).
{% endhint %}

{% hint style="info" %}
One thing to note: to deploy specific policy contracts, you must pass the corresponding byte code to the that contract's deployment method.
{% endhint %}

```javascript
import { AssetBlacklist, Hub, PolicyManager } from '@melonproject/melonjs';
import { AssetBlacklistBytecode } from '@melonproject/melonjs/abis/AssetBlacklist.bin';

// your hub address
const hubAddress = '0x05263237f43190ce0e93b48afb25dd60a03ad3c5';

// the address of the fund's manager 
const fundManager = '0x0b64bf0fae1b9ffa80cd880f5b82d467ee34c28e'; 

// declare an instance of the fund's hub to access the spoke contract addresses
const hub = new Hub(environment, hubAddress);

// the address of the fund's PolicyManger contract
const policyManagerAddress = hub.getRoutes().policyManager; 

// an array of token addresses to add to your blacklist
const bannedTokens = ['0x603b6ff5667ea0610122ff483a540aa60f18d545', '0x83a422230f49ce9ab2d8e75c3d493a6ccf91e36a']; 

// specify the gas price (refer to http://ethgasstation.info/)
const gasPrice = 2000000000000; 

// declare the instance of the fund's PolicyManager contract
const manager = new PolicyManager(environment, policyManagerAddress);

// execute the deployment transaction
const deploymentTx = AssetBlacklist.deploy(
  environment, 
  AssetBlacklistByteCode, 
  fundManager, 
  bannedTokens
);
const deploymentOpts = await transaction.prepare({gasPrice});
const deploymentReceipt = await transaction.send(deploymentOpts);

// assign the proper address and signature to pass to the registration transaction
const AssetBlacklistSignature = receipt.signature; 
const AssetBlacklistAddress = receipt.address;

// execute the registration transaction
const registerTx = manager.registerPolicy(
  fundManager, 
  AssetBlacklistSignature, 
  AssetBlacklistAddress
);
const registerOpts = await registerTx.prepare({ gasPrice });
const registerReceipt = await transaction.send(registerOpts);
```

After a `AssetBlackList` policy is deployed, you can edit it by adding token addresses.

```javascript
import {AssetBlacklist} from '@melonproject/melonjs';

// the address of the fund's AssetBlackList
const AssetBlacklistAddress = '0xb672b818f8c785627772b1a69f1f3f3627eaa25c'; 

// the address of the fund's manager
const managerAddress = '0xe9d2397337bc15786dbb6a90757320aa38c766ed'; 

// create a new instance of the Fund's AssetBlackList contract
const blackList = new AssetBlacklist(environment, AssetBlackListAddress);

// a token address you'll add to the blacklistlist  
const newBannedToken = '0xc8c617ef185830b51a3ad97b53916c18f99ed559'; 

// execute the transaction to add a token to the blacklist
const transaction = blackList.addToBlackList(managerAddress, newBannedToken);
const opts = await transaction.prepare({ gasPrice });
const receipt = await transaction.send(opts);
```

