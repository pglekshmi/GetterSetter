// import Web3 from "web3";
import { useState } from 'react';
// const Hello = require("./abi/Hello.json")

function App() {

  const [inputMsg, setInputMsg] = useState({});
  const [outputMsg, setOutPutMsg] = useState();



  function msgHandler(event) {
    setInputMsg(event.target.value);
    console.log("Input Msg:", event.target.value)
  }

  async function setValue() {
    // let accounts = await ethereum.request({ method: "eth_requestAccounts" });
    // console.log(accounts);
    const response = await fetch('http://127.0.0.1:8000/receive', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({inputMsg})
    })
    console.log(response);

  };

  async function getValue() {
    // const data = await myContract.methods.getMessage().call();
    // setOutPutMsg(data);
    const result = await fetch('http://127.0.0.1:8000/provide');
    const data = await result.json();
    console.log(data);
    setOutPutMsg(data)
    console.log(outputMsg);
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen text-center">
      <p className="font-bold text-2xl py-4" id="greetingTxt">Sample Dapp</p>

      <p className="font-bold text-xl py-4" id="greetingTxt">Set Message</p>
      <input type="text" onChange={msgHandler} placeholder="Enter Message Value" className="border border-gray-400 py-2 px-6 rounded" /> <br />
      <button onClick={setValue} className="border border-gray-600 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded">
        Set
      </button>
      <p className="font-bold text-xl py-4" id="greetingTxt">Get Message</p>
      <button onClick={getValue} className="border border-gray-600 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded">
        Get
      </button>
      <p className="font-bold text-m py-4" id="greetingTxt">{outputMsg}</p>
    </div>
  );
}

export default App;