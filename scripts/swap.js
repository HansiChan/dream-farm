const { ethers } = require('hardhat');
require("dotenv").config();

const privateKey = process.env.PRIVATE_KEY;
const providerUrl = process.env.TESTNET_URL;

const web3Provider = new ethers.providers.JsonRpcProvider(providerUrl);

const wallet = new ethers.Wallet(privateKey, web3Provider);

const router = "0x9Ac64Cc6e4415144C455BD8E4837Fea55603e5c3"

async function main() {
    console.log(wallet.address)
    const uni =  new ethers.Contract(router,[
        'function getAmountsOut(uint amountIn, address[] memory path) public view returns (uint[] memory amounts)',
        'function swapTokensForExactETH(uint amountOut, uint amountInMax, address[] calldata path, address to, uint deadline) external returns (uint[] memory amounts)',
        'function swapTokensForExactTokens(uint amountOut, uint amountInMax, address[] calldata path, address to, uint deadline) external returns (uint[] memory amounts)',
        'function swapETHForExactTokens(uint amountOut, address[] calldata path, address to, uint deadline) external payable returns (uint[] memory amounts)',
        'function swapExactTokensForTokens(uint amountIn, uint amountOutMin, address[] calldata path, address to, uint deadline) external returns (uint[] memory amounts)',
        'function swapExactETHForTokens(uint amountOutMin, address[] calldata path, address to, uint deadline) external payable returns (uint[] memory amounts)',
        'function swapExactTokensForETH(uint amountIn, uint amountOutMin, address[] calldata path, address to, uint deadline) external returns (uint[] memory amounts)',
        'function swapExactTokensForTokensSupportingFeeOnTransferTokens(uint amountIn, uint amountOutMin, address[] calldata path, address to, uint deadline) external returns (uint[] memory amounts)'
    ],web3Provider);
    const contractWithSigner = uni.connect(wallet);

    const deadline = Math.floor(Date.now() / 1000) + 60 * 20;
    const path = ['0xae13d989dac2f0debff460ac112a837c89baa7cd','0x1673F22b60D2C699d459d030f1270ea575fe9EDb'];
    let tx = contractWithSigner.swapExactTokensForTokens(
        1000000000,
        0,
        path,
        wallet.address,
        deadline
    )

    // const path = ['0x1673F22b60D2C699d459d030f1270ea575fe9EDb','0xae13d989dac2f0debff460ac112a837c89baa7cd'];
    // let tx = contractWithSigner.swapExactTokensForETH(
    //     500000000000,
    //     0,
    //     path,
    //     wallet.address,
    //     deadline
    // )
    console.log(tx)
}

main().then();