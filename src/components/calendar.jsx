import React from "react";
import { months, eventData, statusData } from "../data";

const Calendar = () => {
  return (
    <div>
      <div className="calendar-container">
        {months.map((month, monthIndex) => {
          const filteredEvents = eventData
            .filter((event) => new Date(event.start).getMonth() === monthIndex)
            .sort((a, b) => new Date(a.start) - new Date(b.start)); 

          return (
            <div key={monthIndex} className="month-section">
              <h2>{month}</h2>
              <table>
                <thead>
                  <tr>
                    <th>Day</th>
                    <th>Event</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredEvents.length > 0 ? (
                    filteredEvents.map((event) => {
                      const eventDate = new Date(event.start);
                      return (
                        <tr key={event.eventId} style={{ backgroundColor: statusData[event.status].bgc }}>
                          <td>{eventDate.getDate()}</td>
                          <td style={{ color: statusData[event.status].color }}>
                            {event.content} - {event.title}
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                    <tr><td colSpan="2">No events</td></tr>
                  )}
                </tbody>
              </table>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;