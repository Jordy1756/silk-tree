import Layout from "../../shared/layouts/Layout";
import MedicalAppointmentCalendar from "./components/MedicalAppointmentCalendar";
import { ConfirmationModalProvider } from "../../shared/context/confirmationModalContext";
import { StandardModalProvider } from "../../shared/context/standardModalContext";
import { CalendarEventsProvider } from "./context/calendarEventsContext";
import { ToastProvider } from "../../shared/context/toastContext";
import "./index.css";

const ScheduleAppointment = () => {
    return (
        <ToastProvider>
            <ConfirmationModalProvider>
                <CalendarEventsProvider>
                    <StandardModalProvider>
                        <Layout>
                            <MedicalAppointmentCalendar />
                        </Layout>
                    </StandardModalProvider>
                </CalendarEventsProvider>
            </ConfirmationModalProvider>
        </ToastProvider>
    );
};

export default ScheduleAppointment;
