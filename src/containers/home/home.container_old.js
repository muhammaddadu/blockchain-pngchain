/**
 * Home Page
 */
import React from 'react';
import {store} from '../../main';

import {connect} from 'react-redux';
import {setStyle} from '../../actions'

import { HeaderComponent } from '../../components/header/header.component';
import { JumbotronComponent } from '../../components/jumbotron/jumbotron.component';
import { CurrencyPrices } from '../../components/currencyprices/currencyprices.component';

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

                <div className="container homepage-signup">
                    <div className="row">
                        <div className="col-lg-7">
                            <h3>Store your cryptocurrency with ease</h3>
                            <p>
                                Securely store you crypto currency in your account at Qoinbank. We will be paving the way for a future with only crypto coins.<br />
                                This is perfect for investors looking to aquiring cryptocurrency.
                            </p>
                        </div>

                        <div className="col-lg-4">
                            <div className="card homepage-signup-modal">
                                <div className="card-block">
                                    Ether or Smart Coin Card
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="homepage-currencyprices">
                    <div className="container">
                        <CurrencyPrices {...this.props}></CurrencyPrices>
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
        onSetStyle: (...args) => dispatch(setStyle(...args))
    };
};

export const HomePageContainer = connect(stateToProps, dispatchToProps)(HomePage);

export default HomePageContainer;
