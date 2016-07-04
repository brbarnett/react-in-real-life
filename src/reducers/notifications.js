import { 
    DECREMENT_NOTIFICATIONS, 
    INCREMENT_NOTIFICATIONS 
} from '../constants/ActionTypes';

const notifications = (state = { count: 0 }, action) => {
  switch (action.type) {
      case DECREMENT_NOTIFICATIONS:
        return Object.assign({}, state, {
           count: state.count - 1
        });
    case INCREMENT_NOTIFICATIONS:
        return Object.assign({}, state, {
           count: state.count + 1
        });
    default:
      return state;
  }
};

export default notifications;