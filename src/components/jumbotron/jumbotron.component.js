/**
 * Jumbotron Component
 */
import React from 'react';

export class JumbotronComponent extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <div className="coinbank-jumbotron">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 coinbank-jumbotron-info-container">
                            <h1 className="coinbank-jumbotron-title">Your Digital Currency Account</h1>
                            <p className="coinbank-jumbotron-subtitle">At coinbank, we provide you a solution to hold an Digital Currency Account with the benefits of a normal bank.</p>
                        </div>
                        <div className="col-sm-6 coinbank-jumbotron-logo-container">
                            <img className="coinbank-jumbotron-logo" src={require('../../assets/logo.svg')} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default JumbotronComponent;
