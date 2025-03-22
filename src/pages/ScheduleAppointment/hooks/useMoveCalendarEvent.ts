import { useToast } from "../../../shared/hooks/useToast";
import { getToastData } from "../../../shared/utility/handleToast";
import { DragAndDropCalendar } from "../types/calendarEvent";
import { getOverlapToastData } from "../utility/handleCalendarEvent";
import { useCalendarEvents } from "./useCalendarEvents";

export const useMoveCalendarEvent = () => {
    const { addToast } = useToast();
    const { checkCalendarEventOverlap } = useCalendarEvents();

    const moveCalendarEvent = ({ start, end, event }: DragAndDropCalendar) => {
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
                "Cita movida exitosamente",
                `Su cita de ${event.specialty} ha sido movida correctamente`,
                "success"
            )
        );
    };

    return { moveCalendarEvent };
};
