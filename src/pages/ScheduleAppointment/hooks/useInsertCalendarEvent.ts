import { useStandardModal } from "../../../shared/hooks/useStandardModal";
import { useToast } from "../../../shared/hooks/useToast";
import { getToastData } from "../../../shared/utility/handleToast";
import { AppointmentFormValues } from "../types/appointmentFormTypes";
import { CalendarEvent } from "../types/calendarEvent";
import { getDates } from "../utility/handleCalendarEvent";
import { useCalendarEvents } from "./useCalendarEvents";

export const useInsertCalendarEvent = () => {
    const { addToast } = useToast();

    const { closeModal } = useStandardModal();
    const { addCalendarEvent, checkEventOverlap } = useCalendarEvents();

    const insertCalendarEvent = ({ appointmentDate, initialHour, finalHour, specialty }: AppointmentFormValues) => {
        const { startDate, endDate } = getDates(appointmentDate, initialHour, finalHour);
        const newCalendarEvent: CalendarEvent = {
            id: "",
            title: `Cita de ${specialty}`,
            start: startDate,
            end: endDate,
            specialty,
        };

        if (checkEventOverlap(newCalendarEvent))
            return addToast(getToastData("Mensaje no enviado", "El mensaje no fue enviado al destinatario", "error"));

        addCalendarEvent(newCalendarEvent);
        addToast(getToastData("Mensaje enviado", "El mensaje fue enviado al destinatario", "success"));
        closeModal();
    };

    return { insertCalendarEvent };
};
