import headerActions from '../components/header/header.action';
import govActions from '../containers/gov/gov.action';
import certActions from '../containers/cert/cert.action';

function createAction(actionType) {
    return data => {
        let action = {type: actionType};
        if (typeof data !== 'undefined') {
            action.data = data;
        }
        return action;
    }
}

export const setStyle = createAction(headerActions.SET_STYLE);

export const showForm = createAction(govActions.SHOW_FORM);
export const showSpinner = createAction(govActions.SHOW_SPINNER);
export const govDone = createAction(govActions.GOV_DONE);

export const showGraduation = createAction(certActions.SHOW_GRADUATION);
