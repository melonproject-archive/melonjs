# 0x

0x is a transaction layer for the Ethereum blockchain. You can read more about them [here](https://0x.org/why). 

0x also provides a few useful tools through their library. We'll be using them in this example. They're easy to install via npm or yarn. Their documentation is fairly extensive, and can be found [here](https://0x.org/docs/tools/0x.js/v9.1.5).

A 0x order looks like this:

```javascript
"order": {
        "signature": "0x1cdd947fd6c110d6d4204c5a3e4ad08282a79574d6fcc89e0782a2bf003a92042833fc2efd2435c89bc1ad3074ed9b1df1cc37ba8399305c84002040deca4226e002",
        "senderAddress": "0x0000000000000000000000000000000000000000",
        "makerAddress": "0x167f897440cfd5227f22349779841f83ddda126a",
        "takerAddress": "0x0000000000000000000000000000000000000000",
        "makerFee": "0",
        "takerFee": "30000000000000000000",
        "makerAssetAmount": "10000000000000000000000",
        "takerAssetAmount": "20000000000000000000",
        "makerAssetData": "0xf47261b000000000000000000000000010ef64cb79fd4d75d4aa7e8502d95c42124e434b",
        "takerAssetData": "0xf47261b0000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
        "salt": "1582812333130",
        "exchangeAddress": "0x61935cbdd02287b511119ddb11aeb42f1593b7ef",
        "feeRecipientAddress": "0x5265bde27f57e738be6c1f6ab3544e82cdc92a8f",
        "expirationTimeSeconds": "1594908333",
        "makerFeeAssetData": "0x",
        "chainId": 1,
        "takerFeeAssetData": "0xf47261b000000000000000000000000010ef64cb79fd4d75d4aa7e8502d95c42124e434b"
      },
```

We'll  assign the above values to a variable called `offer` and execute a trade on it in the example below:

{% hint style="info" %}
This example requires an [environment](../../building-blocks/environment/) instance as described [here](../../building-blocks/environment/).
{% endhint %}

```javascript
import { Trading, ZeroExV3TradingAdapter } from '@melonproject/melonjs';


const managerAddress = '0x234nfds...';// the fund manager's address
const tradingAddress = '0xwe9302...'; // the address of the fund's trading contract
const exchangeAddress = environment.getExchange("ZeroExV3").exchange
const offer = {json} // in the format from the preceeding code block
const quantity = new BigNumber(10); // this is me choosing an arbitrary amount; you'll dictate the number of makerAssets to swap for takerAssets
const adapter = await ZeroExV3TradingAdapter.create(enviornment, exchange, trading)



// create the transaction
const transaction = adapter.takeOrder(managerAddress, offer, quantity);

// Push it through the normal pattern
await transaction.send(transaction.prepare({
    gasPrice,
})
```

