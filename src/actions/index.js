import certActions from '../containers/cert/cert.action';
import govActions from '../containers/gov/gov.action';
import headerActions from '../components/header/header.action';
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

export const showForm = createAction(govActions.SHOW_FORM);
export const showSpinner = createAction(govActions.SHOW_SPINNER);
export const govDone = createAction(govActions.GOV_DONE);
export const govSubmitRequest = govActions.govSubmitRequest;

export const setStyle = createAction(headerActions.SET_STYLE);

export const showTeacherSpinner = createAction(teacherActions.SHOW_TEACHER_SPINNER);
export const teacherDone = createAction(teacherActions.TEACHER_DONE);
export const teacherSubmitRequest = (data) => {
    return (dispatch) => {
        dispatch(showTeacherSpinner(data));
        setTimeout(() => dispatch(teacherDone(data)), 2000);
    };
};

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
        }, (err, address) => {
            if (err) { alert(err); }
            dispatch(loadCurriculumInfo(data));
            dispatch(pNGTokensAdded());
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