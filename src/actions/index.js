import * as types from '../constants/ActionTypes';

export const decrementNotifications = () => {
    return { type: types.DECREMENT_NOTIFICATIONS };
};

export const incrementNotifications = () => {
    return { type: types.INCREMENT_NOTIFICATIONS };
};