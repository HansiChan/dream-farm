require("@nomiclabs/hardhat-waffle");
require('dotenv').config();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

function mnemonic() {
  return process.env.PRIVATE_KEY;
}

function url() {
  return process.env.TESTNET_URL;
}

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  networks: {
    // hardhat 内置测试网络（选填）
    hardhat: {
      // 可以设置一个固定的gasPrice，在测试gas消耗的时候会很有用
      gasPrice: 1000000000
    },
    // 你可以在这里配置任意网络
    // rinkeby 测试网络
    rinkeby: {
      // 请将 INFURA_ID 替换成你自己的
      url: 'https://rinkeby.infura.io/v3/8f9d9991b68547b7ac36c939ebbe6bf0',
      // 填写测试账户的私钥，可填写多个
      accounts: [mnemonic()]
    },
    //bsc-test net
    testnet: {
      url: url(),
      chainId: 97,
      gasPrice: 100000000000,
      gas: 2100000,
      gasLimit: 100000000000,
      accounts: [mnemonic()]
    }
  },
  solidity: {
    version: "0.8.7", // 合约编译的版本，必填
    settings: { // 编译设置，选填
      optimizer: {  // 优化设置
        enabled: true,
        runs: 200
      }
    }
  },
  // 项目路径配置，可指定任意路径，但下列是常用的一种结构
  // sources, tests, scripts 下的目录文件会被自动逐一执行
  paths: {
    sources: "./contracts", // 合约目录
    tests: "./test",  // 测试文件目录
    cache: "./cache", // 缓存目录，由hardhat自动生成
    artifacts: "./artifacts" // 编译结果目录，由hardhat自动生成
  },
  // 测试框架设置
  mocha: {
    timeout: 20000  // 运行单元测试的最大等待时间
  }
}
