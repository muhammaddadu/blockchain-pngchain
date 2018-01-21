import {showTeacherSpinner, teacherDone} from '../../actions';
import api from '../../api';

export default {
    SHOW_TEACHER_SPINNER: 'SHOW_TEACHER_SPINNER',
    TEACHER_DONE: 'TEACHER_DONE',
    teacherSubmitRequest(data) {
        let currentAccount = web3.eth.accounts[0];
        let contract = CurriculumContract.at(data.contractAddress);

        return (dispatch) => {
            dispatch(showTeacherSpinner());


            new Promise((resolve, reject) => {
                contract.createLearnerContract(data.teacherAddress, data.studentAddress, {
                    from: currentAccount
                }, function (err, transactionHash) {
                    if (err) { return reject(err); }
                    resolve(transactionHash);
                });
            })
            .then((transactionHash) => {
                return new Promise((resolve, reject) => {
                    return web3.eth.getTransactionReceipt(transactionHash, (err, info) => {
                        if (err) { return reject(err); }
                        let interval;

                        function getAddress() {
                            web3.eth.getTransactionReceipt(transactionHash, (err, info) => {
                                if (err) { console.log(err); }
                                if (!info || !info.blockHash) { return; }
        
                                clearInterval(interval);
                                resolve(info.blockHash);
                            });
                        }
        
                        interval = setInterval(getAddress, 2000);
                    });
                });
            })
            .then((blockHash) => {
                return api.learner.create({
                    contractAddress: blockHash,
                    curriculumContract: data.contractAddress,
                    teacher: data.teacherAddress,
                    student: data.studentAddress
                });
            })
            .then(() => dispatch(teacherDone()))
            .catch((err) => console.log(err));
        };
    }
};
