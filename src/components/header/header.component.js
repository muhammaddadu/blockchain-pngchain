/**
 * Header Component
 */
import React from 'react';
import _ from 'lodash';

const SCROLL_OFFSET = 300;

export class HeaderComponent extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    onScroll() {
        return _.debounce(() => {
            let supportPageOffset = window.pageXOffset !== undefined;
            let isCSS1Compat = ((document.compatMode || '') === 'CSS1Compat');
            let scrollY = supportPageOffset
                ? window.pageYOffset
                : isCSS1Compat
                    ? document.documentElement.scrollTop
                    : document.body.scrollTop;

            if (scrollY > SCROLL_OFFSET && this.props.header.style === 'jumbotron') {
                this.props.onSetStyle('not-jumbotron');
                this.triggeredByScroll = true;
            } else if (scrollY < SCROLL_OFFSET && this.props.header.style !== 'jumbotron') {
                this.props.onSetStyle('jumbotron');
            }
        }, 200);
    }

    initializeScrollHandler() {
        window.addEventListener('scroll', this.onScroll());
    }

    render() {
        let classNames = ['coinbank-navbar', 'navbar', 'navbar-toggleable-md', 'navbar-inverse'];
        let animationClasses = [];

        switch (this.props.header.style) {
            case 'jumbotron':
                animationClasses = ['fadeIn', 'animated'];
                animationClasses.forEach((className) => classNames.push(className));
                setTimeout(() => animationClasses.forEach((className) => this.navEl.classList.remove(className)), 1000);
                classNames.push('coinbank-navbar-jumbotron');
                this.initializeScrollHandler();
                break;
            default:
                animationClasses = ['slideInDown', 'animated'];
                animationClasses.forEach((className) => classNames.push(className));
                setTimeout(() => animationClasses.forEach((className) => this.navEl.classList.remove(className)), 1000);
                classNames.push('fixed-top', 'bg-inverse');

                if (!this.triggeredByScroll) {
                    this.triggeredByScroll = false;
                    window.removeEventListener('scroll', this.onScroll());
                }
        }

        return (
            <nav className={classNames.join(' ')}
                 ref={(navEl) => { this.navEl = navEl; }}>
                <div className="container">
                    <a className="navbar-brand" href="#">Qoinbank</a>
                </div>
            </nav>
        );
    }
};

export default HeaderComponent;
