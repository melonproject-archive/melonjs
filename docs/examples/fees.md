# Managing Fees

A fund's `FeeManager` and `Accounting` contract work in tandem to manage and distribute management and performance fees. 

In general, management fees are continuously available for distribution. In other words, as soon as fees accrue, the can be claimed by the manager. However, performance fees are only available at intervals which are set at the fund's creation. Below, we'll walk through examples of both transactions.

{% hint style="info" %}
This example requires an [environment](../building-blocks/environment/) instance as described [here](../building-blocks/environment/).
{% endhint %}

```javascript
import { FeeManager, Accounting } from '@melonproject/melonjs';

const feeManagerAddress = '0xfidsoewf...'; // address of the fund's FeeManager contract
const accountingAddress = '0xwerj923fs...'; //address of the fund's Accounting contract
const fundAddress = '0xfjewf2023ds...'; // address of the fund manager
const gasPrice = 2000000000000; // specify the gas price (refer to http://ethgasstation.info/).

const feeManager = new FeeManager(environment, feeManagerAddress);
const accounting = new Accounting(environmnet, accountingAddress);

{
    // execute the management fee reward
    const transaction = feeManager.rewardManagementFees(fundAddress);
    await transaction.send(await transaction.prepare({
        gasPrice
    }));
}

{
    // execute the management and performance fee awards
    const transaction = accounting.triggerRewardAllFees(fundAddress);
    await transaction.send(await transaction.prepare({
        gasPrice
    }));
}

```

