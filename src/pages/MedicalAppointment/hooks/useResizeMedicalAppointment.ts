import { useToast } from "../../../shared/hooks/useToast";
import { DragAndDropCalendar } from "../entities/DragAndDropCalendar";
import { getOverlapToastData } from "../utility/handleCalendarEvent";
import { useCalendarEvents } from "./useCalendarEvents";

export const useResizeMedicalAppointment = () => {
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

        addToast({
            title: "Horario actualizado",
            message: `La duración de su cita de ${event.specialty} ha sido modificada correctamente`,
            type: "success",
        });
    };

    return { resizeCalendarEvent };
};
