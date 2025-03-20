import { useToast } from "../../../shared/hooks/useToast";
import { getToastData } from "../../../shared/utility/handleToast";
import { DragAndDropCalendar } from "../types/calendarEvent";
import { getOverlapToastData } from "../utility/handleCalendarEvent";
import { useCalendarEvents } from "./useCalendarEvents";

export const useMoveCalendarEvent = () => {
    const { addToast } = useToast();
    const { modifyCalendarEvent, checkEventOverlap } = useCalendarEvents();

    const moveCalendarEvent = ({ start, end, event }: DragAndDropCalendar) => {
        if (checkEventOverlap(event)) return addToast(getOverlapToastData());

        event.start = start;
        event.end = end;

        modifyCalendarEvent(event);

        addToast(
            getToastData(
                "Cita movida exitosamente",
                `Su cita de ${event.specialty} ha sido movida correctamente`,
                "success"
            )
        );
    };

    return { moveCalendarEvent };
};
