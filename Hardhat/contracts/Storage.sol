// SPDX-License-Identifier: GPL-3.0
//SPDX-License-Idenifier:MIT;
pragma solidity 0.8.19;

/**
 * @title Storage
 * @dev Store & retrieve value in a variable
 * @custom:dev-run-script ./scripts/deploy_with_ethers.ts
 */
contract Storage {

    string number;

    /*
     * @dev Store value in variable
     * @param num value to store
     */
     
    function store(string memory num) public  {
        
        
        number = num;
    }
   

    /*
     * @dev Return value 
     * @return value of 'number'
     */
    function retrieve() public view returns (string memory){
        return number;
    }
}