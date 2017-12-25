/**
 * Router
 */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { HomePageContainer } from './pages/home/home.page';

const renderMergedProps = (component, ...rest) => {
    const finalProps = Object.assign({}, ...rest);
    return (
        React.createElement(component, finalProps)
    );
}

const PropsRoute = ({ component, ...rest }) => {
    return (
        <Route {...rest} render={routeProps => {
            return renderMergedProps(component, routeProps, rest);
        }}/>
    );
}

export const Router = (props) => (
    <main>
        <Switch>
            <PropsRoute exact path='/' component={HomePageContainer} />
        </Switch>
    </main>
);

export default Router;
