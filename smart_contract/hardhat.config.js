//https://eth-goerli.alchemyapi.io/v2/ce7w9K9uRVfJDcaPp22emEVJwWHoxGEe

require('@nomiclabs/hardhat-waffle');
module.exports={
  solidity:'0.8.0',
  networks:{
    goerli:{
      url:'https://eth-goerli.alchemyapi.io/v2/ce7w9K9uRVfJDcaPp22emEVJwWHoxGEe',
      accounts:['980cb3a0904dc2f2f837c2f41987123d7fdc149f5ddec52dcab5a05191f6990f']

    }
}
}