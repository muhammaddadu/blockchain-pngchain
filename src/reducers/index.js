import { certReducer } from '../containers/cert/cert.reducer';
import { govReducer } from '../containers/gov/gov.reducer';
import { headerReducer } from '../components/header/header.reducer';
import { teacherReducer } from '../containers/teacher/teacher.reducer';
import { studentReducer } from '../containers/student/student.reducer';


export default {
    header: headerReducer,
    gov: govReducer,
    cert: certReducer,
    teacher: teacherReducer,
    student: studentReducer
};
