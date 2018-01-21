/**
 * Contract Model
 */
const clout = require('clout-js');

const web3 = clout.module.web3;
const fs = require('fs');
const path = require('path');
const solc = require('solc');

let contractSource = fs.readFileSync(path.join(__dirname, `solidity/PNGToken.sol`), 'utf8');
let contractCompiled = solc.compile({
	sources: {
		'PNGToken.sol': contractSource
	}
}, 1).contracts['PNGToken.sol:PNGToken'];

module.exports = {
    contractCompiled
};
