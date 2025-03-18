import { useStandardModal } from "../../../shared/hooks/useStandardModal";
import { AppointmentFormValues } from "../types/appointmentFormTypes";
import { getDates } from "../utility/handleCalendarEvent";
import { useCalendarEvents } from "./useCalendarEvents";
export const useUpdateCalendarEvent = () => {
    const { closeModal } = useStandardModal();
    const { currentCalendarEvent, modifyCalendarEvent } = useCalendarEvents();

    const updateCalendarEvent = ({ appointmentDate, initialHour, finalHour, specialty }: AppointmentFormValues) => {
        const { startDate, endDate } = getDates(appointmentDate, initialHour, finalHour);

        currentCalendarEvent.start = startDate;
        currentCalendarEvent.end = endDate;
        currentCalendarEvent.specialty = specialty;

        modifyCalendarEvent(currentCalendarEvent);
        closeModal();
    };

    return { updateCalendarEvent };
};
