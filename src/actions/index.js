import certActions from '../containers/cert/cert.action';
import govActions from '../containers/gov/gov.action';
import headerActions from '../components/header/header.action';
import studentActions from '../containers/student/student.action';
import teacherActions from '../containers/teacher/teacher.action';

import config from '../config';
import api from '../api';

function createAction(actionType) {
    return data => {
        let action = {type: actionType};
        if (typeof data !== 'undefined') {
            action.data = data;
        }
        return action;
    }
}

export const showGraduation = createAction(certActions.SHOW_GRADUATION);
export const showGradingMessage = createAction(certActions.SHOW_GRADING_MSG);

export const showForm = createAction(govActions.SHOW_FORM);
export const showSpinner = createAction(govActions.SHOW_SPINNER);
export const govDone = createAction(govActions.GOV_DONE);
export const govSubmitRequest = govActions.govSubmitRequest;

export const setStyle = createAction(headerActions.SET_STYLE);

export const showStudentSpinner = createAction(studentActions.SHOW_STUDENT_SPINNER);
export const studentDone = createAction(studentActions.STUDENT_DONE);
export const studentSubmitRequest = (data) => {
    return (dispatch) => {
        dispatch(showStudentSpinner(data));
        setTimeout(() => dispatch(studentDone(data)), 2000);
    };
};

export const showTeacherSpinner = createAction(teacherActions.SHOW_TEACHER_SPINNER);
export const teacherDone = createAction(teacherActions.TEACHER_DONE);
export const teacherSubmitRequest = teacherActions.teacherSubmitRequest;

/**
 * PNGToken Actions
 */
export const pNGTokensAdded = createAction('PNG_TOKENS_ADDED');

export const addPNGTokens = (data) => {
    return (dispatch) => {
        let currentAccount = web3.eth.accounts[0];
        let Contract = window.PNGToken;
        let myContract = Contract.at(config.PNGTokenContractAddress);
        let amount = data.amount || 1;

        dispatch(showSpinner());

        myContract.approveAndCall(data.contractAddress, amount, null, {
            from: currentAccount
        }, (err, transactionHash) => {
            if (err) { alert(err); }

            function getAddress() {
                web3.eth.getTransactionReceipt(transactionHash, (err, info) => {
                    if (err) { console.log(err); }
                    if (!info || !info.blockHash) { return; }

                    clearInterval(getAddress);
                    dispatch(loadCurriculumInfo(data));
                    dispatch(pNGTokensAdded());
                });
            }

            setInterval(getAddress, 2000);
        });
    };
}

/**
 * Curriculum Actions
 */
export const curriculumLoaded = createAction('CURRICULUM_LOADED');
export const curriculumInfoLoaded = createAction('CURRICULUM_INFO_LOADED');

export const loadCurriculum = (data) => {
    return (dispatch) => {
        api.curriculum.getAll()
            .then((data) => {
                dispatch(curriculumLoaded(data));
            });
    }
}

export const loadCurriculumInfo = (_data) => {
    return (dispatch) => {
        let data = Object.assign({}, _data);
        let Contract = window.CurriculumContract;
        let myContract = Contract.at(data.contractAddress);
        let contractFields = ['budget', 'budgetUsed', 'description', 'maintainer', 'title', 'validationMethod'];
        let responsesWanted = contractFields.length;
        
        contractFields.forEach((key) => {
            myContract[key]((err, value) => {
                if (err) { alert(err); }
                data[key] = value;
                responsesWanted--;
                if (responsesWanted === 0) {
                    dispatch(curriculumInfoLoaded(data));
                }
            });
        });
    }
}

/**
 * Learner Actions
 */
export const learnerLoaded = createAction('LEARNER_LOADED');
export const learnerInfoLoaded = createAction('LEARNER_INFO_LOADED');

export const loadLearner = (data) => {
    return (dispatch) => {
        api.curriculum.getAll()
            .then((data) => {
                dispatch(learnerLoaded(data));
            });
    }
}

export const loadLearnerInfo = (_data) => {
    return (dispatch) => {
        let data = Object.assign({}, _data);
        let Contract = window.LearnerContract;
        let myContract = Contract.at(data.contractAddress);
        let contractFields = ['passed', 'hasBeenTested'];
        let responsesWanted = contractFields.length;
        
        contractFields.forEach((key) => {
            myContract[key]((err, value) => {
                if (err) { alert(err); }
                data[key] = value;
                responsesWanted--;
                if (responsesWanted === 0) {
                    dispatch(learnerInfoLoaded(data));
                }
            });
        });
    }
}