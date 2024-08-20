const hre = require("hardhat");

async function main() {
  const contractAddress = "0x0a64E46392E4D96f0a27f6368377a62343481805"; // Адрес вашего контракта
  const [signer] = await hre.ethers.getSigners(); // Получение вашего аккаунта

  const contractFactory = await hre.ethers.getContractFactory("TestToken");
  const contract = contractFactory.attach(contractAddress);

  const balance = await contract.balanceOf(signer.address);
  console.log(`Balance of ${signer.address}: ${hre.ethers.utils.formatUnits(balance, 18)} SWTR`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
