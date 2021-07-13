# Chester Token
 Deploy ERC20 token for Udacity's Blockchain Developer Nanodegree

 You can view the currently deployed Chester Tokens on the [Ropsten Network](https://ropsten.etherscan.io/token/0x206827a51f2b1ced4b52e5c7d1c7b81ef622f6fb)

 ## Installation
 - Download or fork code and `cd` to the `ChesterToken` directory
 - run `npm install` to install all dependencies  

 ## Deployment
1. add `infureKey.txt` and `mnemonic.txt` to the config folder and update them appropriately
2. the number of decimals and tokens supply are available in `/migrations/2_deploy_contracts.js` if they need to be changed
    - _Note: the standard number of decimals is 18_
3. Make sure you have enough Ether in your main account
3. run `truffle migrate --network ropsten`

