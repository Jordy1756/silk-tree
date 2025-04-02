import { Calendar, Views } from "react-big-calendar";
import { useCalendar } from "../../hooks/useCalendar";
import { useCalendarEvents } from "../../hooks/useCalendarEvents";
import { useMoveMedicalAppointment } from "../../hooks/useMoveMedicalAppointment";
import { useSelectMedicalAppointment } from "../../hooks/useSelectMedicalAppointment";
import { useSelectMedicalAppointmentSlot } from "../../hooks/useSelectMedicalAppointmentSlot";
import { useResizeMedicalAppointment } from "../../hooks/useResizeMedicalAppointment";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop/withDragAndDrop.js";
import "./index.css";

const DragAndDropCalendar = withDragAndDrop(Calendar);

const MedicalAppointmentCalendar = () => {
    const { MONTH } = Views;
    const { localizer, startAccessor, endAccessor, views, min, max, messages, currentView, handleCurrentView } =
        useCalendar();
    const { calendarEvents } = useCalendarEvents();
    const { selectMedicalAppointment: selectCalendarEvent } = useSelectMedicalAppointment();
    const { selectCalendarSlot } = useSelectMedicalAppointment(currentView);
    const { resizeCalendarEvent } = useResizeMedicalAppointment();
    const { moveCalendarEvent } = useMoveMedicalAppointment();

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

export default MedicalAppointmentCalendar;
