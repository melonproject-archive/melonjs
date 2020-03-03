# Redeeming From a Fund

Redeeming one's shares from a Melon fund is fairly simple and requires only one step.

```javascript
const { Participation } = require('@melonproject/melonjs');

const participationAddress = string; // the address of the fund's participation contract
const userAddress = string; // the address of the user making the redemption request

const contract = new Participation(environment, participationAddress)


// the redemption transaction will either be .redeem(), hwich redeems all shares, or .redeemQuantity, which redeems a partial balance of the user's shares. Note that the shareQuantity must be a BigNumber with an appropriate number of decimal places.
const transaction = contract.redeem(userAddress) || contract.redeemQuantity(userAddress, shareQuantity)

const receipt = etc ... // the usual transaction confirmation flow detailed in the first section of this usage guide.
```

