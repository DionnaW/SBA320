import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

const Calendar = ({ onSelect }) => {
  const handleDateSelect = (selectInfo) => {
    onSelect(selectInfo.startStr); // this will pass the selected date to the parent component
  };

  return (
    <div>
       <h2>Book a Service:</h2>
       <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        selectable={true}
        select={handleDateSelect}
      />
    </div>
  );
};

export default Calendar;