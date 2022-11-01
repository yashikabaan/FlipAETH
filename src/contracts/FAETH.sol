// SPDX-License-Identifier: None
pragma solidity ^0.8;

contract FAETH {
    int public count;
    int public heads;
    int public tails;
    uint256 temp;

    function random() private view returns (uint) {
        return uint(keccak256(abi.encodePacked(block.difficulty, block.timestamp,count)));
    }

    constructor() {        
        count = 0;
        heads = 0;
        tails = 0;
    }

    function flip() external returns (uint256)  {
        count = count + 1;
        temp = random() % 2;
        if( temp == 0) {
            heads = heads + 1;
        } else {
            tails = tails + 1;
        }
        return temp;
    }
}
