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
        case 'CURRICULUM_LOADED':
            return {...state, ...{
                curriculum: action.data
            }};
        case 'CURRICULUM_INFO_LOADED':
            return {...state, ...{
                curriculumInfo: action.data
            }};
        case 'LEARNER_LOADED':
            return {...state, ...{
                learner: action.data
            }};
        case 'LEARNER_INFO_LOADED':
            return {...state, ...{
                learner: action.data
            }};
        case 'PNG_TOKENS_ADDED':
            return {...state, ...{
                spinner: false
            }};
        default:
            return state;
    }
};
