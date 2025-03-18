import { dayjsLocalizer } from "react-big-calendar";
import { CalendarEvent } from "../types/calendarEvent";
import { useStandardModal } from "../../../shared/hooks/useStandardModal";
import { useCalendarEvents } from "./useCalendarEvents";
import { useState } from "react";
import NewScheduleAppointment from "../components/NewScheduleAppointment";
import ScheduleAppointmentDetails from "../components/ScheduleAppointmentDetails";
import dayjs from "dayjs";
import "dayjs/locale/es";

export const useCalendar = () => {
    dayjs.locale("es");

    const { showModal } = useStandardModal();
    const { handleCurrentCalendarEvent } = useCalendarEvents();
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
        handleCurrentCalendarEvent({ id, title: "", start, end: currentView === "month" ? start : end, specialty: "" });
        showModal("Agendar cita", <NewScheduleAppointment />);
    };

    const handleSelectEvent = (calendarEvent: CalendarEvent) => {
        handleCurrentCalendarEvent(calendarEvent);
        showModal("Detalles de la cita", <ScheduleAppointmentDetails />);
    };

    // const moveEvent = useCallback(
    //     ({ event, start, end, isAllDay: droppedOnAllDaySlot = false }) => {
    //         const { allDay } = event;
    //         if (!allDay && droppedOnAllDaySlot) {
    //             event.allDay = true;
    //         }
    //         if (allDay && !droppedOnAllDaySlot) {
    //             event.allDay = false;
    //         }

    //         setMyEvents((prev) => {
    //             const existing = prev.find((ev) => ev.id === event.id) ?? {};
    //             const filtered = prev.filter((ev) => ev.id !== event.id);
    //             return [...filtered, { ...existing, start, end, allDay: event.allDay }];
    //         });
    //     },
    //     [setMyEvents]
    // );

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
