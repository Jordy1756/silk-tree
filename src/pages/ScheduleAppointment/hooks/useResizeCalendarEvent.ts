import { useToast } from "../../../shared/hooks/useToast";
import { getToastData } from "../../../shared/utility/handleToast";
import { DragAndDropCalendar } from "../types/calendarEvent";
import { getOverlapToastData } from "../utility/handleCalendarEvent";
import { useCalendarEvents } from "./useCalendarEvents";

export const useResizeCalendarEvent = () => {
    const { addToast } = useToast();
    const { modifyCalendarEvent, checkEventOverlap } = useCalendarEvents();

    const resizeCalendarEvent = ({ start, end, event }: DragAndDropCalendar) => {
        event.start = start;
        event.end = end;
        if (checkEventOverlap(event)) return addToast(getOverlapToastData());
        modifyCalendarEvent(event);
        addToast(
            getToastData(
                "Horario actualizado",
                `La duración de su cita de ${event.specialty} ha sido modificada correctamente`,
                "success"
            )
        );
    };

    return { resizeCalendarEvent };
};
