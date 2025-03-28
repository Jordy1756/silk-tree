import { Views } from "react-big-calendar";
import { useStandardModal } from "../../../shared/hooks/useStandardModal";
import { useCalendarEvents } from "./useCalendarEvents";
import NewScheduleAppointment from "../components/NewScheduleAppointment";
import { ICalendarEvent } from "../interfaces/ICalendarEvent";

export const useSelectCalendarSlot = (currentView: (typeof Views)[keyof typeof Views]) => {
    const { showModal } = useStandardModal();
    const { handleCurrentCalendarEvent } = useCalendarEvents();
    const { MONTH } = Views;

    const selectCalendarSlot = ({ id, start, end }: ICalendarEvent) => {
        handleCurrentCalendarEvent({ id, title: "", start, end: currentView === MONTH ? start : end, specialty: "" });
        showModal("Agendar cita", <NewScheduleAppointment />);
    };

    return { selectCalendarSlot };
};
