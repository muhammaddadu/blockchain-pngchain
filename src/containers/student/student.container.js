import React from 'react';

import { CommonHeader } from '../../components/header/commonHeader.component';

export function StudentContainer(props) {
    return (
        <div className="mainContainer">
            <CommonHeader title={'Student'} />
        </div>
    );
}

export default StudentContainer;
