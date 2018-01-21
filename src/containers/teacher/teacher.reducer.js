/**
 * Header reducer
 */

export function teacherReducer(state={}, action) {
    switch (action.type) {
        case 'SHOW_TEACHER_SPINNER':
            return {...state, ...{
                spinner: true
            }};
        case 'TEACHER_DONE':
            return {...state, ...{
                done: true
            }};
        default:
            return state;
    }
};
