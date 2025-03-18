import { useStandardModal } from "../../../shared/hooks/useStandardModal";
import { AppointmentFormValues } from "../types/appointmentFormTypes";
import { CalendarEvent } from "../types/calendarEvent";
import { getDates } from "../utility/handleCalendarEvent";
import { useCalendarEvents } from "./useCalendarEvents";

export const useInsertCalendarEvent = () => {
    const { closeModal } = useStandardModal();
    const { addCalendarEvent } = useCalendarEvents();

    const insertCalendarEvent = ({ appointmentDate, initialHour, finalHour, specialty }: AppointmentFormValues) => {
        const { startDate, endDate } = getDates(appointmentDate, initialHour, finalHour);
        const newCalendarEvent: CalendarEvent = {
            id: "",
            title: "",
            start: startDate,
            end: endDate,
            specialty,
        };

        addCalendarEvent(newCalendarEvent);
        closeModal();
    };

    return { insertCalendarEvent };
};
