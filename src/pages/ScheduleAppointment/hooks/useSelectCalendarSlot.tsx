import { Views } from "react-big-calendar";
import { useStandardModal } from "../../../shared/hooks/useStandardModal";
import { CalendarEvent } from "../types/calendarEvent";
import { useCalendarEvents } from "./useCalendarEvents";
import NewScheduleAppointment from "../components/NewScheduleAppointment";

export const useSelectCalendarSlot = (currentView: (typeof Views)[keyof typeof Views]) => {
    const { showModal } = useStandardModal();
    const { handleCurrentCalendarEvent } = useCalendarEvents();
    const { MONTH } = Views;

    const selectCalendarSlot = ({ id, start, end }: CalendarEvent) => {
        handleCurrentCalendarEvent({ id, title: "", start, end: currentView === MONTH ? start : end, specialty: "" });
        showModal("Agendar cita", <NewScheduleAppointment />);
    };

    return { selectCalendarSlot };
};
