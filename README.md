# Aurora-Examples

This repository includes DApp boilerplates for [truffle](https://www.trufflesuite.com/) examples on Aurora. These examples cover specific topics:
- Solidity contract deployment using Truffle
- Integration with Metamask
- Running DApp on Aurora network
- Bridging Using Rainbow Bridge

## Prerequisites
- [NodeJS](https://nodejs.org/en/) version 16 or above
- [Visual Studio Code](https://code.visualstudio.com/)
- [Git Bash](https://git-scm.com/downloads)
- [Bash on VS Code](https://www.shanebart.com/set-default-vscode-terminal/)

## Config

Install the dotenv npm package to be able to use an `.env` file

```bash
yarn add dotenv
```

Create the `.env` file with the following command in your project root directory:

```
touch .env
```

Add the Infura credentials.

Check out `.env-example` for an example `.env` file.

```text
MNEMONIC=

WEB3_INFURA_API_KEY=
DEPLOYED_AURORA_CONTRACT=
DEPLOYED_GOERLI_CONTRACT=
WALLET_ADDRESS=
```

## Deploy

Deploying your contract.

Execute the following command in a terminal:

```
truffle migrate --network aurora
```

## Contributing
Infura team welcomes any kind of contributions in form of bug issues, feature requests, code changes, or documentation enhancement.