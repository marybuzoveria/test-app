import React from "react";
import { eventData, statusData } from "../data"; 
import TimelineEvent from "./timeline-event"; 

const Timeline = () => {
  const sortedEvents = eventData.sort((a, b) => new Date(a.start) - new Date(b.start));

  return (
    <div className="timeline-container">
      <div className="timeline">
        {sortedEvents.map((event) => (
          <TimelineEvent 
            key={event.eventId} 
            event={event} 
            status={statusData[event.status]} 
          />
        ))}
      </div>
    </div>
  );
};

export default Timeline;