/**
 * Header Component
 */
import React from 'react';
import './header.component.scss';

export class HeaderComponent extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render(props) {
        let classNames = ['navbar', 'navbar-toggleable-md', 'navbar-inverse'];
        console.log('redering header');
        console.log(this.props);
        switch (this.props.header.style) {
            case 'jumbotron':
                classNames.push('navbar--jumbotron');
                break;
            default:
                classNames.push('fixed-top', 'bg-inverse');
        }

        return (
            <nav className={classNames.join(' ')}>
                <a className="navbar-brand" href="#">Qoinbank</a>
            </nav>
        );
    }
};

export default HeaderComponent;
