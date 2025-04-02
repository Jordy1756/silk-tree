import { useStandardModal } from "../../../shared/hooks/useStandardModal";
import { useToast } from "../../../shared/hooks/useToast";
import { useMedicalAppointments } from "./useMedicalAppointments";

export const useDeleteMedicalAppointment = () => {
    const { addToast } = useToast();
    const { closeModal } = useStandardModal();
    const { currentMedicalAppointment, removeMedicalAppointment } = useMedicalAppointments();

    const deleteMedicalAppointment = () => {
        removeMedicalAppointment();
        addToast({
            title: "Cita eliminada exitosamente",
            message: `Su cita de ${currentMedicalAppointment.specialty.name} ha sido eliminada correctamente`,
            type: "success",
        });
        closeModal();
    };

    return { deleteMedicalAppointment };
};
