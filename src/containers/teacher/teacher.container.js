import React from 'react';

import { CommonHeader } from '../../components/header/commonHeader.component';

export function TeacherContainer(props) {
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
                        <label htmlFor="teacherPassedContainer" className="w-150">Value Teacher: </label>
                        <div id="teacherPassedContainer" className="w-175 checkboxContainer">
                            <input type="checkbox" id="teacherPassed"/>
                        </div>
                    </li>
                    <li className="formItemStyle">
                        <input type="submit" value="Submit"/>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default TeacherContainer;
