import React from 'react';

const Notifier = ({ notificationsCount, decrementNotifications, incrementNotifications }) => {

    return (
        <div class="well">
            <h3>Notifications raised: { notificationsCount }</h3>
            <button class="btn btn-primary" onClick={ decrementNotifications() }><i class="glyphicon glyphicon-minus"></i></button>
            <button class="btn btn-primary" onClick={ incrementNotifications() }><i class="glyphicon glyphicon-plus"></i></button>
        </div>
    );
};

Notifier.propTypes = {
    notificationsCount: React.PropTypes.number.isRequired,
    decrementNotifications: React.PropTypes.func.isRequired,
    incrementNotifications: React.PropTypes.func.isRequired,
};

export default Notifier; 