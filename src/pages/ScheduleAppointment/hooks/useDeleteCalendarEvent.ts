import { useStandardModal } from "../../../shared/hooks/useStandardModal";
import { useCalendarEvents } from "./useCalendarEvents";

export const useDeleteCalendarEvent = () => {
    const { closeModal } = useStandardModal();
    const { removeCalendarEvent } = useCalendarEvents();

    const deleteCalendarEvent = () => {
        removeCalendarEvent();
        closeModal();
    };

    return { deleteCalendarEvent };
};
