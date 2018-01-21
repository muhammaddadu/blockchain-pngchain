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
        case 'CURRICULUM_LOADED':
            return {...state, ...{
                curriculum: action.data
            }};
        case 'CURRICULUM_INFO_LOADED':
            return {...state, ...{
                curriculumInfo: action.data
            }};
        default:
            return state;
    }
};
