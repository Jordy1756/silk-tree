import { useStandardModal } from "../../../shared/hooks/useStandardModal";
import { useCalendarEvents } from "./useCalendarEvents";
import ScheduleAppointmentDetails from "../components/ScheduleAppointmentDetails";
import { ICalendarEvent } from "../interfaces/ICalendarEvent";

export const useSelectCalendarEvent = () => {
    const { showModal } = useStandardModal();
    const { handleCurrentCalendarEvent } = useCalendarEvents();

    const selectCalendarEvent = (calendarEvent: ICalendarEvent) => {
        handleCurrentCalendarEvent(calendarEvent);
        showModal("Detalles de la cita", <ScheduleAppointmentDetails />);
    };

    return { selectCalendarEvent };
};
