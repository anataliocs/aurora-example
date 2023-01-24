require("dotenv").config();

const { DEPLOYED_AURORA_CONTRACT, WALLET_ADDRESS } = process.env;

// Loading the compiled contract Json
const contractJson = require("../build/contracts/InfuraAuroraTestNft.json");

module.exports = async function (callback) {
    // web3 is injected by Truffle
    const contract = new web3.eth.Contract(
        contractJson.abi,
        DEPLOYED_AURORA_CONTRACT // this is the address generated when running migrate
    );

    // Generate a transaction to calls the `mintNFT` method
    const tx = contract.methods.mint(WALLET_ADDRESS);
    // Send the transaction to the network
    const receipt = await tx
        .send({
            from: (await web3.eth.getAccounts())[0], // uses the first account in the HD wallet
            gas: await tx.estimateGas(),
        })
        .on("transactionHash", (txhash) => {
            console.log(`Mining ERC-721 transaction for InfuraAurora NFT ...`);
            console.log(`https://testnet.aurorascan.dev/tx/${txhash}`);
        })
        .on("error", function (error) {
            console.error(`An error happened: ${error}`);
            callback();
        })
        .then(function (receipt) {
            // Success, you've minted the NFT. The transaction is now on chain!
            console.log(
                `Success: The single ERC-721 NFT has been minted and mined in block ${receipt.blockNumber} which cost ${receipt.gasUsed} gas`
            );
            callback();
        });
};
