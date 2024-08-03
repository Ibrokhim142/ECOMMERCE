import React from 'react';
import { useSelector } from 'react-redux';
import { List } from 'antd';

const Notifications = () => {
  const notifications = useSelector(state => state.notifications.notifications);

  return (
    <div>
      <List
        itemLayout="horizontal"
        dataSource={notifications}
        renderItem={notification => (
          <List.Item>
            <List.Item.Meta
              title={notification.title}
              description={notification.message}
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default Notifications;
