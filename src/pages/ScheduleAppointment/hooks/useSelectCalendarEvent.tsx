import { useStandardModal } from "../../../shared/hooks/useStandardModal";
import { CalendarEvent } from "../types/calendarEvent";
import { useCalendarEvents } from "./useCalendarEvents";
import ScheduleAppointmentDetails from "../components/ScheduleAppointmentDetails";

export const useSelectCalendarEvent = () => {
    const { showModal } = useStandardModal();
    const { handleCurrentCalendarEvent } = useCalendarEvents();

    const selectCalendarEvent = (calendarEvent: CalendarEvent) => {
        handleCurrentCalendarEvent(calendarEvent);
        showModal("Detalles de la cita", <ScheduleAppointmentDetails />);
    };

    return { selectCalendarEvent };
};
