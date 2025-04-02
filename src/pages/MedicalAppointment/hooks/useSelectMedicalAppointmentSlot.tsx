import { Views } from "react-big-calendar";
import { useStandardModal } from "../../../shared/hooks/useStandardModal";
import { useCalendarEvents } from "./useCalendarEvents";
import NewMedicalAppointment from "../components/NewMedicalAppointment";
import { MedicalAppointment } from "../entities/MedicalAppointment";

export const useSelectMedicalAppointmentSlot = (currentView: (typeof Views)[keyof typeof Views]) => {
    const { showModal } = useStandardModal();
    const { handleCurrentCalendarEvent } = useCalendarEvents();
    const { MONTH } = Views;

    const selectMedicalAppointmentSlot = ({ id, start, end }: MedicalAppointment) => {
        handleCurrentCalendarEvent({ id, title: "", start, end: currentView === MONTH ? start : end, specialty: "" });
        showModal("Agendar cita", <NewMedicalAppointment />);
    };

    return { selectMedicalAppointmentSlot };
};
