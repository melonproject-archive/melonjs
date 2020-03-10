# Getting Information for a Fund

Once a fund has been set up, its `Hub` contract exposes various methods to query fund-specific data. 

The first step is to find the address of that contract. We'll do so using the fund manager's address, to which you should have access. I'll use a fake one here.

{% hint style="info" %}
This example requires an [environment](../building-blocks/environment/) instance as described [here](../building-blocks/environment/).
{% endhint %}

```javascript
import { Hub, Version } from '@melonproject/melonjs';

// the fund manager's address
const managerAddress = '0xf60c5493c28ed57014f99eb7573771a4f5396005';

// create an instance of the Version contract
const version = new Version(environment, environment.deployment.melon.addr.Version);

// query the version contract for hub address by manager
const hubAddress = version.getManagersToHubs(managerAddress);

// create the instance of the Fund's hub contract
const hub = new Hub(environment, hubAddress);

// various methods are exposed on the hub object:

// the fund's creation date
const date = await hub.getCreationTime();

// the fund creator's address
const creator = await hub.getCreator();

// the fund manager's address
const manager = await hub.getManager();

// the fund's name
const name = await hub.getName();

// an object with the addresses of the fund's spoke contracts
const spokes = await hub.getRoutes();

// a boolean representing whether or not the fund is shut down
const shutDOwn = await hub.isShutDown();

// a boolean representing whether the fund has been initialized
const initialized = await hub.isInitialized();

// the version on which the fund is running
const version = await hub.getVersion();

// and finally the various contracts with which the fund is associated

// the Registry contract
const registry = await hub.getRegistry();

// the Accounting contract
const accounting = await hub.getAccounting();

// the PriceSource countract
const priceSource = await hub.getPriceSource();

// the Participation contract
const participation = await hub.getParticipation();

// the Trading contract
const trading = await hub.getTrading();

// the Shares contract
const shares = await hub.getShares();

// the PolicyManager contract
const policyManager = await hub.getPolicyManager();

```

{% hint style="warning" %}
These methods will be helpful through the code examples when creating contract instances. Each instance will require specific contract address to which it is referring. 
{% endhint %}

