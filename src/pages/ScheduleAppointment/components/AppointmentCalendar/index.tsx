import { Calendar, Views } from "react-big-calendar";
import { useCalendar } from "../../hooks/useCalendar";
import { useCalendarEvents } from "../../hooks/useCalendarEvents";
import { useMoveCalendarEvent } from "../../hooks/useMoveCalendarEvent";
import { useSelectCalendarEvent } from "../../hooks/useSelectCalendarEvent";
import { useSelectCalendarSlot } from "../../hooks/useSelectCalendarSlot";
import { useResizeCalendarEvent } from "../../hooks/useResizeCalendarEvent";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop/withDragAndDrop.js";
import "./index.css";

const DragAndDropCalendar = withDragAndDrop(Calendar);

const AppointmentCalendar = () => {
    const { MONTH } = Views;
    const { localizer, startAccessor, endAccessor, views, min, max, messages, currentView, handleCurrentView } =
        useCalendar();
    const { calendarEvents } = useCalendarEvents();
    const { selectCalendarEvent } = useSelectCalendarEvent();
    const { selectCalendarSlot } = useSelectCalendarSlot(currentView);
    const { resizeCalendarEvent } = useResizeCalendarEvent();
    const { moveCalendarEvent } = useMoveCalendarEvent();

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
            onSelectEvent={selectCalendarEvent}
            onSelectSlot={selectCalendarSlot}
            onView={handleCurrentView}
            onEventResize={currentView !== MONTH && resizeCalendarEvent}
            onEventDrop={moveCalendarEvent}
        />
    );
};

export default AppointmentCalendar;
