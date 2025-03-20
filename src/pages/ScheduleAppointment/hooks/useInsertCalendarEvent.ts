import { useStandardModal } from "../../../shared/hooks/useStandardModal";
import { useToast } from "../../../shared/hooks/useToast";
import { getToastData } from "../../../shared/utility/handleToast";
import { AppointmentFormValues } from "../types/appointmentFormTypes";
import { CalendarEvent } from "../types/calendarEvent";
import { getDates, getOverlapToastData } from "../utility/handleCalendarEvent";
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

        if (checkEventOverlap(newCalendarEvent)) return addToast(getOverlapToastData());

        addCalendarEvent(newCalendarEvent);
        addToast(
            getToastData(
                "Cita agendada exitosamente",
                `Su cita de ${specialty} ha sido programada correctamente`,
                "success"
            )
        );
        closeModal();
    };

    return { insertCalendarEvent };
};
