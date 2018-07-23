const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const {interface,bytecode} = require('./compile.js');

const provider = new HDWalletProvider(
  'slogan tobacco angry capable scene senior rabbit drop camera ripple income swing',
  'https://rinkeby.infura.io/v3/f8ad46d404124919926cf5d925a939a6'
);

const web3 = new Web3(provider);

const deploy = async () =>{
  const accounts = await web3.eth.getAccounts();
  console.log(accounts);
  console.log('Contract is deployed by the manager with address ', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
  .deploy({data : '0x' + bytecode})
  .send({gas : '2000000', from : accounts[0]})

  console.log('Contract deployed to address', result.options.address);
  // 0x6d3B5ec926A87224681dDe826cd16735d4709920
}


deploy();
