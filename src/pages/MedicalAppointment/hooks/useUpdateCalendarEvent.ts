import { useStandardModal } from "../../../shared/hooks/useStandardModal";
import { useToast } from "../../../shared/hooks/useToast";
import { Specialty } from "../entities/Specialty";
import { MedicalAppointmentFormValues } from "../types/appointmentFormTypes";
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
        specialty: selectedSpecialty,
    }: MedicalAppointmentFormValues) => {
        const { startDate, endDate } = getDates(appointmentDate, initialHour, finalHour);
        const specialty: Specialty = JSON.parse(selectedSpecialty);

        currentMedicalAppointment.title = `Cita de ${specialty.name}`;
        currentMedicalAppointment.start = startDate;
        currentMedicalAppointment.end = endDate;
        currentMedicalAppointment.specialty = specialty;

        if (checkMedicalAppointmentOverlap(currentMedicalAppointment)) return addToast(getOverlapToastData());

        modifyMedicalAppointment(currentMedicalAppointment);

        addToast({
            title: "Cita actualizada exitosamente",
            message: `Su cita ha sido actualizada correctamente`,
            type: "success",
        });
        closeModal();
    };

    return { updateMedicalAppointment };
};
