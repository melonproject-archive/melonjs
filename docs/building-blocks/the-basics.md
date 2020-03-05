# The Basics

If you're unfamiliar with a Melon fund's hub and spoke architecture, the [protocol documentation](https://docs.melonport.com/chapters/fund.html) is worth a read. 

This library is based on web3.js 2x \(link to repo\). Those imports are noted at the top of each example code block. We also use [BigNumber.js](https://github.com/MikeMcl/bignumber.js/) to describe tokens numerically. I have not noted those imports; you should just assume that whenever you're dealing with amounts of tokens, it's a BigNumber and you should import that library. 

Finally, it's worth defining some primitives that will be used frequently when interacting with both the Ethereum blockchain in general and the Melon Protocol in particular. Understanding both`Environment` and `Contract` is vital to make use of MelonJS; they're both defined and illustrated in the following sections. 

