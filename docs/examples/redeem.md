# Redeeming Shares From a Fund

Redeeming one's shares from a Melon fund is fairly simple and requires only one step.

```javascript
import { Participation } from '@melonproject/melonjs';

const participationAddress = '0xfwewe93...'; // the address of the fund's participation contract
const userAddress = '0xfew03rs...'; // the address of the user making the redemption request
const shareQuantity = new BigNumber(329); // a bignumber representing the number of shares to redeem
const participation = new Participation(environment, participationAddress);


// the redemption transaction will either be .redeem(), which redeems all shares, 
// or .redeemQuantity(), which redeems a partial balance of the user's shares. Note that the shareQuantity must be a BigNumber with an appropriate number of decimal places.
const transaction = participation.redeem(userAddress) 
// ***OR***
const transaction = paricipation.redeemQuantity(userAddress, shareQuantity)
await transaction.send(await setupTransaction.prepare({
    gasPrice
}));
```

