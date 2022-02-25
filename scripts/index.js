const fs = require("fs");
const {ethers} = require('hardhat');

require("dotenv").config();
const privateKey = process.env.PRIVATE_KEY;
const providerUrl = process.env.TESTNET_URL;

// const web3 = new Web3.providers.HttpProvider('https://kovan.infura.io/v3/0aae8358bfe04803b8e75bb4755eaf07');
//  let web3Provider = new ethers.providers.Web3Provider(web3)

const web3Provider = new ethers.providers.JsonRpcProvider(providerUrl);

const wallet = new ethers.Wallet(privateKey, web3Provider);

let address = "0x46B403880EDC7756543293e630ed8de1E5d18A4E";

let bal;

// support eip1559
async function getGasPrice() {
    return await web3Provider.getGasPrice().then(gasPrice => {
        let gasNow = gasPrice.toString();
        console.log("Current gas price: " + gasNow);
        return gasNow;
    });
}

async function checkBalance() {
    bal = await web3Provider.getBalance(address).then((balance) => {
        // balance is a BigNumber (in wei); format is as a sting (in ether)
        return ethers.utils.formatEther(balance);
    });
    console.log("balance: ", bal);
}

checkBalance().then();

// let token;
// async function deploy() {
//     let option = await getGasPrice();
//     // 常见合约工厂实例
//     const Token = await ethers.getContractFactory('DreamFarmPond');
//     token = await Token.deploy();
//     let tx = await token.transfer(
//         "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
//         ethers.utils.parseEther("0.00000000001"),
//         option
//     );
//     console.log(token.address);
//
//     console.log(token.deployTransaction.hash);
//
//     await token.deployed();
//
//     let bal = await token.balanceOf(wallet.address);
//     console.log(bal.toString());
// }
//
// deploy().then(r => console.log(r));

let contract = "0x7EB5F588631e40fea7c65ec5eF5a438105b452E6";

