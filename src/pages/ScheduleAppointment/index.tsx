import Footer from "../../shared/components/Footer";
import Navbar from "../../shared/components/Navbar";
import AppointmentCalendar from "./components/AppointmentCalendar";
import { ConfirmationModalProvider } from "../../shared/context/confirmationModalContext";
import { StandardModalProvider } from "../../shared/context/standardModalContext";
import "./index.css";
import { CalendarEventProvider } from "./context/calendarEventContext";

const ScheduleAppointment = () => {
    return (
        <ConfirmationModalProvider>
            <CalendarEventProvider>
                <StandardModalProvider>
                    <header className="schedule__appointment-header">
                        <Navbar />
                    </header>
                    <main className="schedule__appointment-main">
                        <AppointmentCalendar />
                    </main>
                    <Footer />
                </StandardModalProvider>
            </CalendarEventProvider>
        </ConfirmationModalProvider>
    );
};

export default ScheduleAppointment;
