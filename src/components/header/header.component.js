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

    render() {
        let classNames = ['coinbank-navbar', 'navbar', 'navbar-toggleable-md', 'navbar-inverse'];
        console.log('redering header');
        console.log(this.props);
        switch (this.props.header.style) {
            case 'jumbotron':
                classNames.push('coinbank-navbar-jumbotron');
                break;
            default:
                classNames.push('fixed-top', 'bg-inverse');
        }

        return (
            <nav className={classNames.join(' ')}>
                <div class="container">
                    <a className="navbar-brand" href="#">Qoinbank</a>
                </div>
            </nav>
        );
    }
};

export default HeaderComponent;
