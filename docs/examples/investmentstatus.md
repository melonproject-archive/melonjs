# Querying Investment Status

Various query methods are exposed on the `Participation` contract that allow one to investigate the fund's current and historical investors.

{% hint style="info" %}
This example requires an [environment](../building-blocks/environment/) instance as described [here](../building-blocks/environment/).
{% endhint %}

```javascript
import { Hub, Participation } from '@melonproject/melonjs'):

// your hub address
const hubAddress = '0x05263237f43190ce0e93b48afb25dd60a03ad3c5';

// declare an instance of the fund's hub to access the spoke contract addresses
const hub = new Hub(environment, hubAddress);

// the address of the fund's participation contract
const participationAddress = hub.getRoutes().participation; 

// the Melon token's address
const melon = enviroment.getToken('MLN');

// not actually my ETH address
const myETHAddress = '0xfbf4e3511bbb80f335988e7482efe2f6e1ef387e';

// declare an instance of the fund's Participation contract
const participation = new Participation(environment, participationAddress);

// returns an array of addresses of investors in the fund
const investors = await participation.getHistoricalInvestors();

// returns a boolean that describes whether the fund allows investment with a given token
const melonAllowed = await participation.canInvestWithAsset(melon.address); 

// returns a boolean describing whether a given address has already invested in the fund
const alreadyLong = await participation.hasInvested(myETHAddress); 

// returns a boolean describing whether a given address has requested an investment in the fund
const hasRequested = await participation.hasRequest(myETHAddress); 

// returns a boolean describing whether a given address has executed an investment request that expired
const didNotApprove = await participation.hasExpiredRequest(myETHAddress); 

// returns a boolean describing whether a given address has an outstanding investment request that has not expired
const isWaitingForApproval = await participation.hasValidRequest(myETHAddress); 
```

