import Footer from "../../shared/components/Footer";
import Navbar from "../../shared/components/Navbar";
import AppointmentCalendar from "./components/AppointmentCalendar";
import { ConfirmationModalProvider } from "../../shared/context/confirmationModalContext";
import { StandardModalProvider } from "../../shared/context/standardModalContext";
import "./index.css";

const ScheduleAppointment = () => {
    return (
        <ConfirmationModalProvider>
            <StandardModalProvider>
                <header className="schedule__appointment-header">
                    <Navbar />
                </header>
                <main className="schedule__appointment-main">
                    <AppointmentCalendar />
                </main>
                <Footer />
            </StandardModalProvider>
        </ConfirmationModalProvider>
    );
};

export default ScheduleAppointment;
