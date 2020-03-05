# Contract

The `Contract` class is MelonJS' base unit for all interactions with the blockchain. Though every Melon Protocol contract has various layers of abstraction, `Contract` gives each some base functionality:

* creating a `Deployment` of the contract
* querying the blockchain
* creating a `Transaction`

~~`Transaction` is a class all its own. From start to finish, executing a transaction has four steps.~~

A `Transaction` is how a deployed contract interacts with the blockchain, and can be thought of as having four steps from start to finish. 

**Instantiation** - A contract must create a new transaction of a given type.

**Validation** - this step is optional, though it provides named error messages which can be helpful for debugging or to show on any sort of front end application.

**Preparation** - `Transaction.prepare()` is an asynchronous function that returns an object denoting the fees a transaction is projected to require shaped like this:

```text
{
  gas: number,
  gasPrice?: number,
  amgu?: number,
  incentive?: number,
  value?: number,
  from?: string,
}
```

If no arguments are passed to `Transaction.prepare()`, it will check the [ethgasstation.info](https://ethgasstation.info/) for estimated network gas prices, and the Melon Protocol for any applicable AMGU or incentive fees. However, we recommend passing

```text
{ gasPrice: number }
```

to `Transaction.prepare()` with a number you believe will guarantee transaction success.

**Completion** - Pass the resolution of `Transaction.prepare()` to `Transaction.send()`, which returns a Web3 `PromiEvent`. Check [their docs](https://web3js.readthedocs.io/en/v1.2.6/callbacks-promises-events.html) for details, but these are promises with multiple stages of asyncronicity, each of which can be listened for to trigger UI interactions.

These steps can be chained together into something like this:

```javascript
const transaction = SomeContract.create(environment, args)

function executeTransaction(transaction){
  await new Promise( (resolve, reject) => {
  transaction.validate()
    .then(() => transaction.prepare({ gasPrice: GAS_PRICE })) // of your choosing, or omit this
    .then((options) => {
      const tx = transaction.send(options);

      tx.once('transactionHash', hash => console.log(`Pending: ${hash}`));
      tx.once('receipt', receipt => resolve(receipt));
      tx.once('error', error => reject(error));
    })
    .catch(error) => reject(error));
    });
}

console.log(`Success: ${receipt.transactionHash}`);
```

