require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  defaultNetwork:"local",
  networks:{
    local:{
      url:"http:\\127.0.0.1:8545"
    }
  },
  paths:{
    artifacts:"../api1/src"
  }
};
