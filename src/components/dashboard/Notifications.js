import React from 'react';
import moment from 'moment';

const Notifications = (props) => {
  const { notifications } = props;

  return (
    <div className="section">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Notifications</span>
          <ul className="notifications">
            {notifications &&
              notifications.map((notification) => {
                return (
                  <li key={notification.id}>
                    <span className="blue-text text-darken-2">
                      {notification.user}
                    </span>
                    <p>{notification.content}</p>
                    <div className="grey-text note-date">
                      {moment(notification.time.toDate()).fromNow()}
                    </div>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
