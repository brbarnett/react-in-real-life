import React from 'react';

const Notifier = ({ notificationCount, decrementNotifications, incrementNotifications }) => {
    return (
        <div className="well">
            <h3>Notifications raised: { notificationCount }</h3>
            <button className="btn btn-primary" onClick={ decrementNotifications }><i className="glyphicon glyphicon-minus"></i></button>
            <button className="btn btn-primary" onClick={ incrementNotifications }><i className="glyphicon glyphicon-plus"></i></button>
        </div>
    );
};

Notifier.propTypes = {
    notificationCount: React.PropTypes.number.isRequired,
    decrementNotifications: React.PropTypes.func.isRequired,
    incrementNotifications: React.PropTypes.func.isRequired,
};

export default Notifier; 