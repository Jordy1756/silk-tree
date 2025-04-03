import { useStandardModal } from "../../../shared/hooks/useStandardModal";
import { useToast } from "../../../shared/hooks/useToast";
import { deleteMedicalAppointmentService } from "../services/deleteMedicalAppointmentService";
import { useMedicalAppointments } from "./useMedicalAppointments";

export const useDeleteMedicalAppointment = () => {
    const { addToast } = useToast();
    const { closeModal } = useStandardModal();
    const { currentMedicalAppointment, removeMedicalAppointment } = useMedicalAppointments();

    const deleteMedicalAppointment = async () => {
        try {
            await deleteMedicalAppointmentService(currentMedicalAppointment.id);
            removeMedicalAppointment();

            addToast({
                title: "Cita eliminada exitosamente",
                message: `Su cita de ${currentMedicalAppointment.specialty.name} ha sido eliminada correctamente`,
                type: "success",
            });
            closeModal();
        } catch (error: any) {
            console.log(error);
            addToast({
                title: "Error al eliminar la cita",
                message: `Su cita de ${currentMedicalAppointment.specialty.name} no se puede eliminar`,
                type: "error",
            });
        }
    };

    return { deleteMedicalAppointment };
};
