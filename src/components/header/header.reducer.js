/**
 * Header reducer
 */

export function headerReducer(state={}, action) {
    switch (action.type) {
        case 'SET_STYLE':
            return {...state, ...{
                style: action.data
            }};
        default:
            return state;
    }
};
