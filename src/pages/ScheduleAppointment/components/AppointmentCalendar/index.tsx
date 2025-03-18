import { Calendar } from "react-big-calendar";
import { useCalendar } from "../../hooks/useCalendar";
import { useCalendarEvents } from "../../hooks/useCalendarEvents";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop/withDragAndDrop.js";
import "./index.css";

const DragAndDropCalendar = withDragAndDrop(Calendar);

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
    const { calendarEvents, resizeEvent } = useCalendarEvents();

    return (
        <DragAndDropCalendar
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
            onEventResize={resizeEvent}
        />
    );
};

export default AppointmentCalendar;
