import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

const target = document.getElementById('app');
const name = 'This Place';

ReactDOM.render((
    <div>
        <h1>React Boilerplate</h1>
        <p>Hello, {name}</p>
    </div>
), target);
