/**
 * Header reducer
 */

export function studentReducer(state={}, action) {
    switch (action.type) {
        case 'SHOW_STUDENT_SPINNER':
            return {...state, ...{
                spinner: true
            }};
        case 'STUDENT_DONE':
            return {...state, ...{
                done: true
            }};
        default:
            return state;
    }
};
