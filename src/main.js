/**
 * Main
 * Front-end entry point
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './router';
import { HeaderComponent } from './components/header/header.component';
import './style/main.scss';

const TARGET_EL = document.getElementById('app');

const App = () => (
    <div>
      <HeaderComponent />
      <Router />
    </div>
);

ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
), TARGET_EL);
