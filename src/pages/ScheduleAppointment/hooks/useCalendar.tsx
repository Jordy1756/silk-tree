import { dayjsLocalizer } from "react-big-calendar";
import { CalendarEvent } from "../types/calendarEvent";
import { useStandardModal } from "../../../shared/hooks/useStandardModal";
import { useCalendarEvent } from "./useCalendarEvent";
import { useState } from "react";
import NewScheduleAppointment from "../components/NewScheduleAppointment";
import ScheduleAppointmentDetails from "../components/ScheduleAppointmentDetails";
import dayjs from "dayjs";
import "dayjs/locale/es";

export const useCalendar = () => {
    dayjs.locale("es");

    const { showModal } = useStandardModal();
    const { handleCurrentCalendarEvent: handleCalendarEvent } = useCalendarEvent();
    const [currentView, setCurrentView] = useState("month");

    const localizer = dayjsLocalizer(dayjs);

    const startAccessor = "start";
    const endAccessor = "end";

    const views = ["month", "week"];

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

    const handleCurrentView = (view: string) => setCurrentView(view);

    const handleSelectSlot = ({ id, start, end }: CalendarEvent) => {
        handleCalendarEvent({ id, title: "", start, end: currentView === "month" ? start : end, specialty: "" });
        showModal("Agendar cita", <NewScheduleAppointment />);
    };

    const handleSelectEvent = (calendarEvent: CalendarEvent) => {
        handleCalendarEvent(calendarEvent);
        showModal("Detalles de la cita", <ScheduleAppointmentDetails />);
    };

    return {
        localizer,
        startAccessor,
        endAccessor,
        views,
        min,
        max,
        messages,
        handleCurrentView,
        handleSelectSlot,
        handleSelectEvent,
    };
};
