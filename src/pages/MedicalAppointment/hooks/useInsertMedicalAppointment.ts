import { useStandardModal } from "../../../shared/hooks/useStandardModal";
import { useToast } from "../../../shared/hooks/useToast";
import { MedicalAppointment } from "../entities/MedicalAppointment";
import { AppointmentFormValues } from "../types/appointmentFormTypes";
import { getDates, getOverlapToastData } from "../utility/handleCalendarEvent";
import { useMedicalAppointments } from "./useMedicalAppointments";

export const useInsertMedicalAppointment = () => {
    const { addToast } = useToast();
    const { closeModal } = useStandardModal();
    const { addMedicalAppointment, checkMedicalAppointmentOverlap } = useMedicalAppointments();

    const insertMedicalAppointment = ({
        appointmentDate,
        initialHour,
        finalHour,
        specialty,
    }: AppointmentFormValues) => {
        const { startDate, endDate } = getDates(appointmentDate, initialHour, finalHour);

        const newMedicalAppointment: MedicalAppointment = {
            id: crypto.randomUUID(),
            title: `Cita de ${specialty}`,
            start: startDate,
            end: endDate,
            specialty: {
                id: 1,
                name: "",
            },
        };

        if (checkMedicalAppointmentOverlap(newMedicalAppointment)) return addToast(getOverlapToastData());

        addMedicalAppointment(newMedicalAppointment);
        addToast({
            title: "Cita agendada exitosamente",
            message: `Su cita de ${newMedicalAppointment.specialty.name} ha sido programada correctamente`,
            type: "success",
        });
        closeModal();
    };

    return { insertMedicalAppointment };
};
