require("dotenv").config();
const HDWalletProvider = require('@truffle/hdwallet-provider')

const mnemonic = process.env.MNEMONIC;
const infuraURL = `wss://goerli.infura.io/ws/v3/${process.env.WEB3_INFURA_API_KEY}`;
const infuraAuroraURL = `https://aurora-testnet.infura.io/v3/${process.env.WEB3_INFURA_API_KEY}`;


module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    aurora: {
      provider: () => new HDWalletProvider(mnemonic, infuraAuroraURL),
      network_id: '1313161555',
      gas: 10000000,
      deploymentPollingInterval: 8000,
      timeoutBlocks: 500,
      confirmations: 10,
    },
    goerli: {
      provider: () => new HDWalletProvider(mnemonic, infuraURL),
      network_id: '5',
      timeoutBlocks: 100, // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true, // Skip dry run before migrations? (default: false for public nets )
    }
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.13",    // Fetch exact version from solc-bin (default: truffle's version)
    },
  },
};
