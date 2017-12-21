/**
 * Router
 */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { HomePage } from './pages/home.page';

export const Router = () => (
    <main>
        <Switch>
            <Route exact path='/' component={HomePage}/>
        </Switch>
    </main>
);

export default Router;
