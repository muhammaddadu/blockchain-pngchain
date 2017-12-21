/**
 * Header Component
 */
import React from 'react';

export class HeaderComponent extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse">
                <a className="navbar-brand" href="#">Qoinbank</a>
            </nav>
        );
    }
};

export default HeaderComponent;
