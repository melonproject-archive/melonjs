# List Investors in a Fund

We can also use the `Participation` contract to check a fund's current investors.

```javascript
const { Participation } = require('@melonproject/melonjs');
const participationAddress = string; // the address of the fund's participation contract
const contract = new Participation(environment, participationAddress)
const investors = await contract.getHistoricalInvestors()

// investors will be an array of addresses of investors in the fund
```

