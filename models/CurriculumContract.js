/**
 * Contract Model
 */
const clout = require('clout-js');

const web3 = clout.module.web3;
const fs = require('fs');
const path = require('path');
const solc = require('solc');

const mongoose = clout.mongoose;

const REQUIRED_PARAMS = ['contractAddress','title','description','validationMethod','teacherReward','studentReward'];

let CurriculumContractSource = fs.readFileSync(path.join(__dirname, `solidity/CurriculumContract.sol`), 'utf8');
let PNGTokenSource = fs.readFileSync(path.join(__dirname, `solidity/PNGToken.sol`), 'utf8');
let LearnerContractSource = fs.readFileSync(path.join(__dirname, `solidity/LearnerContract.sol`), 'utf8');
let contractCompiled = solc.compile({
	sources: {
        'CurriculumContractSource.sol': CurriculumContractSource,
        'LearnerContract.sol': LearnerContractSource,
        'PNGToken.sol': PNGTokenSource
	}
}, 1).contracts['CurriculumContractSource.sol:CurriculumContract'];

let Contract = mongoose.model('Curriculum', {
    contractAddress: String,
    title: String,
    description: String,
    validationMethod: String,
    teacherReward: String,
    studentReward: String
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
