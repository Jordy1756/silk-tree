import { useToast } from "../../../shared/hooks/useToast";
import { getToastData } from "../../../shared/utility/handleToast";
import { DragAndDropCalendar } from "../types/calendarEvent";
import { getOverlapToastData } from "../utility/handleCalendarEvent";
import { useCalendarEvents } from "./useCalendarEvents";

export const useResizeCalendarEvent = () => {
    const { addToast } = useToast();
    const { checkCalendarEventOverlap } = useCalendarEvents();

    const resizeCalendarEvent = ({ start, end, event }: DragAndDropCalendar) => {
        const startDate = event.start;
        const endDate = event.end;

        event.start = start;
        event.end = end;

        if (checkCalendarEventOverlap(event)) {
            event.start = startDate;
            event.end = endDate;
            return addToast(getOverlapToastData());
        }

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
