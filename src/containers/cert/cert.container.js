import React from 'react';

import {connect} from 'react-redux';
import {showGraduation, showGradingMessage} from '../../actions';

import { CommonHeader } from '../../components/header/commonHeader.component';

export class CertPage extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    handleClick() {
        this.props.onShowGraduation();
    }

    handleGradingClick() {
        this.props.onShowGradingMessage();
    }

    render() {
        if (this.props.cert.done) {
            return (
                <div className="mainContainer">
                    <CommonHeader title={'Certification Authority'} />
                    <div className="w-50 formContainer text-center">
                        Test successfully graded
                    </div>
                </div>
            );
        } else if (this.props.cert.graduation) {
            return (
                <div className="mainContainer">
                    <CommonHeader title={'Certification Authority'} />
                    <div className="w-50 formContainer">
                        <ul className="formItems">
                            <li className="formItemStyle">
                                Test to review
                            </li>
                            <li className="formItemStyle">
                                <input type="submit" value="Pass" className="gradeButton" onClick={this.handleGradingClick.bind(this)}/>
                                <input type="submit" value="Fail" className="gradeButton" onClick={this.handleGradingClick.bind(this)}/>
                            </li>
                        </ul>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="mainContainer">
                    <CommonHeader title={'Certification Authority'} />
                    <div className="w-50 formContainer">
                        <ul className="formItems">
                            <li className="formItemStyle">
                                <label htmlFor="certContract" className="w-150">Teaching contract: </label>
                                <select name="certContract" id="certContract" className="w-175">
                                    <option value="0">Contract 1</option>
                                    <option value="1">Contract 2</option>
                                    <option value="2">Contract 3</option>
                                    <option value="3">Contract 4</option>
                                </select>
                            </li>
                            <li className="formItemStyle">
                                <input type="submit" value="Select" onClick={this.handleClick.bind(this)}/>
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
        cert: state.cert || {}
    };
};

const dispatchToProps = (dispatch) => {
    return {
        onShowGraduation: (...args) => dispatch(showGraduation(...args)),
        onShowGradingMessage: (...args) => dispatch(showGradingMessage(...args)),
    };
};

export const CertPageContainer = connect(stateToProps, dispatchToProps)(CertPage);

export default CertPageContainer;

// export function CertContainer(props) {
//     return (
//         <div className="mainContainer">
//             <CommonHeader title={'Certification Authority'} />
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

// export default CertContainer;
