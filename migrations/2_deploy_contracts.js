const DappToken = artifacts.require("DappToken");
const DaiToken = artifacts.require("DaiToken");
const TokenFarm = artifacts.require("TokenFarm");



module.exports = async function(deployer, network, accounts) {
    //deploy Mock DAIT Token
    await deployer.deploy(DaiToken)  
    const daiToken = await DaiToken.deployed()

    //deploy DappToken 
    await deployer.deploy(DappToken)  
    const dappToken = await DappToken.deployed()

    //deploy tokenFarm 
    await deployer.deploy(TokenFarm, dappToken.address , daiToken.address)  
    const tokenFarm = await TokenFarm.deployed()

};
