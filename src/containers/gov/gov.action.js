import config from '../../config';
import api from '../../api';
import {showSpinner, govDone} from '../../actions';

export default {
    SHOW_FORM: 'SHOW_FORM',
    SHOW_SPINNER: 'SHOW_SPINNER',
    GOV_DONE: 'GOV_DONE',
    govSubmitRequest(data) {
        return (dispatch) => {
            dispatch(showSpinner(data));
            let currentAccount = web3.eth.accounts[0];
            let compiledContract = window.curriculumContractCompiled;
            let bytecode = compiledContract.bytecode;
            let Contract = window.CurriculumContract;

            new Promise((resolve, reject) => {
                web3.eth.estimateGas({data: bytecode}, (err, gasEstimate) => {
                    if (err) { return reject(err); }
                    resolve(gasEstimate);
                });
            })
            .then((gasEstimate) => {
                return new Promise((resolve, reject) => {
                    let newContractMetadata = {
                        from: currentAccount,
                        data: bytecode,
                        gas: gasEstimate * 2,
                        gasPrice: 30000000000
                    };
                    Contract.new(
                        config.PNGTokenContractAddress,
                        data.contractTitle,
                        data.contractDescription,
                        data.contractValidate,
                        data.contractValueStudent,
                        data.contractValueTeacher,
                        newContractMetadata,
                    (err, contractInfo) => {
                        if (err) { reject(err) }
                        if (contractInfo.address) {
                            return resolve({ contractAddress: contractInfo.address });
                        }

                        let interval;

                        function getAddress() {
                            web3.eth.getTransactionReceipt(contractInfo.transactionHash, (err, info) => {
                                if (!info || !info.contractAddress) { return; }

                                clearInterval(interval);
                                return resolve(info);
                            });
                        }

                        interval = setInterval(getAddress, 2000);
                    });
                });
            })
            .then((contractInfo) => {
                return api.curriculum.create({
                    contractAddress: contractInfo.contractAddress,
                    title: data.contractTitle,
                    description: data.contractDescription,
                    validationMethod: data.contractValidate,
                    teacherReward: data.contractValueStudent,
                    studentReward: data.contractValueTeacher
                });
            })
            .then(() => dispatch(govDone(data)))
            .catch((err) => alert(err));
        };
    }
};
