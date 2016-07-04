import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { combineReducers } from 'redux';
import { NotifierContainer } from './containers/NotifierContainer';
import notifications from './reducers/notifications';

const loggerMiddleware = createLogger();

// compose application state
const store = createStore(
    combineReducers({
        notifications
    }),
    applyMiddleware(thunkMiddleware, loggerMiddleware)
);

const rootElement = document.getElementById('notifier');

render(
    <Provider store={ store }>
        <NotifierContainer />
    </Provider>,
    rootElement
);