async function connect() {

    let abi = [{"inputs": [], "stateMutability": "nonpayable", "type": "constructor"}, {
        "anonymous": false,
        "inputs": [{"indexed": true, "internalType": "address", "name": "owner", "type": "address"}, {
            "indexed": true,
            "internalType": "address",
            "name": "approved",
            "type": "address"
        }, {"indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256"}],
        "name": "Approval",
        "type": "event"
    }, {
        "anonymous": false,
        "inputs": [{"indexed": true, "internalType": "address", "name": "owner", "type": "address"}, {
            "indexed": true,
            "internalType": "address",
            "name": "operator",
            "type": "address"
        }, {"indexed": false, "internalType": "bool", "name": "approved", "type": "bool"}],
        "name": "ApprovalForAll",
        "type": "event"
    }, {
        "anonymous": false,
        "inputs": [{
            "indexed": true,
            "internalType": "address",
            "name": "previousOwner",
            "type": "address"
        }, {"indexed": true, "internalType": "address", "name": "newOwner", "type": "address"}],
        "name": "OwnershipTransferred",
        "type": "event"
    }, {
        "anonymous": false,
        "inputs": [{"indexed": true, "internalType": "address", "name": "from", "type": "address"}, {
            "indexed": true,
            "internalType": "address",
            "name": "to",
            "type": "address"
        }, {"indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256"}],
        "name": "Transfer",
        "type": "event"
    }, {
        "inputs": [],
        "name": "MAX_SUPPLY",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [{"internalType": "address", "name": "to", "type": "address"}, {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
        }], "name": "approve", "outputs": [], "stateMutability": "nonpayable", "type": "function"
    }, {
        "inputs": [{"internalType": "address", "name": "owner", "type": "address"}],
        "name": "balanceOf",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "baseURL",
        "outputs": [{"internalType": "string", "name": "", "type": "string"}],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [{"internalType": "uint256", "name": "amount", "type": "uint256"}, {
            "internalType": "uint256",
            "name": "adv_time",
            "type": "uint256"
        }], "name": "buy", "outputs": [], "stateMutability": "payable", "type": "function"
    }, {
        "inputs": [],
        "name": "buy_limit_per_address",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "current_sold",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "current_supply",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [{"internalType": "uint256", "name": "tokenId", "type": "uint256"}],
        "name": "getApproved",
        "outputs": [{"internalType": "address", "name": "", "type": "address"}],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [{"internalType": "uint256", "name": "_tokenId", "type": "uint256"}],
        "name": "getSoldTimes",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "name": "increaseSoldTimes",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{"internalType": "address", "name": "owner", "type": "address"}, {
            "internalType": "address",
            "name": "operator",
            "type": "address"
        }],
        "name": "isApprovedForAll",
        "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [{"internalType": "uint256", "name": "_num", "type": "uint256"}, {
            "internalType": "uint256",
            "name": "_price",
            "type": "uint256"
        }, {"internalType": "uint256", "name": "_limit", "type": "uint256"}, {
            "internalType": "uint256",
            "name": "_time",
            "type": "uint256"
        }], "name": "mintAndPricing", "outputs": [], "stateMutability": "nonpayable", "type": "function"
    }, {
        "inputs": [],
        "name": "name",
        "outputs": [{"internalType": "string", "name": "", "type": "string"}],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "owner",
        "outputs": [{"internalType": "address", "name": "", "type": "address"}],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [{"internalType": "uint256", "name": "tokenId", "type": "uint256"}],
        "name": "ownerOf",
        "outputs": [{"internalType": "address", "name": "", "type": "address"}],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "price",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{"internalType": "address", "name": "from", "type": "address"}, {
            "internalType": "address",
            "name": "to",
            "type": "address"
        }, {"internalType": "uint256", "name": "tokenId", "type": "uint256"}],
        "name": "safeTransferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{"internalType": "address", "name": "from", "type": "address"}, {
            "internalType": "address",
            "name": "to",
            "type": "address"
        }, {"internalType": "uint256", "name": "tokenId", "type": "uint256"}, {
            "internalType": "bytes",
            "name": "_data",
            "type": "bytes"
        }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function"
    }, {
        "inputs": [],
        "name": "sell_begin_time",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [{"internalType": "address", "name": "operator", "type": "address"}, {
            "internalType": "bool",
            "name": "approved",
            "type": "bool"
        }], "name": "setApprovalForAll", "outputs": [], "stateMutability": "nonpayable", "type": "function"
    }, {
        "inputs": [{"internalType": "string", "name": "_newBaseURL", "type": "string"}],
        "name": "setBaseURL",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{"internalType": "string", "name": "name_", "type": "string"}, {
            "internalType": "string",
            "name": "symbol_",
            "type": "string"
        }], "name": "setNames", "outputs": [], "stateMutability": "nonpayable", "type": "function"
    }, {
        "inputs": [{"internalType": "uint256", "name": "_tokenId", "type": "uint256"}, {
            "internalType": "address",
            "name": "_contractAddr",
            "type": "address"
        }, {"internalType": "uint256[]", "name": "_settings", "type": "uint256[]"}, {
            "internalType": "address[]",
            "name": "_addrs",
            "type": "address[]"
        }], "name": "setSale", "outputs": [], "stateMutability": "nonpayable", "type": "function"
    }, {
        "inputs": [{
            "internalType": "uint256",
            "name": "_current_supply",
            "type": "uint256"
        }, {"internalType": "uint256", "name": "_max_supply", "type": "uint256"}],
        "name": "setSupplies",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{"internalType": "uint256", "name": "_tokenId", "type": "uint256"}, {
            "internalType": "string",
            "name": "_uri",
            "type": "string"
        }, {"internalType": "string", "name": "_hash", "type": "string"}, {
            "internalType": "address",
            "name": "_minter",
            "type": "address"
        }], "name": "setTokenAsset", "outputs": [], "stateMutability": "nonpayable", "type": "function"
    }, {
        "inputs": [{"internalType": "bytes4", "name": "interfaceId", "type": "bytes4"}],
        "name": "supportsInterface",
        "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "symbol",
        "outputs": [{"internalType": "string", "name": "", "type": "string"}],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [{"internalType": "uint256", "name": "_tokenId", "type": "uint256"}],
        "name": "tokenMeta",
        "outputs": [{
            "components": [{
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            }, {"internalType": "string", "name": "name", "type": "string"}, {
                "internalType": "string",
                "name": "uri",
                "type": "string"
            }, {"internalType": "string", "name": "hash", "type": "string"}, {
                "internalType": "uint256",
                "name": "soldTimes",
                "type": "uint256"
            }, {"internalType": "address", "name": "minter", "type": "address"}],
            "internalType": "struct TokenMeta",
            "name": "",
            "type": "tuple"
        }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "name": "tokenOnChainMeta",
        "outputs": [{"internalType": "uint256", "name": "id", "type": "uint256"}, {
            "internalType": "string",
            "name": "name",
            "type": "string"
        }, {"internalType": "string", "name": "uri", "type": "string"}, {
            "internalType": "string",
            "name": "hash",
            "type": "string"
        }, {"internalType": "uint256", "name": "soldTimes", "type": "uint256"}, {
            "internalType": "address",
            "name": "minter",
            "type": "address"
        }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [{"internalType": "uint256", "name": "tokenId", "type": "uint256"}],
        "name": "tokenURI",
        "outputs": [{"internalType": "string", "name": "", "type": "string"}],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "totalSupply",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [{"internalType": "address", "name": "from", "type": "address"}, {
            "internalType": "address",
            "name": "to",
            "type": "address"
        }, {"internalType": "uint256", "name": "tokenId", "type": "uint256"}],
        "name": "transferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{"internalType": "address", "name": "newOwner", "type": "address"}],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {"inputs": [], "name": "withdraw", "outputs": [], "stateMutability": "nonpayable", "type": "function"}];

    const nft = new ethers.Contract(contract, abi, web3Provider);
    const contractWithSigner = nft.connect(wallet);
    const name = await contractWithSigner.name();
    console.log("NFT name is: " + name);
    const gas = getGasPrice();
    const overrides = {
        gasLimit: 250000,
        gasPrice: 10000000000,
        value: ethers.utils.parseEther('0.3')
    }
    // let tx = await contractWithSigner.buy(2, 86400, overrides);
    let tx = await contractWithSigner.setTokenAsset(10000,"www.dreamfarm.io/token/pond/10000","{}",address);
    // let tx = await contractWithSigner.setSupplies(5000,10000);

    console.log(tx);
}

connect().then()


// async function getNFT() {
//     await wallet.getAllTokens();
//
// }