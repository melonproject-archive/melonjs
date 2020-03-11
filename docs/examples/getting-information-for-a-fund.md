# Getting Fund Information

Once a fund has been set up, its `Hub` contract exposes various methods to query fund-specific data. `Version` exposes methods to query aggregate fund data.

If you don't know the address of your fund's `Hub` contract, you can access it using version and your fund manager's address. I'll use a fake one here to demonstrate.

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

// a boolean representing whether or not the fund is shut down
const shutDOwn = await hub.isShutDown();

// a boolean representing whether the fund has been initialized
const initialized = await hub.isInitialized();

// the version on which the fund is running
const version = await hub.getVersion();

// the Registry contract
const registry = await hub.getRegistry();

// the PriceSource countract
const priceSource = await hub.getPriceSource();

// and finally an object with the addresses of the fund's spoke contracts
const spokes = await hub.getRoutes();

// from which you can access the addresses of the in individual contracts:
const accounting = spokes.accounting;

const participation = spokes.participation;

const shares = spokes.shares;

const trading = spokes.trading;

const vault = spokes.vault;

const feeManager = spokes.feeManager;

const policyManager = spokes.policyManager;


```

{% hint style="warning" %}
These methods will be helpful through the code examples when creating contract instances. Each instance will require specific contract address to which it is referring. 
{% endhint %}

