# Asset Blacklist

An `AssetBlacklist` policy allows a fund manager to prevent their fund from purchasing a given list of assets. Once deployed, a manager can only add assets to `AssetBlackList`, not remove them. 

{% hint style="info" %}
This example requires an [environment](../../building-blocks/environment/) instance as described [here](../../building-blocks/environment/).
{% endhint %}

{% hint style="info" %}
One thing to note: to deploy specific policy contracts, you must pass the corresponding byte code to the that contract's deployment method.
{% endhint %}

```javascript
import { AssetBlacklist, PolicyManager } from '@melonproject/melonjs';
import { AssetBlacklistBytecode } from '@melonproject/melonjs/abis/AssetBlacklist.bin';

// the address of the fund's manager 
const fundManager = '0x697d686207b035afef108f39d6ab2fe0a5528c81'; 

// the address of the fund's PolicyManger contract
const policyManagerAddress = '0x957e5117873b7e64ae9bb3d7f7e907f46de480f6';

// an array of token addresses to add to your blacklist
const bannedTokens = ['0x603b6ff5667ea0610122ff483a540aa60f18d545', '0x83a422230f49ce9ab2d8e75c3d493a6ccf91e36a']; 

// specify the gas price (refer to http://ethgasstation.info/).
const gasPrice = 2000000000000; 

// declare the instance of the fund's PolicyManager contract
const manager = new PolicyManager(environment, policyManagerAddress);

// execute the deployment transaction
const deploymentTx = AssetBlacklist.deploy(environment, AssetBlacklistByteCode, fundManager, bannedTokens);
const deploymentOpts = await transaction.prepare({gasPrice});
const deploymentReceipt = await transaction.send(deploymentOpts);

// assign the proper address and signature to pass to the registration transaction
const AssetBlacklistAddress = receipt.address;
const AssetBlacklistSignature = receipt.signature;    

// execute the registration transaction
const registerTx = manager.registerPolicy(fundManager, AssetBlacklistSignature, AssetBlacklistAddress)
const registerOpts = await registerTx.prepare({gasPrice});
const registerReceipt = await transaction.send(registerOpts);
```

After a `AssetBlackList` policy is deployed, you can edit it by adding token addresses.

```javascript
import {AssetBlacklist} from '@melonproject/melonjs';

const AssetBlacklistAddress = '0xb672b818f8c785627772b1a69f1f3f3627eaa25c'; // the address of the fund's AssetBlackList
const managerAddress = '0xe9d2397337bc15786dbb6a90757320aa38c766ed'; // the address of the fund's manager
const blackList =  new AssetBlacklist(environment, AssetBlackListAddress)
const gasPrice = 2000000000000; // specify the gas price (refer to http://ethgasstation.info/).
const newBannedToken = '0xc8c617ef185830b51a3ad97b53916c18f99ed559'; // a token address you'll add to the blacklistlist

// execute the transaction to add a token to the blacklist
const transaction = blackList.addToBlackList(managerAddress, newBannedToken);
const opts = await transaction.prepare({gasPrice});
const receipt = await transaction.send(opts);
```

