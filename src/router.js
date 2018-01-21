/**
 * Router
 */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePageContainer from './containers/home/home.container';
import GovPageContainer from './containers/gov/gov.container';
import TeacherPageContainer from './containers/teacher/teacher.container';
import StudentPageContainer from './containers/student/student.container';
import CertPageContainer from './containers/cert/cert.container';

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
            <PropsRoute exact path='/gov' component={GovPageContainer} />
            <PropsRoute exact path='/teacher' component={TeacherPageContainer} />
            <PropsRoute exact path='/student' component={StudentPageContainer} />
            <PropsRoute exact path='/cert' component={CertPageContainer} />
        </Switch>
    </main>
);

export default Router;
