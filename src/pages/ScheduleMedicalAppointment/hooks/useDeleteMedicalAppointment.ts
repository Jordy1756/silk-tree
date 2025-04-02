import { useStandardModal } from "../../../shared/hooks/useStandardModal";
import { useToast } from "../../../shared/hooks/useToast";
import { useCalendarEvents } from "./useCalendarEvents";

export const useDeleteMedicalAppointment = () => {
    const { addToast } = useToast();
    const { closeModal } = useStandardModal();
    const {
        currentCalendarEvent: { specialty },
        removeCalendarEvent,
    } = useCalendarEvents();

    const deleteCalendarEvent = () => {
        removeCalendarEvent();
        addToast({
            title: "Cita eliminada exitosamente",
            message: `Su cita de ${specialty} ha sido eliminada correctamente`,
            type: "success",
        });
        closeModal();
    };

    return { deleteCalendarEvent };
};
