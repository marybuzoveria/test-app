import React from "react";

const timelineEvent = ({ event, status }) => {
  const eventDate = new Date(event.start); 
  const position = eventDate.getDate(); 

  return (
    <div className="timeline-event">
      <div style={{ color: status.color }}>
        <strong>{event.content}</strong> - {event.title} ({eventDate.toLocaleDateString()})
      </div>
    </div>
  );
};

export default timelineEvent;