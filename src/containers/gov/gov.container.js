import React from 'react';

import {connect} from 'react-redux';
import {showForm} from '../../actions';

import { CommonHeader } from '../../components/header/commonHeader.component';

export class GovPage extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    handleClick() {
        this.props.onShowForm();
    }

    render() {
        console.log('props', this.props);

        if (this.props.gov.form) {
            return (
                <div className="mainContainer">
                    <CommonHeader title={'Goverment'} />
                    <div className="w-50 formContainer">
                        <ul className="formItems">
                            <li className="formItemStyle">
                                <label htmlFor="contractTitle" className="w-150">Title: </label>
                                <input type="text" id="contractTitle" placeholder="'Teaching English'"/>
                            </li>
                            <li className="formItemStyle">
                                <label htmlFor="contractDescription" className="w-150">Description: </label>
                                <input type="text" id="contractDescription" placeholder="'Teaching English so they can pass the test'"/>
                            </li>
                            <li className="formItemStyle">
                                <label htmlFor="contractValidate" className="w-150">How to validate: </label>
                                <input type="text" id="contractValidate" placeholder="'Passing the test'"/>
                            </li>
                            <li className="formItemStyle">
                                <label htmlFor="contractValueStudent" className="w-150">Value Student: </label>
                                <input type="text" id="contractValueStudent" placeholder="'Student earnings'"/>
                            </li>
                            <li className="formItemStyle">
                                <label htmlFor="contractValueTeacher" className="w-150">Value Teacher: </label>
                                <input type="text" id="contractValueTeacher" placeholder="'Teacher earnings'"/>
                            </li>
                            <li className="formItemStyle">
                                <input type="submit" value="Submit"/>
                            </li>
                        </ul>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="mainContainer">
                    <CommonHeader title={'Goverment'} />
                    <div className="w-50 formContainer">
                        <button onClick={this.handleClick.bind(this)}>Add</button>
                    </div>
                </div>
            );
        }
    }
}

const stateToProps = (state) => {
    return {
        gov: state.gov || {}
    };
};

const dispatchToProps = (dispatch) => {
    return {
        onShowForm: (...args) => dispatch(showForm(...args))
    };
};

export const GovPageContainer = connect(stateToProps, dispatchToProps)(GovPage);

export default GovPageContainer;

// export function GovContainer(props) {
//     function handleClick() {
//         console.log('clicked');
//     }

//     if (props.form) {
//         return (
//             <div className="mainContainer">
//                 works!
//             </div>
//         );
//     } else {
//         return (
//             <div className="mainContainer">
//                 <CommonHeader title={'Goverment'} />
//                 <div className="w-50 formContainer">
//                     <button onClick={handleClick}>Add</button>
//                 </div>
//             </div>
//         );
//     }
// }

// export default GovContainer;
