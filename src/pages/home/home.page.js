/**
 * Home Page
 */
import React from 'react';
import {store} from '../../main';

import {connect} from 'react-redux';
import {setStyle} from '../../actions'

import { HeaderComponent } from '../../components/header/header.component';

export class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    componentWillMount() {
        this.props.onSetStyle('jumbotron');
    }

    render() {
        return (
            <div>
                <HeaderComponent {...this.props} />
                <div className="jumbotron">
                    <div className="container">
                        <img src={require('../../assets/logo.svg')} />
                        <h1 className="display-3">Your Digital Currency Account</h1>
                        <p>At coinbank, we provide you a solution to hold an Digital Currency Account with the benefits of a normal bank.</p>
                    </div>
                </div>
            </div>
        );
    }
};

const stateToProps = (state) => {
    return {
        header: state.header || {}
    };
};

const dispatchToProps = (dispatch) => {
    return {
        onSetStyle: (...args) => {
            dispatch(setStyle(...args))
        }
    };
};
export const HomePageContainer = connect(stateToProps, dispatchToProps)(HomePage);

export default HomePageContainer;
