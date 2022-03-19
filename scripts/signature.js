const { ethers } = require('hardhat');
require("dotenv").config();

const privateKey = process.env.PRIVATE_KEY;
const providerUrl = process.env.TESTNET_URL;

const web3Provider = new ethers.providers.JsonRpcProvider(providerUrl);

const wallet = new ethers.Wallet(privateKey, web3Provider);

let address = "0x46B403880EDC7756543293e630ed8de1E5d18A4E";

async function main() {
    const type = {
        "components": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "salt",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "horse1",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "horse2",
                "type": "uint256"
            },
            {
                "internalType": "uint8",
                "name": "newType",
                "type": "uint8"
            }
        ],
        "indexed": false,
        "internalType": "struct Game.BreedData",
        "name": "breedData",
        "type": "tuple"
    }
    await web3Provider.getTransactionCount(address,"latest").then(r => console.log("---------nonce:"+r));

    const breed = {
        owner: '0xDB193F3a78AaC74A77f2fEE96Db210C88a9c2438',
        salt: 1,
        horse1: 2,
        horse2: 3,
        newType: 4
    }

    // let wallet = new ethers.Wallet(privateKey);
    let message = "Hello World2";
    let flatSig = await wallet.signMessage(message);
    console.log(wallet.address)
    // console.log(flatSig)
    // let encode = ethers.utils.defaultAbiCoder.encode(
    //     ['address','address', 'uint256[]'],
    //     ['0xDB193F3a78AaC74A77f2fEE96Db210C88a9c2438','0x7041755821EEEB96aA89b5d0A351EfD3720eF0E1', [3]]);
    let encode = ethers.utils.defaultAbiCoder.encode(
        [type],
        [breed]);
    console.log("msg:" + encode);
    const message2 = ethers.utils.keccak256(encode).slice(2);
    console.log("hash:" + message2)
    let sig = await wallet.signMessage(message2);
    console.log("sig:" +sig);
    let sigSplit = ethers.utils.splitSignature(sig);
    console.log(sigSplit);

    // console.log(flatSig)
    // let sig = ethers.utils.splitSignature(flatSig);
    // console.log(sig)

    const signerAddress = ethers.utils.verifyMessage(message2, '0x3772dccccf25b5e4fe6ed6d3eb8b3732915fb0adfe98ad92a35d032010400d1a751086016c0cf95cba2a6140b521d78d9a42b4201b8b8d4ed263c3164819a14e1b');
    console.log(signerAddress);
}

main().then();