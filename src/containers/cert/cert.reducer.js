/**
 * Header reducer
 */

export function certReducer(state={}, action) {
    switch (action.type) {
        case 'SHOW_GRADUATION':
            return {...state, ...{
                graduation: true
            }};
        default:
            return state;
    }
};
