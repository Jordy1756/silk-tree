import { useStandardModal } from "../../../shared/hooks/useStandardModal";
import { useToast } from "../../../shared/hooks/useToast";
import { AppointmentFormValues } from "../types/appointmentFormTypes";
import { getDates, getOverlapToastData } from "../utility/handleCalendarEvent";
import { useCalendarEvents } from "./useCalendarEvents";

export const useUpdateMedicalAppointment = () => {
    const { addToast } = useToast();
    const { closeModal } = useStandardModal();
    const { currentCalendarEvent, modifyCalendarEvent, checkCalendarEventOverlap } = useCalendarEvents();

    const updateMedicalAppointment = ({
        appointmentDate,
        initialHour,
        finalHour,
        specialty,
    }: AppointmentFormValues) => {
        const { startDate, endDate } = getDates(appointmentDate, initialHour, finalHour);

        currentCalendarEvent.start = startDate;
        currentCalendarEvent.end = endDate;
        currentCalendarEvent.specialty = specialty;

        if (checkCalendarEventOverlap(currentCalendarEvent)) return addToast(getOverlapToastData());

        modifyCalendarEvent(currentCalendarEvent);

        addToast({
            title: "Cita actualizada exitosamente",
            message: `Su cita de ${specialty} ha sido actualizada correctamente`,
            type: "success",
        });
        closeModal();
    };

    return { updateMedicalAppointment };
};
