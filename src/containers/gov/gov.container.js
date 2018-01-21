import React from 'react';

import { CommonHeader } from '../../components/header/commonHeader.component';

export class GovPage extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    handleClick() {
        console.log('clicked');
    }

    render() {
        if (props.form) {
            return (
                <div className="mainContainer">
                    works!
                </div>
            );
        } else {
            return (
                <div className="mainContainer">
                    <CommonHeader title={'Goverment'} />
                    <div className="w-50 formContainer">
                        <button onClick={this.handleClick}>Add</button>
                    </div>
                </div>
            );
        }
    }
}

export default GovPage;
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
