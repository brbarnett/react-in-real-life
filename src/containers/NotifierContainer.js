import React from 'react';
import { connect } from 'react-redux';

import Notifier from '../components/Notifier';
import { decrementNotifications, incrementNotifications } from '../actions';

const mapStateToProps = state => {
  return { 
      notificationCount: state.notifications.count
    };
};

const mapDispatchToProps = dispatch => {
  return { 
      decrementNotifications: () => {
          dispatch(decrementNotifications())
      },
      incrementNotifications: () => {
          dispatch(incrementNotifications())
      }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Notifier); 