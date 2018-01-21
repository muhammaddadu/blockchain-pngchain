/**
 * Header reducer
 */

export function govReducer(state={}, action) {
    switch (action.type) {
        case 'SHOW_FORM':
            return {...state, ...{
                form: true
            }};
        case 'SHOW_SPINNER':
            return {...state, ...{
                spinner: true
            }};
        case 'GOV_DONE':
            return {...state, ...{
                done: true
            }};
        default:
            return state;
    }
};
