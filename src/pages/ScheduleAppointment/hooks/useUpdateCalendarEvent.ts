import { useStandardModal } from "../../../shared/hooks/useStandardModal";
import { useToast } from "../../../shared/hooks/useToast";
import { getToastData } from "../../../shared/utility/handleToast";
import { AppointmentFormValues } from "../types/appointmentFormTypes";
import { getDates, getOverlapToastData } from "../utility/handleCalendarEvent";
import { useCalendarEvents } from "./useCalendarEvents";
export const useUpdateCalendarEvent = () => {
    const { addToast } = useToast();
    const { closeModal } = useStandardModal();
    const { currentCalendarEvent, modifyCalendarEvent, checkEventOverlap } = useCalendarEvents();

    const updateCalendarEvent = ({ appointmentDate, initialHour, finalHour, specialty }: AppointmentFormValues) => {
        const { startDate, endDate } = getDates(appointmentDate, initialHour, finalHour);

        currentCalendarEvent.start = startDate;
        currentCalendarEvent.end = endDate;
        currentCalendarEvent.specialty = specialty;

        if (checkEventOverlap(currentCalendarEvent)) return addToast(getOverlapToastData());

        modifyCalendarEvent(currentCalendarEvent);
        addToast(
            getToastData(
                "Cita actualizada exitosamente",
                `Su cita de ${specialty} ha sido actualizada correctamente`,
                "success"
            )
        );
        closeModal();
    };

    return { updateCalendarEvent };
};
