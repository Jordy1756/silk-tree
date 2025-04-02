import { useToast } from "../../../shared/hooks/useToast";
import { DragAndDropCalendar } from "../entities/DragAndDropCalendar";
import { validateAppointmentDate } from "../utility/handleAppointmentForm";
import { getOverlapToastData } from "../utility/handleCalendarEvent";
import { useCalendarEvents } from "./useCalendarEvents";

export const useMoveMedicalAppointment = () => {
    const { addToast } = useToast();
    const { checkCalendarEventOverlap } = useCalendarEvents();

    const moveCalendarEvent = ({ start, end, event }: DragAndDropCalendar) => {
        const message = validateAppointmentDate(start.toDateString());

        if (typeof message === "string") return addToast({ title: "Fecha no válida", message, type: "error" });

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
            title: "Cita movida exitosamente",
            message: `Su cita de ${event.specialty} ha sido movida correctamente`,
            type: "success",
        });
    };

    return { moveCalendarEvent };
};
