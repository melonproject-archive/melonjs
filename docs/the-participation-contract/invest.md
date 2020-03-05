# Investing in a Fund

Investing in a Melon is a three step process. The first two steps are handled by the party requesting the investment. The third step is handled by either that party, the fund manager, or an interested third party. More discussion of the game theory dynamics and potential attack vectors of the investment process can be found [here](https://medium.com/melonprotocol/protecting-participants-ee55a752287).

| Step | Contract | User |
| :--- | :--- | :--- |
| approve | ERC20 | investor |
| request | `Participation` | investor |
| execute | `Participation` | various |

The first step is to approve the fund's participation contract to transfer of a specific amount tokens from the investor's address.

**This contract requires an** [**environment**](https://melonjs.melonprotocol.com/building-blocks/environment) **and will be executed using executeTransaction \(described at the bottom of the** [**Transaction**](https://melonjs.melonprotocol.com/building-blocks/transaction) **section\).**

```javascript
// import the tools we'll need
const {BigNumber} = require('bignumber.js')
const { StandardToken, Participation, DeployedEnvironment } = require('@melonproject/melonjs')
const { HttpProvider } = require('web3-providers');

// Instantiate the environment 
const eth = new Eth(new HttpProvider('https://mainnet.infura.io/v3/9136e09ace01493b86fed528cb6a87a5', {
  confirmTransactionBlocks: 1,
}}));
const deployment = fs.readFileSync('./deployment.json');
const environment = new DeployedEnvironment(eth, deployment);

// declare the variables necessary for the Approval step
const tokenAddress = '0x0324...' // address here is that of the ERC-20 that the user is trying to invest in the fund.
const investorAddress = '0x3403vd4Jsd...' // the address of the user trying to make the investment
const participationAddress = '0x0945dfger90e98r...' // the address of your fund's participation contract
const approvalAmount = bigNumber // a number equal to the amount of the ERC-20 that the user is trying to invest, with the correct number of decimals for that given token. On our front end, we use a helper function called toTokenBaseUnit to generate these bigNumbers

// execute the Approval step
const token = new StandardToken(environment, tokenAddress)
const approveTransferTransaction = token.approve(accountAddress, participationAddress, approvalAmount)
await executeTransaction(approveTransferTransaction)

// declare the variables necessary for the Request step
const participationAddress = '0xfew032nf...'; // the address of the fund's participation contract
const investmentAmount = BigNumber; // the amount of ERC-20 token the user is offering to invest, with the appropriate number of decimals for that token
const sharesAmount = BigNumber; // the computed number of shares the user is requesting given the amount of the investment token, with the correct number of decimals (18)

// execute the Request step
const participation = new Participation(environment, participationAddress)
const requestSharesTransaction = participation.requestInvestment(investorAddress, sharesAmount, InvestmentAmount, tokenAddress)
await executeTransaction(requestSharesTransaction)

// declare the variables necessary for the ExecuteInvestment step
const executorAddress = '0xfejwio23...' // the address of the account calling the function
const executeInvestmentTransaction = participation.executeRequestFor(executorAddress, userAddress)
await executeTransaction(executeInvestmentTransaction)

```

