import React from 'react';

const BannerBadge = ({ notificationCount }) => {
    const className = notificationCount > 0
        ? 'badge red'
        : 'badge';

    return (
        <span className={ className }>{ notificationCount }</span>
    );
};

BannerBadge.propTypes = {
    notificationCount: React.PropTypes.number.isRequired
};

export default BannerBadge; 