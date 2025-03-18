import { Calendar } from "react-big-calendar";
import { useCalendar } from "../../hooks/useCalendar";
import "./index.css";
import { useCalendarEvents } from "../../hooks/useCalendarEvents";

const AppointmentCalendar = () => {
    const {
        localizer,
        startAccessor,
        endAccessor,
        views,
        min,
        max,
        messages,
        handleCurrentView,
        handleSelectEvent,
        handleSelectSlot,
    } = useCalendar();
    const { calendarEvents: calendarEvents } = useCalendarEvents();

    return (
        <Calendar
            localizer={localizer}
            startAccessor={startAccessor}
            endAccessor={endAccessor}
            style={{ height: "100vh" }}
            events={calendarEvents}
            views={views}
            min={min}
            max={max}
            messages={messages}
            selectable
            popup
            onSelectEvent={handleSelectEvent}
            onSelectSlot={handleSelectSlot}
            onView={handleCurrentView}
        />
    );
};

export default AppointmentCalendar;
