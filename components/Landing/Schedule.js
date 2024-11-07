import React, { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import './Landing.css';

export default function Schedule() {
  const [apiKey, setApiKey] = useState('');

  useEffect(() => {
    fetch('/.netlify/functions/getGoogleCalendarApiKey')
      .then(response => response.json())
      .then(data => setApiKey(data.apiKey));
  }, []);

  const renderEventContent = (eventInfo) => {
    return (
      <div className="event-content">
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
        {eventInfo.event.extendedProps.location && (
          <div className="event-location">{eventInfo.event.extendedProps.location}</div>
        )}
      </div>
    );
  };

  const renderDayHeaderContent = (dayHeaderContent) => {
    return (
      <div className="day-header-content">
        {dayHeaderContent.text}
      </div>
    );
  };

  const handleEventClick = (clickInfo) => {
    clickInfo.jsEvent.preventDefault(); 
  };

  return (
    <div className="Schedule" id="schedule">
      <div className="LandingAboutHeader">
        <h1 className="heading">Schedule</h1>
      </div>
      <div className="calendar-container">
        {apiKey && (
          <FullCalendar
            plugins={[dayGridPlugin, googleCalendarPlugin]}
            initialView="customThreeDay"
            googleCalendarApiKey={apiKey} 
            events={{
              googleCalendarId: 'c_d72a2518e24811953a600a17cc31ae2309264570b0c731f13724e420aabd1369@group.calendar.google.com',
              className: 'gcal-event' 
            }}
            headerToolbar={{
              left: '',
              center: '',
              right: ''
            }}
            views={{
              customThreeDay: {
                type: 'dayGrid',
                duration: { days: 3 },
                buttonText: '3 day'
              }
            }}
            initialDate="2024-11-08"
            height="auto"
            eventContent={renderEventContent}
            dayHeaderContent={renderDayHeaderContent}
            eventClick={handleEventClick} 
          />
        )}
      </div>
    </div>
  );
}