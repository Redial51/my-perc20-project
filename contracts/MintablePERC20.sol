// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "./PERC20.sol";

contract MintablePERC20 is PERC20 {

    constructor(string memory name_, string memory symbol_)
        PERC20(name_, symbol_)
    {}

    // Публичная функция для вызова _mint
    function mint(address account, uint256 amount) external {
        _mint(account, amount);
    }
}
