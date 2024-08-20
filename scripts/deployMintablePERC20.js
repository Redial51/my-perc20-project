// scripts/deployMintablePERC20.js
async function main() {
    const [deployer] = await hre.ethers.getSigners();

    console.log("Deploying contracts with the account:", deployer.address);

    const MintablePERC20 = await hre.ethers.getContractFactory("MintablePERC20");
    const mintablePERC20 = await MintablePERC20.deploy("PERC20Sample", "PERC");

    // Ожидание завершения транзакции деплоя
    const receipt = await mintablePERC20.deploymentTransaction().wait();

    console.log("MintablePERC20 deployed to:", mintablePERC20.target);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
