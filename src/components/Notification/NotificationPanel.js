import React from "react";
import { useAppContext } from "../../context/AppContext";
import "./NotificationPanel.css";

const NotificationPanel = () => {
  const { communications } = useAppContext();
  const overdue = communications.filter((c) => new Date(c.date) < new Date());
  const dueToday = communications.filter(
    (c) => new Date(c.date).toDateString() === new Date().toDateString()
  );

  return (
    <div className="notification-panel">
      <h2 className="title">Notifications</h2>

      <div className="notification-section overdue">
        <h3>Overdue Communications</h3>
        {overdue.length > 0 ? (
          <ul>
            {overdue.map((c, index) => (
              <li key={index}>
                <span className="type">{c.type}</span> for <span className="company">Company ID: {c.companyId}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p>No overdue communications.</p>
        )}
      </div>

      <div className="notification-section due-today">
        <h3>Today’s Communications</h3>
        {dueToday.length > 0 ? (
          <ul>
            {dueToday.map((c, index) => (
              <li key={index}>
                <span className="type">{c.type}</span> for <span className="company">Company ID: {c.companyId}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p>No communications due today.</p>
        )}
      </div>
    </div>
  );
};

export default NotificationPanel;
