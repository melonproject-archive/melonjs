# Redeeming Shares From a Fund

Redeeming one's shares from a Melon fund is fairly simple. The first step is to create an instance of the `Participation` contract.

```javascript
import { Participation } from '@melonproject/melonjs';

// the address of the fund's participation contract
const participationAddress = '0xffe8bc42946d87e5d791dfa931deabe144ac23a8'; 

// the address of the user making the redemption request
const userAddress = '0xf039e6893ffa43196fd9d1d7038b74bf39dda4a5'; 

// specify the gas price (refer to http://ethgasstation.info/).
const gasPrice = 2000000000000; 

// declare the instance of the fund's Participation contract
const participation = new Participation(environment, participationAddress);

```

From there, you can either redeem all shares:

```javascript
const transaction = participation.redeem(userAddress) 
const opts = transaction.prepare({gasPrice});
const receipt = transaction.send(opts);
```

Or redeem a specific amount of shares to redeem:

```javascript
// a bignumber representing the number of shares to redeem
const shareQuantity = new BigNumber(329); 
const transaction = participation.redeemQuantity(userAddress, shareQuantity) 
const opts = transaction.prepare({gasPrice});
const receipt = transaction.send(opts);
```

