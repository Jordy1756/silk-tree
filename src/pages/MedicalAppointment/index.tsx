import MedicalAppointmentCalendar from "./components/MedicalAppointmentCalendar";
import { ConfirmationModalProvider } from "../../shared/context/confirmationModalContext";
import { StandardModalProvider } from "../../shared/context/standardModalContext";
import { MedicalAppointmentsProvider } from "./context/medicalAppointmentsContext";
import { ToastProvider } from "../../shared/context/toastContext";
import "./index.css";

const ScheduleAppointment = () => {
    return (
        <ToastProvider>
            <ConfirmationModalProvider>
                <MedicalAppointmentsProvider>
                    <StandardModalProvider>
                        <MedicalAppointmentCalendar />
                    </StandardModalProvider>
                </MedicalAppointmentsProvider>
            </ConfirmationModalProvider>
        </ToastProvider>
    );
};

export default ScheduleAppointment;
