/**
 * Header reducer
 */

export function govReducer(state={}, action) {
    switch (action.type) {
        case 'SHOW_FORM':
            return {...state, ...{
                form: true
            }};
        default:
            return state;
    }
};
