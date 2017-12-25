import headerActions from '../components/header/header.action';

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
