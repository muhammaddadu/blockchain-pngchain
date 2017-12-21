/**
 * Home Page
 */
import React from 'react';

export class HomePage extends React.Component {
    render() {
        return (
            <div>
                <div className="jumbotron">
                    <div className="container">
                        <img src={require('../assets/logo.svg')} />
                        <h1 className="display-3">Your Digital Currency Account</h1>
                        <p>At coinbank, we provide you a solution to hold an Digital Currency Account with the benefits of a normal bank.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;
