# The Basics

Throughout these examples, we'll be using `address` variables to refer to the deployed versions of various Melon Protocol contracts specific your fund. Though these are accessible via the blockchain and the `Hub` contract, they're also indexed on IPFS by the Graph Protocol and accessible freely through Melon's graphQL endpoint \([https://api.thegraph.com/subgraphs/name/melonproject/melon](https://api.thegraph.com/subgraphs/name/melonproject/melon
)\). You can play around with a query editor and investigate the schema for the Melon subgraph [here](https://thegraph.com/explorer/subgraph/melonproject/melon).

If you're unfamiliar with a Melon fund's hub and spoke architecture, the [protocol documentation](https://docs.melonport.com/chapters/fund.html) is worth a read.

We use a variety of [web3](https://web3js.readthedocs.io/en/v1.2.6/) tools for interacting with Ethereum. Those imports are noted at the top of each example code block. We also use [BigNumber.js](https://github.com/MikeMcl/bignumber.js/) to describe tokens numerically. I have not noted those imports; you should just assume that whenever you're dealing with amounts of tokens, it's a BigNumber and you should import that library. 

Finally, it's worth defining some primitives that will be used frequently when interacting with both the Ethereum blockchain in general and the Melon Protocol in particular. Understanding both`Environment` and `Contract` is vital to make use of MelonJS; they're both defined and illustrated in the following sections.

