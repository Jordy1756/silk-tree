import { useCallback, useState } from "react";
import { useModal } from "../../../shared/hooks/useModal";
import NewAppointmentForm from "../components/NewAppointmentForm";
import { CalendarEvent } from "../types/calendarEvent";
import AppointmentDetails from "../components/AppointmentDetails";

type HandleSelectSlot = CalendarEvent & {
    currentView: string;
};
const { showModal } = useModal();

const handleSelectSlot = ({ start, end, currentView }: HandleSelectSlot) => {
    showModal(
        "Agendar cita",
        <NewAppointmentForm
            startDate={start}
            endDate={currentView === "month" ? start : end}
            isEditHour={currentView !== "month"}
        />
    );
};

const handleSelectEvent = useCallback((calendarEvent: CalendarEvent) => {
    showModal("Detalles de la cita", <AppointmentDetails {...calendarEvent} />);
}, []);

export const useCalendarEvents = () => {
    const [events, setEvents] = useState<CalendarEvent[]>([
        {
            title: "Meeting1",
            start: new Date(2025, 2, 11, 8, 0),
            end: new Date(2025, 2, 11, 9, 0),
            specialty: "1",
        },
        {
            title: "Meeting2",
            start: new Date(2025, 2, 11, 9, 0),
            end: new Date(2025, 2, 11, 10, 0),
            specialty: "2",
        },
        {
            title: "Meeting3",
            start: new Date(2025, 2, 11, 10, 0),
            end: new Date(2025, 2, 11, 11, 0),
            specialty: "3",
        },
        {
            title: "Meeting3",
            start: new Date(2025, 2, 11, 11, 0),
            end: new Date(2025, 2, 11, 12, 0),
            specialty: "4",
        },
        {
            title: "Meeting3",
            start: new Date(2025, 2, 11, 12, 0),
            end: new Date(2025, 2, 11, 13, 0),
            specialty: "5",
        },
        {
            title: "Meeting3",
            start: new Date(2025, 2, 11, 13, 0),
            end: new Date(2025, 2, 11, 14, 0),
            specialty: "6",
        },
        {
            title: "Meeting10",
            start: new Date(2025, 2, 11, 14, 0),
            end: new Date(2025, 2, 11, 15, 0),
            specialty: "7",
        },
    ]);

    const insertCalendarEvent = (calendarEvent: CalendarEvent) => setEvents((prev) => [...prev, calendarEvent]);

    return { events, handleSelectSlot, handleSelectEvent, insertCalendarEvent };
};
