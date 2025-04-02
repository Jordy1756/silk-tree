import { useStandardModal } from "../../../shared/hooks/useStandardModal";
import { useCalendarEvents } from "./useCalendarEvents";
import MedicalAppointmentDetails from "../components/MedicalAppointmentDetails";
import { MedicalAppointment } from "../entities/MedicalAppointment";

export const useSelectMedicalAppointment = () => {
    const { showModal } = useStandardModal();
    const { handleCurrentCalendarEvent } = useCalendarEvents();

    const selectMedicalAppointment = (calendarEvent: MedicalAppointment) => {
        handleCurrentCalendarEvent(calendarEvent);
        showModal("Detalles de la cita", <MedicalAppointmentDetails />);
    };

    return { selectMedicalAppointment };
};
