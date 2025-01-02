import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useAppContext } from "../../context/AppContext";
import "./CalendarView.css";

const CalendarView = () => {
  const { communications } = useAppContext();

  const tileContent = ({ date }) => {
    const event = communications.find(
      (c) => new Date(c.date).toDateString() === date.toDateString()
    );
    return event ? (
      <div className="calendar-event">
        <span className="event-type">{event.type}</span>
      </div>
    ) : null;
  };

  return (
    <div className="calendar-view-container">
      <div className="calendar-header">
        <h2>Communication Calendar</h2>
        <p>Track your past and upcoming communications easily.</p>
      </div>
      <Calendar
        tileContent={tileContent}
        className="custom-calendar"
        showNeighboringMonth={false}
      />
      <div className="calendar-legend">
        <h4>Legend:</h4>
        <div className="legend-item">
          <span className="legend-circle past"></span> Past Communication
        </div>
        <div className="legend-item">
          <span className="legend-circle upcoming"></span> Upcoming Communication
        </div>
      </div>
    </div>
  );
};

export default CalendarView;
