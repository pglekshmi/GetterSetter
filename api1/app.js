import { Contract, JsonRpcProvider ,Wallet } from "ethers";
import details from "./src/detail.json" assert { type: "json" };
// import Storage from "./src/contracts/Storage.sol/Storage.json" assert { type: "json" };
// import { json } from "express";
import dotenv from 'dotenv';

dotenv.config();

// const privateKey ="a0c31158006908f97b3bbc916063c1712e7357749f2c0445b4adba68a14ffe83"
const provider = new JsonRpcProvider("https://eth-sepolia.g.alchemy.com/v2/0loLZZe_TDjy-9X1wy9MobmDvCaj23jT");
console.log(details.deployer);
// const signer =  provider.getSigner(details.deployer);
// const wallet =new Wallet(privateKey,provider);
const wallet =new Wallet(process.env.private_key,provider);
const instance = new Contract(details.contract_address, details.abi, wallet);


export default instance;