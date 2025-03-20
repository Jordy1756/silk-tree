import { Calendar, Views } from "react-big-calendar";
import { useCalendar } from "../../hooks/useCalendar";
import { useCalendarEvents } from "../../hooks/useCalendarEvents";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop/withDragAndDrop.js";
import "./index.css";

const DragAndDropCalendar = withDragAndDrop(Calendar);

const AppointmentCalendar = () => {
    const { MONTH } = Views;
    const {
        localizer,
        startAccessor,
        endAccessor,
        views,
        min,
        max,
        messages,
        currentView,
        handleCurrentView,
        handleSelectEvent,
        handleSelectSlot,
        handleResizeEvent,
        handleMoveEvent,
    } = useCalendar();
    const { calendarEvents } = useCalendarEvents();

    return (
        <DragAndDropCalendar
            className="appointment__calendar"
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
            resizable
            popup
            onSelectEvent={handleSelectEvent}
            onSelectSlot={handleSelectSlot}
            onView={handleCurrentView}
            onEventResize={currentView !== MONTH && handleResizeEvent}
            onEventDrop={handleMoveEvent}
        />
    );
};

export default AppointmentCalendar;
