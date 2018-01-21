/**
 * Home Page
 */
import React from 'react';
import {store} from '../../main';

import {connect} from 'react-redux';
import {setStyle} from '../../actions';

import NewHeaderComponent from '../../components/header/newHeader.component';
import VoiceFormComponent from '../../components/voice/voiceForm.component';

export class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <div className="mainContainer">
                <NewHeaderComponent {...this.props} />
                <VoiceFormComponent {...this.props} />
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
        onSetStyle: (...args) => dispatch(setStyle(...args))
    };
};

export const HomePageContainer = connect(stateToProps, dispatchToProps)(HomePage);

export default HomePageContainer;
