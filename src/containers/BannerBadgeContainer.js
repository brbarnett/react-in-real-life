import React from 'react';
import { connect } from 'react-redux';

import BannerBadge from '../components/BannerBadge';

const mapStateToProps = state => {
  return { 
      notificationCount: state.notifications.count
    };
};

export default connect(mapStateToProps)(BannerBadge); 