/**
 * Home Page
 */
import React from 'react';
import {store} from '../../main';

import {connect} from 'react-redux';
import {setStyle} from '../../actions'

import { HeaderComponent } from '../../components/header/header.component';
import { JumbotronComponent } from '../../components/jumbotron/jumbotron.component';

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
                <JumbotronComponent {...this.props} />
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
