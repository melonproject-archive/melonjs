# Asset Whitelist

An `AssetWhitelist` policy allows a fund manager to explicitly allow their fund to purchase and hold a given list of assets. Once deployed, a manager can only remove assets from their `AssetWhitelist`, not remove them. 

{% hint style="info" %}
This example requires an [environment](../../building-blocks/environment/) instance as described [here](../../building-blocks/environment/).
{% endhint %}

{% hint style="info" %}
One thing to note: to deploy specific policy contracts, you must pass the corresponding byte code to the that contract's deployment method.
{% endhint %}

```javascript
import { AssetWhitelist, PolicyManager } from '@melonproject/melonjs';
import { AssetWhitelistBytecode } from '@melonproject/melonjs/abis/AssetWhitelist.bin';

// the address of the fund's manager 
const fundManager = '0xdea8136d4a64e9dbdc0191ed51a321973850d074'; 

// the address of the fund's PolicyManger contract
const policyManagerAddress = '0x7dfa4998060bfe7a3c0d971aa5dc3868d5dd64b3'; 

// an array of tokens to add to your qhitelistlist
const allowedTokens = ['0xd8db29f05b7d85bdaba1ed86dde8308f2338a485', '0x813879c9ba21271431dab30069863f604837b031']; 

// specify the gas price (refer to http://ethgasstation.info/)
const gasPrice = 2000000000000; 

// declare the instance of the fund's PolicyManager contract
const manager = new PolicyManager(environment, policyManagerAddress);

// execute the deployment transaction
const deploymentTx = AssetWhitelist.deploy(
  environment, 
  AssetWhitelistByteCode, 
  fundManager, 
  allowedTokens
);
const deploymentOpts = await deploymentTx.prepare({gasPrice});
const deploymentReceipt = await transaction.send(deploymentOpts);

// assign the proper address and signature to pass to the registration transaction
const assetWhitelistSig = receipt.signature; 
const assetWhitelistAddr = receipt.address;   

// execute the registration transaction
const registerTx = manager.registerPolicy(
  fundManager, 
  AssetWhitelistSig, 
  AssetWhitelistAddr
);
const registerOpts = await registerTx.prepare({gasPrice});
const receipt = await registerTx.send(registerOpts);
```

After a `AssetWhitelist` policy is deployed, you can only edit it by remove token addresses.

```javascript
import {AssetWhitelist} from '@melonproject/melonjs';

// the address of the fund's AssetWhitelist
const AssetWhitelistAddress = '0xffe8bc42946d87e5d791dfa931deabe144ac23a8'; 

// the address of the fund's manager
const managerAddress = '0xdea8136d4a64e9dbdc0191ed51a321973850d074'; 

// a token address you'll remove from the blacklistlist
const tokenToRemove = '0x6cd90a734f84feb8ca99ab479ecc753eec8f1030'; 

// specify the gas price (refer to http://ethgasstation.info/)
const gasPrice = 2000000000000; 

// declare the instance of the fund's AssetWhiteList contract
const whitelist = new AssetWhitelist(environment, AssetWhitelistAddress);

// execute the transaction to remove a token from the whitelist
const transaction = whitelist.removeFromWhitelist(managerAddress, tokenToRemove);
const opts = await transaction.prepare({ gasPrice });
const receipt = await transaction.send(opts);
```

