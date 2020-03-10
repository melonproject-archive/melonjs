# Managing Fees

A fund's `FeeManager` and `Accounting` contract work in tandem to manage and distribute management and performance fees. 

In general, management fees are continuously available for distribution. In other words, as soon as fees accrue, the can be claimed by the manager. However, performance fees are only available at intervals which are set at the fund's creation. Below, we'll walk through examples of both transactions.

{% hint style="info" %}
This example requires an [environment](../building-blocks/environment/) instance as described [here](../building-blocks/environment/).
{% endhint %}

```javascript
import { FeeManager, Accounting } from '@melonproject/melonjs';

// address of the fund's FeeManager contract
const feeManagerAddress = '0x4ce072071c054cbfd99cc03f468db7dc921f2cbd'; 

//address of the fund's Accounting contract
const accountingAddress = '0x98ce238bf8956414347d08ff76065d0823f976d9'; 

// address of the fund manager
const fundManagerAddress = '0x33b2f147a2526ac8abccccf38b71c0467673bffd';

// specify the gas price (refer to http://ethgasstation.info/).
const gasPrice = 2000000000000; 

// declare instances of the fund's FeeManager and Accounting contracts
const feeManager = new FeeManager(environment, feeManagerAddress);
const accounting = new Accounting(environmnet, accountingAddress);
```

Once the contract instances are declared, you can go one of two ways - either reward **just** the management fees with the `FeeManager` contract instance:

```javascript
const transaction = feeManager.rewardManagementFees(fundManagerAddress);
const opts = transaction.prepare({ gasPrice });
const receipt = transaction.send(opts);
```

Or reward both the management and performance fees with the `Accounting` contract instance:

```javascript
const transaction = accounting.triggerRewardAllFees(fundManagerAddress);
const opts = await transaction.prepare({ gasPrice });
const receipt = await transaction.send(opts);
```

