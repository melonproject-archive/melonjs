# Fund Configuration JSON

This config JSON contains the information necessary to instantiate a Melon Fund. Our fund set up example references this JSON, but it should be noted that any way you provide the setup functions with these data points is fine.

```javascript
{
  "FundName": "THE Fund",
  "QuoteToken": "WETH", // the fund's NAV, GAV, etc will be denominated in WETH
  "AllowedTokens": ["WETH", "MLN"], // an array of tokens investors can use to buy shares of the fund
  "ManagementFee": "10", // the fee, in percent, the manager charges to run the fund
  "PerformanceFee": "10", // the fee, in percent, the manager deducts from any profits
  "Exchanges": [
    "OasisDex",
    "Uniswap",
    "KyberNetwork", 
    "ZeroExV2",
    "ZeroExV3",
    "MelonEngine"
  ] // an array of exchanges your fund will use
}
```

