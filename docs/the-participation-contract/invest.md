# Investing in a Fund

Investing in a Melon is a three step process. The first two steps are handled by the party requesting the investment. The third step is handled by either that party, the fund manager, or an interested third party. More discussion of the game theory dynamics and potential attack vectors of the investment process can be found [here](https://medium.com/melonprotocol/protecting-participants-ee55a752287).

| Step | Contract | User |
| :--- | :--- | :--- |
| approve | ERC20 | investor |
| request | `Participation` | investor |
| execute | `Participation` | various |

The first step is to approve the fund's participation contract to transfer of a specific amount tokens from the investor's address.

**This contract requires an** [**environment**](https://melonjs.melonprotocol.com/building-blocks/environment) **and will be executed using executeTransaction.**

```javascript
const { StandardToken } = require('@melonproject/melonjs')
const tokenAddress = string // address here is that of the ERC-20 that the user is trying to invest in the fund.
const token = new StandardToken(environment, tokenAddress)
const accountAddress = string // the address of the user trying to make the investment
const participationAddress = string // the address of your fund's participation contract
const approvalAmount = bigNumber // a number equal to the amount of the ERC-20 that the user is trying to invest, with the correct number of decimals for that given token. On our front end, we use a helper function called toTokenBaseUnit to generate these bigNumbers
const transaction = token.approve(accountAddress, participationAddress, approvalAmount)


// At this point, we can pass the transaction through the flow we described above.
const receipt = await new Promise( (resolve, reject) => {
  transaction.validate()
    .then(() => tx.prepare({ gasPrice: GAS_PRICE })) // of your choosing, or omit this
    .then((options) => {
      const tx = tx.send(options);

      tx.once('transactionHash', hash => console.log(`Pending: ${hash}`));
      tx.once('receipt', receipt => resolve(receipt));
      tx.once('error', error => reject(error));
    })
    .catch(error) => reject(error));
    });

console.log(`Success: ${receipt.transactionHash}`);
```

Next, we have to request the shares from the `Participation` contract.

```javascript
const { Participation } = require('@melonproject/melonjs');

const participationAddress = string; // the address of the fund's participation contract
const tokenAddress = string; // the address of the token with which the user is asking to invest
const userAddress = string; // the address of the user making the investment request

const participation = new Participation(environment, participationAddress);
const investmentAmount = BigNumber; // the amount of ERC-20 token the user is offering to invest, with the appropriate number of decimals for that token
const sharesAmount = BigNumber; // the computed number of shares the user is requesting given the amount of the investment token, with the correct number of decimals (18)
const transaction = participation.requestInvestment(userAddress, sharesAmount, investmentAmount, tokenAddress);

// At this point, we can pass the transaction through the flow we described above.
const receipt = await new Promise( (resolve, reject) => {
  transaction.validate()
    .then(() => tx.prepare({ gasPrice: GAS_PRICE })) // of your choosing, or omit this
    .then((options) => {
      const tx = tx.send(options);

      tx.once('transactionHash', hash => console.log(`Pending: ${hash}`));
      tx.once('receipt', receipt => resolve(receipt));
      tx.once('error', error => reject(error));
    })
    .catch(error) => reject(error));
    });

console.log(`Success: ${receipt.transactionHash}`);
```

Finally, we execute the investment request. With the exception of the first investment in a fund, this will require waiting until after the next price feed update, and the function can be called by anybody \(see the blog post linked above\).

```javascript
const { Participation } = require('@melonproject/melonjs');
const participationAddress = string; // the address of the fund's participation contract
const userAddress = string; // the address of the user making the investment request
const executorAddress = string; // the address of the account calling the function

const participation = new Participation(environment, participationAddress);
const transaction = participation.executeRequestFor(executorAddress, userAddress);

const receipt = ...etc // as above
```

