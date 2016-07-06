import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import NotifierContainer from './containers/NotifierContainer';
import BannerBadgeContainer from './containers/BannerBadgeContainer';
import notifications from './reducers/notifications';

const loggerMiddleware = createLogger();

// compose application state
const store = createStore(
    combineReducers({
        notifications
    }),
    applyMiddleware(thunkMiddleware, loggerMiddleware)
);

render(
    <Provider store={ store }>
        <NotifierContainer />
    </Provider>,
    document.getElementById('notifier')
);

render(
    <Provider store={ store }>
        <BannerBadgeContainer />
    </Provider>,
    document.getElementById('bannerBadge')
);