import { useStandardModal } from "../../../shared/hooks/useStandardModal";
import { useToast } from "../../../shared/hooks/useToast";
import { AppointmentFormValues } from "../types/appointmentFormTypes";
import { getDates, getOverlapToastData } from "../utility/handleCalendarEvent";
import { useMedicalAppointments } from "./useMedicalAppointments";

export const useUpdateMedicalAppointment = () => {
    const { addToast } = useToast();
    const { closeModal } = useStandardModal();
    const { currentMedicalAppointment, modifyMedicalAppointment, checkMedicalAppointmentOverlap } =
        useMedicalAppointments();

    const updateMedicalAppointment = ({
        appointmentDate,
        initialHour,
        finalHour,
        specialty,
    }: AppointmentFormValues) => {
        const { startDate, endDate } = getDates(appointmentDate, initialHour, finalHour);

        currentMedicalAppointment.start = startDate;
        currentMedicalAppointment.end = endDate;
        currentMedicalAppointment.specialty = {
            id: 0,
            name: specialty,
        };

        if (checkMedicalAppointmentOverlap(currentMedicalAppointment)) return addToast(getOverlapToastData());

        modifyMedicalAppointment(currentMedicalAppointment);

        addToast({
            title: "Cita actualizada exitosamente",
            message: `Su cita de ${currentMedicalAppointment.specialty.name} ha sido actualizada correctamente`,
            type: "success",
        });
        closeModal();
    };

    return { updateMedicalAppointment };
};
