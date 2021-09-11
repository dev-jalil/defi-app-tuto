const DappToken = artifacts.require("DappToken");
const DaiToken = artifacts.require("DaiToken");
const TokenFarm = artifacts.require("TokenFarm");

module.exports = async function(deployer, network, accounts) {
  //deploy Mock DAIT Token
  await deployer.deploy(DaiToken);
  const daiToken = await DaiToken.deployed();

  //deploy DappToken
  await deployer.deploy(DappToken);
  const dappToken = await DappToken.deployed();

  //deploy tokenFarm
  await deployer.deploy(TokenFarm, dappToken.address, daiToken.address);
  const tokenFarm = await TokenFarm.deployed();

  // Transfert all tokens to TokenFarm (1 million)
  await dappToken.transfer(tokenFarm.address, "1000000000000000000000000");

  //Transfert 100 Mock DAI tokens to investisseur
  await daiToken.transfer(accounts[1], "1000000000000000000000000");
};
