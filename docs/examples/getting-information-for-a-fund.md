# Getting a Fund's Contract Addresses

Once a fund has been set up, its `Hub` contract exposes various methods to query fund-specific data as well as the addresses of all of its spoke contracts. These contract addresses will be necessary in all further examples.

{% hint style="info" %}
These examples require an [environment](../building-blocks/environment/) instance as described [here](../building-blocks/environment/).
{% endhint %}

{% hint style="info" %}
`Fund` and `Hub` addresses are currently referred to interchangeably. This will soon not be the case, and the docs will be edited to reflect the change. 
{% endhint %}

### Getting a Fund's \(or Funds'\) Address

In order to use the methods exposed on the `Hub` contract, we need its address. All Melon Funds are indexed on the blockchain. The `Version` contract exposes a method to get the index of the most recently-created fund. You can then pass that index to another `Version` method to get the fund's hub address. That would look something like this:

```javascript
import { Version } from '@melonproject/melonjs';

// create an instance of the version contract
const version = new Version(environment, environment.deployment.melon.addr.Version);

// declare a variable and set it equal to the value of the last fund's id
const lastFundId = await version.getLastFundId();

// declare a variable and set it equal to the address of that fund
const fundAddress = await version.getFundById(lastFundId);
```

Given these two functions, it's easy to envision a loop wherein you could retrieve all Melon Fund addresses. You could then use those addresses to build some interesting visualization tools around aggregate fund data, comparative performance and ranking tables, top holdings among funds, and that sort of thing.

```javascript
// build an array of promise objects
const promiseArray = Array(lastFundId+1).fill().map(
    (item, index) => version.getFundById(index));

// resolve them to an array of fund addresses
const fundAddresses = await Promise.all(promiseArray);
```

The above **will** work. However, we suggest querying the subgraph for this data to avoid having to make calls to the blockchain. You can see an example of how we'd build the same array of addresses, along with some additional helpful data \(manager address and fund name\) [here](https://thegraph.com/explorer/subgraph/melonproject/melon?query=List%20of%20funds).

In the event you know the manager's address, the process for finding a hub's address is more straightforward.

```javascript
import { Version } from '@melonproject/melonjs';

// the fund manager's address
const managerAddress = '0xf60c5493c28ed57014f99eb7573771a4f5396005';

// create an instance of the Version contract
const version = new Version(environment, environment.deployment.melon.addr.Version);

// query the version contract for hub address by manager
const fundAddress = version.getManagersToHubs(managerAddress);
```

### Finding a Fund's Spoke Contract Addresses

Once you have the `Hub` contract's address, you can use it to find the relevant spoke addresses. All the following examples in this documentation use the address of at least one fund-specific contract.

{% hint style="info" %}
This example assumes you've located your fund's address either by using one of the methods above, or some other way. It's noted below as `fundAddress`. 
{% endhint %}

```javascript
import { Hub } from '@melonproject/melonjs';

// create the instance of the Fund's hub contract
const hub = new Hub(environment, fundAddress);

// declare a variable that you'll set equal to an object that contains all the spoke contract addresses
const spokes = await hub.getRoutes();

// you can use regular object notation to access those addresses
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

### Finding a Fund's Metadata

Each fund contract also contains some useful metadata. Using the already instantiated hub above, we can make those queries as such:

```javascript
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

```



