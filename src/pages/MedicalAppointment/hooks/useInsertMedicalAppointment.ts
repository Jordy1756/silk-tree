import { useStandardModal } from "../../../shared/hooks/useStandardModal";
import { useToast } from "../../../shared/hooks/useToast";
import { MedicalAppointment } from "../entities/MedicalAppointment";
import { AppointmentFormValues } from "../types/appointmentFormTypes";
import { getDates, getOverlapToastData } from "../utility/handleCalendarEvent";
import { useCalendarEvents } from "./useCalendarEvents";

export const useInsertMedicalAppointment = () => {
    const { addToast } = useToast();
    const { closeModal } = useStandardModal();
    const { addCalendarEvent, checkCalendarEventOverlap } = useCalendarEvents();

    const insertMedicalAppointment = ({
        appointmentDate,
        initialHour,
        finalHour,
        specialty,
    }: AppointmentFormValues) => {
        const { startDate, endDate } = getDates(appointmentDate, initialHour, finalHour);

        const newCalendarEvent: MedicalAppointment = {
            id: crypto.randomUUID(),
            title: `Cita de ${specialty}`,
            start: startDate,
            end: endDate,
            specialty,
        };

        if (checkCalendarEventOverlap(newCalendarEvent)) return addToast(getOverlapToastData());

        addCalendarEvent(newCalendarEvent);
        addToast({
            title: "Cita agendada exitosamente",
            message: `Su cita de ${specialty} ha sido programada correctamente`,
            type: "success",
        });
        closeModal();
    };

    return { insertMedicalAppointment };
};
