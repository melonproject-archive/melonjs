# Investing in a Fund

Investing in a Melon is a three step process. The first two steps are handled by the party requesting the investment. The third step is handled by either that party, the fund manager, or an interested third party. More discussion of the game theory dynamics and potential attack vectors of the investment process can be found [here](https://medium.com/melonprotocol/protecting-participants-ee55a752287).

| Step | Contract | User |
| :--- | :--- | :--- |
| `approveInvestment` | `ERC20` | investor |
| `requestInvestment` | `Participation` | investor |
| `executeInvestment` | `Participation` | anyone |

The first step is to approve the fund's participation contract to transfer of a specific amount tokens from the investor's address.

{% hint style="info" %}
This example requires an [environment](../building-blocks/environment/) instance as described [here](../building-blocks/environment/).
{% endhint %}

```javascript
import BigNumber from 'bignumber.js';
import { ERC20WithFields, Hub, Participation } from '@melonproject/melonjs';

// your hub address
const hubAddress = '0x05263237f43190ce0e93b48afb25dd60a03ad3c5';

// declare an instance of the fund's hub to access the spoke contract addresses
const hub = new Hub(environment, hubAddress);

// the address of the user trying to make the investment
const investorAddress = '0x4aaf7d8a61b5d4531961a3d40b677735e45ab774'; 

// the address of the fund's participation contract
const participationAddress = hub.getRoutes().participation;

// fetch the token information for the WETH token.
const tokenInfo = environment.getToken('WETH');

// create the token contract instance for WETH.
const token = new ERC20WithFields(environment, tokenInfo.address);

// the amount of ERC20 token the user is offering to invest in WEI
const investmentAmount = new BigNumber(1).multipliedBy('1e18');

// the computed number of shares the user wishes to purchase in WEI
const sharesAmount = new BigNumber(1).multipliedBy('1e18');

// specify the gas price (refer to http://ethgasstation.info/).
const gasPrice = 2000000000000; 

// declare an instance of the fund's participation contract
const participation = new Participation(environment, participationAddress);

{
  // execute the approveInvestment step
  const transaction = token.approve(
    investorAddress,
    participationAddress, 
    investmentAmount
  );
  const opts = await transaction.prepare({gasPrice});
  const receipt = await transaction.send(opts);
}

{
  // execute the requestInvestment step
  const transaction = participation.requestInvestment(
    investorAddress,
    sharesAmount, 
    investmentAmount, 
    tokenAddress
  );
  const opts = await transaction.prepare({gasPrice});
  const receipt = await transaction.send(opts);
}

{  
  // execute the executeInvestment step
  const transaction = participation.executeRequestFor(investorAddress,investorAddress);
  const opts = await transaction.prepare({gasPrice});
  const receipt = await transaction.send(opts);
}
```

