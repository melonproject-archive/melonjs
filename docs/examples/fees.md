# Managing Fees

A fund's `FeeManager` and `Accounting` contract work in tandem to manage and distribute management and performance fees. 

In general, management fees are continuously available for distribution. In other words, as soon as fees accrue, the can be claimed by the manager. However, performance fees are only available at intervals which are set at the fund's creation. Below, we'll walk through examples of both transactions.

{% hint style="info" %}
This example requires an [environment](../building-blocks/environment/) instance as described [here](../building-blocks/environment/).
{% endhint %}

```javascript
import { Accounting, FeeManager, Hub } from '@melonproject/melonjs';

// your hub address
const hubAddress = '0x05263237f43190ce0e93b48afb25dd60a03ad3c5';

// declare an instance of the fund's hub to access the spoke contract addresses
const hub = new Hub(environment, hubAddress);

// the address of the fund's FeeManager contract
const feeManagerAddress = hub.getRoutes().feeManager; 

// the address of the fund's Accounting contract
const accountingAddress = hub.getRoutes().accounting; 

// the address of the fund manager
const fundManagerAddress = '0x33b2f147a2526ac8abccccf38b71c0467673bffd';

// specify the gas price (refer to http://ethgasstation.info/)
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

