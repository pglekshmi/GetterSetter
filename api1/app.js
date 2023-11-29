import { Contract, JsonRpcProvider } from "ethers";
import details from "./src/details.json" assert { type: "json" };
import Storage from "./src/contracts/Storage.sol/Storage.json" assert { type: "json" };

const provider = new JsonRpcProvider("http://127.0.0.1:8545");
const signer = await provider.getSigner(details.deployer);

const instance = new Contract(details.contract_address, Storage.abi, signer);

export default instance;