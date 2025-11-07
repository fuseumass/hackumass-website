import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import './Landing.css';

export default function Schedule() {

  const events = [
    // Friday 11/8
    { title: 'Participant Check-In', start: '2025-11-07T18:30', location: 'Campus Center Auditorium' },
    { title: 'Opening Ceremony', start: '2025-11-07T19:30', location: 'Campus Center Auditorium' },
    { title: 'Hacking Begins', start: '2025-11-07T20:30' },
    { title: 'Hardware Table Opens', start: '2025-11-07T21:30' },
    { title: 'Workshop: Unlock AI', start: '2025-11-07T21:30', location: 'ILC S140' },
    { title: 'Workshop: Team Building', start: '2025-11-07T21:30', location: 'ILC S120' },
    { title: 'Workshop: Intro to Git', start: '2025-11-07T22:45', location: 'ILC N151' },
    { title: 'Workshop: Using AWS at Hackathons', start: '2025-11-07T22:45', location: 'ILC S140' },
    { title: 'Workshop: AI Safety And Ethics', start: '2025-11-07T22:45', location: 'ILC S120' },

    // Saturday 11/9
    { title: 'Breakfast', start: '2025-11-08T08:00', location: 'ILC Main Atrium' },

    { title: 'Workshop: Agent Building using campusGenAI', start: '2025-11-08T10:00', location: 'ILC S120' },
    { title: 'Workshop: Building Your First WebApp on AWS', start: '2025-11-08T10:00', location: 'ILC N151' },

    { title: 'Workshop: Intro to CAD - Simple Rocket Booster Section', start: '2025-11-08T11:15', location: 'ILC S140' },
    { title: 'Workshop: PIT 101', start: '2025-11-08T11:15', location: 'ILC S120' },

    { title: 'Lunch', start: '2025-11-08T12:15', location: 'ILC Main Atrium' },

    { title: 'Workshop: NFC Keychain', start: '2025-11-08T13:00', location: 'ILC S140' },
    { title: 'Workshop: AWS Bedrock', start: '2025-11-08T13:00', location: 'ILC S120' },
    { title: 'Workshop: Intro to Distributed Systems', start: '2025-11-08T13:00', location: 'ILC N151' },

    { title: 'Sponsor Fair', start: '2025-11-08T14:00', location: 'ILC Main Atrium' },

    { title: 'Workshop: Diversity Expo', start: '2025-11-08T14:15', location: 'ILC S140' },
    { title: 'Workshop: AWS Bedrock', start: '2025-11-08T14:15', location: 'ILC S120' },
    { title: 'Workshop: Intro to 3D Printing', start: '2025-11-08T14:15', location: 'ILC N151' },

    { title: 'Workshop: Hacking With Github Copilot', start: '2025-11-08T15:30', location: 'ILC S140' },
    { title: 'Workshop: From APIs to Agents: How to Build AI Systems', start: '2025-11-08T15:30', location: 'ILC N151' },

    { title: 'AWS Coffee Chats', start: '2025-11-08T16:00', location: 'ILC Main Atrium' },

    { title: 'Workshop: Experiment with Google AI Studio', start: '2025-11-08T16:45', location: 'ILC S140' },
    { title: 'Workshop: Design Thinking', start: '2025-11-08T16:45', location: 'ILC S120' },
    { title: 'Workshop: Intro to Cybersecurity Careers', start: '2025-11-08T16:45', location: 'ILC N151' },

    { title: 'Dinner', start: '2025-11-08T18:00', location: 'ILC Main Atrium' },

    { title: 'Workshop: Intro to Web: SQL Injections', start: '2025-11-08T19:00', location: 'ILC S140' },
    { title: 'Workshop: Real-time gestures with Google\'s MediaPipe', start: '2025-11-08T19:00', location: 'ILC N151' },

    { title: 'Workshop: How to Mod Minecraft', start: '2025-11-08T20:15', location: 'ILC S140' },
    { title: 'Workshop: GWC Career Development', start: '2025-11-08T20:15', location: 'ILC N151' },

    { title: 'Workshop: Intro to Arduino', start: '2025-11-08T21:30', location: 'ILC S140' },

    { title: 'Insomnia Cookies', start: '2025-11-08T23:00' },
    { title: 'Initial Submission Deadline', start: '2025-11-08T24:00' },

    // Sunday 11/10
    { title: 'Breakfast', start: '2025-11-09T09:00', location: 'ILC Main Atrium' },
    { title: 'Project Final Submission Deadline', start: '2025-11-09T10:00' },
    { title: 'Judging', start: '2025-11-09T12:30' },
    { title: 'Project Deliberation', start: '2025-11-09T15:00' },
    { title: 'Closing Ceremony', start: '2025-11-09T17:00' }
  ];

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
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="customThreeDay"
          events={events}
          headerToolbar={{
            left: '',
            center: '',
            right: ''
          }}
          views={{
            customThreeDay: {
              type: 'dayGrid',
              duration: { days: 3 },
              buttonText: '3 day',
            }
          }}
          initialDate="2025-11-07"
          height="auto"
          eventContent={renderEventContent}
          dayHeaderContent={renderDayHeaderContent}
          eventClick={handleEventClick}
        />
      </div>
    </div>
  );
}
