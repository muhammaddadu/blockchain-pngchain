import React from 'react';

import {connect} from 'react-redux';

import {showTeacherSpinner, teacherDone, teacherSubmitRequest} from '../../actions';

import { CommonHeader } from '../../components/header/commonHeader.component';

export class TeacherPage extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    handleClick() {
        this.props.onTeacherSubmitRequest();
    }

    render() {
        if(this.props.teacher.done) {
            return (
                <div className="mainContainer">
                    <CommonHeader title={'Teacher'} />
                    <div className="w-50 formContainer text-center">
                        Teacher contract created
                    </div>
                </div>
            );
        }
        else if (this.props.teacher.spinner) {
            return (
                <div className="mainContainer">
                    <CommonHeader title={'Teacher'} />
                    <div className="w-50 formContainer">
                        <div className="spinner"></div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="mainContainer">
                    <CommonHeader title={'Teacher'} />
                    <div className="w-50 formContainer">
                        <ul className="formItems">
                            <li className="formItemStyle">
                                <label htmlFor="teacherContract" className="w-150">Teaching contract: </label>
                                <select name="teacherContract" id="teacherContract" className="w-175">
                                    <option value="0">Contract 1</option>
                                    <option value="1">Contract 2</option>
                                    <option value="2">Contract 3</option>
                                    <option value="3">Contract 4</option>
                                </select>
                            </li>
                            <li className="formItemStyle">
                                <label htmlFor="teacherStudentAddress" className="w-150">Student Address: </label>
                                <input type="text" id="teacherStudentAddress" placeholder="'Student Address'" className="w-175"/>
                            </li>
                            <li className="formItemStyle">
                                <label htmlFor="teacherAddress" className="w-150">Teacher Address: </label>
                                <input type="text" id="teacherAddress" placeholder="'Teacher Address'" className="w-175"/>
                            </li>
                            <li className="formItemStyle">
                                <label htmlFor="teacherCertAddress" className="w-150">Cert Address: </label>
                                <input type="text" id="teacherCertAddress" placeholder="'Cert Address'" className="w-175"/>
                            </li>
                            <li className="formItemStyle">
                                <label htmlFor="teacherPassedContainer" className="w-150">Passed: </label>
                                <div id="teacherPassedContainer" className="w-175 checkboxContainer">
                                    <input type="checkbox" id="teacherPassed"/>
                                </div>
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
        teacher: state.teacher || {}
    };
};

const dispatchToProps = (dispatch) => {
    return {
        onShowTeacherSpinner: (...args) => dispatch(showTeacherSpinner(...args)),
        onTeacherDone: (...args) => dispatch(teacherDone(...args)),
        onTeacherSubmitRequest: (...args) => dispatch(teacherSubmitRequest(...args)),
    };
};

export const TeacherPageContainer = connect(stateToProps, dispatchToProps)(TeacherPage);

export default TeacherPageContainer;
