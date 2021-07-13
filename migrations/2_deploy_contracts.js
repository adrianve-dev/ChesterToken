var ChesterToken = artifacts.require("ChesterToken");

module.exports = function(deployer) {
  //initialize
  deployer.deploy(ChesterToken, "Chester", "CHSTR", 18, 1000);
};