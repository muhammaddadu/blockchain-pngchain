import React from 'react';

import { CommonHeader } from '../../components/header/commonHeader.component';

export function StudentContainer(props) {
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
                        <input type="submit" value="Submit"/>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default StudentContainer;
