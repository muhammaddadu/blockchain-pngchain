import certActions from '../containers/cert/cert.action';
import govActions from '../containers/gov/gov.action';
import headerActions from '../components/header/header.action';
import studentActions from '../containers/student/student.action';
import teacherActions from '../containers/teacher/teacher.action';


function createAction(actionType) {
    return data => {
        let action = {type: actionType};
        if (typeof data !== 'undefined') {
            action.data = data;
        }
        return action;
    }
}

export const showGraduation = createAction(certActions.SHOW_GRADUATION);

export const showForm = createAction(govActions.SHOW_FORM);
export const showSpinner = createAction(govActions.SHOW_SPINNER);
export const govDone = createAction(govActions.GOV_DONE);
export const govSubmitRequest = (data) => {
    console.log(data);
    return (dispatch) => {
        dispatch(showSpinner(data));
        setTimeout(() => dispatch(govDone(data)), 2000);
    };
};

export const setStyle = createAction(headerActions.SET_STYLE);

export const showStudentSpinner = createAction(studentActions.SHOW_STUDENT_SPINNER);
export const studentDone = createAction(studentActions.STUDENT_DONE);
export const studentSubmitRequest = (data) => {
    return (dispatch) => {
        dispatch(showStudentSpinner(data));
        setTimeout(() => dispatch(studentDone(data)), 2000);
    };
};

export const showTeacherSpinner = createAction(teacherActions.SHOW_TEACHER_SPINNER);
export const teacherDone = createAction(teacherActions.TEACHER_DONE);
export const teacherSubmitRequest = (data) => {
    return (dispatch) => {
        dispatch(showTeacherSpinner(data));
        setTimeout(() => dispatch(teacherDone(data)), 2000);
    };
};