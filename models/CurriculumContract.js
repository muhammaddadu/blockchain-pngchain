/**
 * Contract Model
 */
const clout = require('clout-js');

const web3 = clout.module.web3;
const fs = require('fs');
const path = require('path');
const solc = require('solc');

let CurriculumContractSource = fs.readFileSync(path.join(__dirname, `solidity/CurriculumContract.sol`), 'utf8');
let PNGTokenSource = fs.readFileSync(path.join(__dirname, `solidity/PNGToken.sol`), 'utf8');
let LearnerContractSource = fs.readFileSync(path.join(__dirname, `solidity/LearnerContract.sol`), 'utf8');
let contractCompiled = solc.compile({
	sources: {
        'CurriculumContractSource.sol': CurriculumContractSource,
        'LearnerContract.sol': LearnerContractSource,
        'PNGToken.sol': PNGTokenSource
	}
}, 1).contracts['Contract.sol:LearnerContract'];

module.exports = {
    contractCompiled
};
