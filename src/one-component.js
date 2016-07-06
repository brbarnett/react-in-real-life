import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import NotifierContainer from './containers/NotifierContainer';
import notifications from './reducers/notifications';

const loggerMiddleware = createLogger();

// compose application state
const store = createStore(
    combineReducers({
        notifications
    }),
    window.initialState,    // optional: pull in state from server vars injected into HTML
    applyMiddleware(thunkMiddleware, loggerMiddleware)
);

// render notifier component
render(
    <Provider store={ store }>
        <NotifierContainer />
    </Provider>,
    document.getElementById('notifier')
);