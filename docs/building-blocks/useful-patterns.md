---
description: Helper functions to abstract away some complexity
---

# Useful Patterns

### Transactions

The steps to validate, prepare, and execute a contract are used quite frequently. We've found it helpful to abstract those steps into a single function, as such:

```javascript
function executeTransaction(transaction, options) {
  return new Promise(async (resolve, reject) => {
    try {
      await transaction.validate();
      
      const opts = await transaction.prepare(options);
      const tx = transaction.send(opts);
      tx.once('transactionHash', hash => console.log(`Pending: ${hash}`));
      tx.once('receipt', receipt => resolve(receipt));
      tx.once('error', error => reject(error));
    } catch (e) {
      reject(e);
    }
  });
}
```



