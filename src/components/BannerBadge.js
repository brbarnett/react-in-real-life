import React from 'react';

const BannerBadge = ({ notificationCount }) => {
    return (
        <span className="badge">{ notificationCount }</span>
    );
};

BannerBadge.propTypes = {
    notificationCount: React.PropTypes.number.isRequired
};

export default BannerBadge; 