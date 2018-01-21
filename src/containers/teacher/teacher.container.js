import React from 'react';

import {connect} from 'react-redux';

import {showTeacherSpinner, teacherDone, teacherSubmitRequest, loadCurriculum} from '../../actions';

import { CommonHeader } from '../../components/header/commonHeader.component';

export class TeacherPage extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;

        this.state = {
            contractAddress: null,
            teacherAddress: '0x0F3E2B805DD942353A52E9DD22D0078a168697c2',
            studentAddress: '0x25b8e885C968DbA4D5D0208879D583F60a5e2DED',
            certAddress: '0x1320ae9c2945c03c9c5298f3604c7b7407d039b5'
        };
    }

    handleInputChange(type) {
        return (evt) => {
            this.state[type] = evt.target.value;
        }
    }
    
    componentWillMount() {
        this.props.onLoadCurriculum();
    }

    handleClick() {
        this.props.onTeacherSubmitRequest(this.state);
    }

    createSelectOptions() {
        let curriculum = this.props.teacher.curriculum || [];
        if (curriculum.length !== 0 && !this.state.contractAddress) {
            this.state.contractAddress = curriculum[0].contractAddress;
        }

        let items = curriculum.map((item, key) => (
            <option key={key} value={item.contractAddress}>{item.title}</option>
        ));

        return items;
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
                                <select name="teacherContract" id="teacherContract" className="w-175" onChange={this.handleInputChange('contractAddress')}>
                                    {this.createSelectOptions()}
                                </select>
                            </li>
                            <li className="formItemStyle">
                                <label htmlFor="teacherStudentAddress" className="w-150">Student Address: </label>
                                <input type="text" id="teacherStudentAddress" onChange={this.handleInputChange('studentAddress')} defaultValue={this.state.studentAddress} placeholder="'Student Address'" className="w-175"/>
                            </li>
                            <li className="formItemStyle">
                                <label htmlFor="teacherAddress" className="w-150">Teacher Address: </label>
                                <input type="text" id="teacherAddress" onChange={this.handleInputChange('teacherAddress')} defaultValue={this.state.teacherAddress} placeholder="'Teacher Address'" className="w-175"/>
                            </li>
                            <li className="formItemStyle">
                                <label htmlFor="teacherCertAddress" className="w-150">Cert Address: </label>
                                <input type="text" id="teacherCertAddress" onChange={this.handleInputChange('certAddress')} defaultValue={this.state.certAddress} placeholder="'Cert Address'" className="w-175"/>
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
        onLoadCurriculum: (...args) => dispatch(loadCurriculum(...args))
    };
};

export const TeacherPageContainer = connect(stateToProps, dispatchToProps)(TeacherPage);

export default TeacherPageContainer;
