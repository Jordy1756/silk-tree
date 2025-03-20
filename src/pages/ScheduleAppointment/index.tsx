import Footer from "../../shared/components/Footer";
import Navbar from "../../shared/components/Navbar";
import AppointmentCalendar from "./components/AppointmentCalendar";
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
                        <header className="schedule__appointment-header">
                            <Navbar />
                        </header>
                        <main className="schedule__appointment-main">
                            <AppointmentCalendar />
                        </main>
                        <Footer />
                    </StandardModalProvider>
                </CalendarEventsProvider>
            </ConfirmationModalProvider>
        </ToastProvider>
    );
};

export default ScheduleAppointment;
