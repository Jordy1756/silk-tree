import AppointmentCalendar from "./components/AppointmentCalendar";
import { ConfirmationModalProvider } from "../../shared/context/confirmationModalContext";
import { StandardModalProvider } from "../../shared/context/standardModalContext";
import { CalendarEventsProvider } from "./context/calendarEventsContext";
import { ToastProvider } from "../../shared/context/toastContext";
import Layout from "../../shared/layouts/Layout";
import "./index.css";

const ScheduleAppointment = () => {
    return (
        <ToastProvider>
            <ConfirmationModalProvider>
                <CalendarEventsProvider>
                    <StandardModalProvider>
                        <Layout>
                            <AppointmentCalendar />
                        </Layout>
                    </StandardModalProvider>
                </CalendarEventsProvider>
            </ConfirmationModalProvider>
        </ToastProvider>
    );
};

export default ScheduleAppointment;
