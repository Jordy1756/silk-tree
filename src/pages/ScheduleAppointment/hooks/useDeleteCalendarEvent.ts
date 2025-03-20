import { useStandardModal } from "../../../shared/hooks/useStandardModal";
import { useToast } from "../../../shared/hooks/useToast";
import { getToastData } from "../../../shared/utility/handleToast";
import { useCalendarEvents } from "./useCalendarEvents";

export const useDeleteCalendarEvent = () => {
    const { addToast } = useToast();
    const { closeModal } = useStandardModal();
    const {
        currentCalendarEvent: { specialty },
        removeCalendarEvent,
    } = useCalendarEvents();

    const deleteCalendarEvent = () => {
        removeCalendarEvent();
        addToast(
            getToastData(
                "Cita eliminada exitosamente",
                `Su cita de ${specialty} ha sido eliminada correctamente`,
                "success"
            )
        );
        closeModal();
    };

    return { deleteCalendarEvent };
};
