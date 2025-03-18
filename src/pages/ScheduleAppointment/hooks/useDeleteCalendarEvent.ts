import { useStandardModal } from "../../../shared/hooks/useStandardModal";
import { useCalendarEvent } from "./useCalendarEvent";

export const useDeleteCalendarEvent = () => {
    const { closeModal } = useStandardModal();
    const { currentCalendarEvent, removeCalendarEvent } = useCalendarEvent();

    const deleteCalendarEvent = () => {
        removeCalendarEvent(currentCalendarEvent.id);
        closeModal();
    };

    return { deleteCalendarEvent };
};
