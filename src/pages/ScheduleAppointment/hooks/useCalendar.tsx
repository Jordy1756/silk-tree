import { dayjsLocalizer, Views } from "react-big-calendar";
import { CalendarEvent, DragAndDropCalendar } from "../types/calendarEvent";
import { useStandardModal } from "../../../shared/hooks/useStandardModal";
import { useCalendarEvents } from "./useCalendarEvents";
import { useToast } from "../../../shared/hooks/useToast";
import { useCallback, useState } from "react";
import NewScheduleAppointment from "../components/NewScheduleAppointment";
import ScheduleAppointmentDetails from "../components/ScheduleAppointmentDetails";
import dayjs from "dayjs";
import "dayjs/locale/es";
import { getOverlapToastData } from "../utility/handleCalendarEvent";
import { getToastData } from "../../../shared/utility/handleToast";

export const useCalendar = () => {
    dayjs.locale("es");

    const { WEEK, MONTH } = Views;

    const { addToast } = useToast();
    const { showModal } = useStandardModal();
    const { handleCurrentCalendarEvent, modifyCalendarEvent, checkEventOverlap } = useCalendarEvents();
    const [currentView, setCurrentView] = useState<(typeof Views)[keyof typeof Views]>(MONTH);

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

    const handleCurrentView = useCallback((view: (typeof Views)[keyof typeof Views]) => setCurrentView(view), []);

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
        if (checkEventOverlap(event)) return addToast(getOverlapToastData());
        modifyCalendarEvent(event);
        addToast(
            getToastData(
                "Horario actualizado",
                `La duración de su cita de ${event.specialty} ha sido modificada correctamente`,
                "success"
            )
        );
    };

    const handleMoveEvent = ({ start, end, event }: DragAndDropCalendar) => {
        event.start = start;
        event.end = end;

        if (checkEventOverlap(event)) return addToast(getOverlapToastData());

        modifyCalendarEvent(event);

        addToast(
            getToastData(
                "Cita movida exitosamente",
                `Su cita de ${event.specialty} ha sido movida correctamente`,
                "success"
            )
        );
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
