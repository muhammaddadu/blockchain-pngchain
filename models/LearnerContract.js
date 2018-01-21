/**
 * Contract Model
 */
const clout = require('clout-js');

const web3 = clout.module.web3;
const fs = require('fs');
const path = require('path');
const solc = require('solc');

const mongoose = clout.mongoose;

const REQUIRED_PARAMS = ['contractAddress', 'curriculumContract', 'teacher', 'student'];

let contractSource = fs.readFileSync(path.join(__dirname, `solidity/LearnerContract.sol`), 'utf8');
let PNGTokenSource = fs.readFileSync(path.join(__dirname, `solidity/PNGToken.sol`), 'utf8');
let contractCompiled = solc.compile({
	sources: {
		'Contract.sol': contractSource,
		'PNGToken.sol': PNGTokenSource
	}
}, 1).contracts['Contract.sol:LearnerContract'];

let Contract = mongoose.model('Learner', {
	contractAddress: String,
	curriculumContract: String,
	teacher: String,
	student: String
});

module.exports = Contract;

Contract.contractCompiled = contractCompiled;

Contract.getAll = function () {
	return Contract.find({}).exec();
}

Contract.create = function (params) {
	let missingParams;

	REQUIRED_PARAMS.forEach((key) => {
		if (typeof params[key] === 'undefined') {
			missingParams = true;
		}
	});

	if (missingParams) {
		return Promise.reject('Parameters are missing');
	}

	let contract = new Contract(params);
	return contract.save();
};
