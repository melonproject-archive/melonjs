---
description: >-
  Contracts can be used to retrieve information from or execute transactions on
  the blockchain.
---

# Interacting with Contracts

In MelonJS, a contract object is a JavaScript representation of a specific contract on the Ethereum blockchain. This object exposes methods that query the blockchain, or methods that create and execute transactions on the blockchain.

{% hint style="warning" %}
Every address used in this documentation \(aside from the deployment JSON files\) is fake. You will need to use the environment methods to get addresses for tokens and exchanges, and other methods for getting your fund's contract addresses.
{% endhint %}

{% hint style="info" %}
The below examples require an [environment](environment/) instance as described [here](environment/).
{% endhint %}

## Contract Creation

Specific contract class types are imported from MelonJS and passed an `environment` object and the `address` string. This `address` will usually be specific to the contract that is associated with the fund and fund manager in question

```javascript
import { Hub } from '@melonproject/melonjs';

// the address of the fund's FeeManager contract
const hubAddress = '0xb672b818f8c785627772b1a69f1f3f3627eaa25c'; 

// create an instance of the fund's hub contract
const hub = new Hub(environment, hubAddress);
```

## Calls

We can use the class we just instantiated to query different data in the contract's state. We'll use the `feeManager` above to check how much of the fund's management fee is available to be claimed.

```javascript
const managerAddress = await hub.getManager()
console.log(manager) // => 0xc8c617ef185830b51a3ad97b53916c18f99ed559
```

## Transactions

Every time you call a transaction method on contract, it returns a `Transaction` instance. This object is a convenience wrapper around the web3 transaction and exposes methods for validating, estimating and sending the underlying transaction.

**Validation** - `Transaction.validate()` is optional, though it provides named error messages which can be helpful for debugging or to show on any sort of front end application.

**Preparation** - `Transaction.prepare()` is an asynchronous utility function for that returns an object denoting the fees a transaction is projected to require shaped like this:

```text
interface SendOptions {
  gas: number,
  gasPrice?: number,
  amgu?: number,
  incentive?: number,
  value?: number,
  from?: string,
}
```

If no arguments are passed to `Transaction.prepare()`, it will automatically calculate the required values for estimated network gas prices and any applicable [AMGU or incentive fees](https://melonprotocol.com/docs/melonomics/). However, we recommend passing

```text
{ gasPrice: number }
```

to `Transaction.prepare()` with a number you believe will guarantee transaction success.

**Completion** - Pass the resolution of `Transaction.prepare()` to `Transaction.send()`, which returns a Web3 `PromiEvent`. Check [their docs](https://web3js.readthedocs.io/en/v1.2.6/callbacks-promises-events.html) for details, but these are promises with multiple stages of asynchronicity, each of which can be listened for to trigger UI interactions.

Below we'll create an instance of the Version contract and use it to shut down the fund with the hub address above.

```javascript
import { Version } from '@melonproject/melonjs';

const factory = new Version(environment, environment.deployment.melon.addr.Version);

// the fund manager's address
const managerAddress = '0x86f2b76bbb2e747a6585e9d0daa3a87cffc5339a';

// the address of the fund's Hub Contract
const hubAddress = '0x94b76e27c0caf9db8a64b6b86c8dd1d89e21d709';

// specify the gas price (refer to http://ethgasstation.info/).
const gasPrice = 30000000000; 

const shutDownTx = factory.shutDownFund(managerAddress, hubAddress);
const shutDownOpts = await shutDownTx.prepare({gasPrice});
const shutDownReceipt = await shutDownTx.send(shutDownOpts);
```

{% hint style="info" %}
To streamline transaction handling, check out [this helper function](useful-patterns.md#transactions).
{% endhint %}

