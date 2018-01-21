import React from 'react';

import {connect} from 'react-redux';

import {showStudentSpinner, studentDone, studentSubmitRequest} from '../../actions';

import { CommonHeader } from '../../components/header/commonHeader.component';

export class TeacherPage extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    handleClick() {
        this.props.onStudentSubmitRequest();
    }

    render() {
        if(this.props.student.done) {
            return (
                <div className="mainContainer">
                    <CommonHeader title={'Student'} />
                    <div className="w-50 formContainer text-center">
                        Student contract created
                    </div>
                </div>
            );
        }
        else if (this.props.student.spinner) {
            return (
                <div className="mainContainer">
                    <CommonHeader title={'Student'} />
                    <div className="w-50 formContainer">
                        <div className="spinner"></div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="mainContainer">
                    <CommonHeader title={'Student'} />
                    <div className="w-50 formContainer">
                        <ul className="formItems">
                            <li className="formItemStyle">
                                <label htmlFor="studentContract" className="w-150">Teaching contract: </label>
                                <div id="studentContract" className="w-175 m-05rem">Contract name</div>
                            </li>
                            <li className="formItemStyle">
                                <label htmlFor="studentID" className="w-150">Student ID: </label>
                                <input type="text" id="studentID" placeholder="'Student ID'" className="w-175"/>
                            </li>
                            <li className="formItemStyle">
                                <label htmlFor="studentCA" className="w-150">CA ID: </label>
                                <input type="text" id="studentCA" placeholder="'CA ID'" className="w-175"/>
                            </li>
                            <li className="formItemStyle">
                                <input type="submit" value="Submit" onClick={this.handleClick.bind(this)}/>
                            </li>
                        </ul>
                    </div>
                </div>
            );
        }
    }
}

const stateToProps = (state) => {
    return {
        student: state.student || {}
    };
};

const dispatchToProps = (dispatch) => {
    return {
        onShowStudentSpinner: (...args) => dispatch(showStudentSpinner(...args)),
        onStudentDone: (...args) => dispatch(studentDone(...args)),
        onStudentSubmitRequest: (...args) => dispatch(studentSubmitRequest(...args)),
    };
};

export const TeacherPageContainer = connect(stateToProps, dispatchToProps)(TeacherPage);

export default TeacherPageContainer;

// export function StudentContainer(props) {
//     return (
//         <div className="mainContainer">
//             <CommonHeader title={'Student'} />
//             <div className="w-50 formContainer">
//                 <ul className="formItems">
//                     <li className="formItemStyle">
//                         <label htmlFor="studentContract" className="w-150">Teaching contract: </label>
//                         <div id="studentContract" className="w-175 m-05rem">Contract name</div>
//                     </li>
//                     <li className="formItemStyle">
//                         <label htmlFor="studentID" className="w-150">Student ID: </label>
//                         <input type="text" id="studentID" placeholder="'Student ID'" className="w-175"/>
//                     </li>
//                     <li className="formItemStyle">
//                         <label htmlFor="studentCA" className="w-150">CA ID: </label>
//                         <input type="text" id="studentCA" placeholder="'CA ID'" className="w-175"/>
//                     </li>
//                     <li className="formItemStyle">
//                         <input type="submit" value="Submit"/>
//                     </li>
//                 </ul>
//             </div>
//         </div>
//     );
// }

// export default StudentContainer;
