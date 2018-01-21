/**
 * Header reducer
 */

export function certReducer(state={}, action) {
    switch (action.type) {
        case 'SHOW_GRADUATION':
            return {...state, ...{
                graduation: true
            }};
        case 'SHOW_GRADING_MSG':
            return {...state, ...{
                done: true
            }};
        default:
            return state;
    }
};
