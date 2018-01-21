/**
 * Contract Model
 */
const clout = require('clout-js');

const web3 = clout.module.web3;
const fs = require('fs');
const path = require('path');
const solc = require('solc');

let contractSource = fs.readFileSync(path.join(__dirname, `solidity/LearnerContract.sol`), 'utf8');
let contractCompiled = solc.compile({
	sources: {
		'Contract.sol': contractSource
	}
}, 1).contracts['Contract.sol:LearnerContract'];

module.exports = {
    contractCompiled
};
