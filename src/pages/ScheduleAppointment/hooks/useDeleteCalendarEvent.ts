import { useStandardModal } from "../../../shared/hooks/useStandardModal";
import { useCalendarEvents } from "./useCalendarEvents";

export const useDeleteCalendarEvent = () => {
    const { closeModal } = useStandardModal();
    const { currentCalendarEvent, removeCalendarEvent } = useCalendarEvents();

    const deleteCalendarEvent = () => {
        removeCalendarEvent(currentCalendarEvent.id);
        closeModal();
    };

    return { deleteCalendarEvent };
};
