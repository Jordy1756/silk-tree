import { dayjsLocalizer, Views } from "react-big-calendar";
import { CalendarEvent, DragAndDropCalendar } from "../types/calendarEvent";
import { useStandardModal } from "../../../shared/hooks/useStandardModal";
import { useCalendarEvents } from "./useCalendarEvents";
import { useCallback, useState } from "react";
import NewScheduleAppointment from "../components/NewScheduleAppointment";
import ScheduleAppointmentDetails from "../components/ScheduleAppointmentDetails";
import dayjs from "dayjs";
import "dayjs/locale/es";

export const useCalendar = () => {
    dayjs.locale("es");

    const { WEEK, MONTH } = Views;

    const { showModal } = useStandardModal();
    const { handleCurrentCalendarEvent, modifyCalendarEvent } = useCalendarEvents();
    const [currentView, setCurrentView] = useState<typeof Views[keyof typeof Views]>(MONTH);

    const localizer = dayjsLocalizer(dayjs);

    const startAccessor = "start";
    const endAccessor = "end";

    const views = [MONTH, WEEK];

    const min = dayjs("2025-03-10T08:00:00").toDate();
    const max = dayjs("2025-03-11T20:00:00").toDate();

    const messages = {
        allDay: "Todo el día",
        previous: "<",
        next: ">",
        today: "Hoy",
        month: "Mes",
        week: "Semana",
        day: "Día",
        agenda: "Agenda",
        date: "Fecha",
        time: "Hora",
        event: "Evento",
    };

    const handleCurrentView = useCallback((view: typeof Views[keyof typeof Views]) => setCurrentView(view), []);

    const handleSelectSlot = ({ id, start, end }: CalendarEvent) => {
        handleCurrentCalendarEvent({ id, title: "", start, end: currentView === MONTH ? start : end, specialty: "" });
        showModal("Agendar cita", <NewScheduleAppointment />);
    };

    const handleSelectEvent = (calendarEvent: CalendarEvent) => {
        handleCurrentCalendarEvent(calendarEvent);
        showModal("Detalles de la cita", <ScheduleAppointmentDetails />);
    };

    const handleResizeEvent = ({ start, end, event }: DragAndDropCalendar) => {
        event.start = start;
        event.end = end;
        modifyCalendarEvent(event);
    };

    const handleMoveEvent = ({ start, end, event }: DragAndDropCalendar) => {
        event.start = start;
        event.end = end;
        modifyCalendarEvent(event);
    };

    return {
        localizer,
        startAccessor,
        endAccessor,
        views,
        min,
        max,
        messages,
        currentView,
        handleCurrentView,
        handleSelectSlot,
        handleSelectEvent,
        handleResizeEvent,
        handleMoveEvent,
    };
};
