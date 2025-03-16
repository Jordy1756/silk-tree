import { useCalendar } from "./hooks/useCalendar";
import Footer from "../../shared/components/Footer";
import Navbar from "../../shared/components/Navbar";
import AppointmentCalendar from "./components/Calendar";
import "./index.css";
import { useCalendarEvents } from "./hooks/useCalendarEvents";

const ScheduleAppointment = () => {
    const { localizer, startAccessor, endAccessor, views, min, max, messages } = useCalendar();
    const { calendarEvents, handleCurrentView, handleSelectEvent, handleSelectSlot } = useCalendarEvents();

    return (
        <>
            <header className="schedule__appointment-header">
                <Navbar />
            </header>
            <main className="schedule__appointment-main">
                <AppointmentCalendar
                    localizer={localizer}
                    startAccessor={startAccessor}
                    endAccessor={endAccessor}
                    views={views}
                    min={min}
                    max={max}
                    messages={messages}
                    events={calendarEvents}
                    selectable={true}
                    popup={true}
                    onSelectEvent={handleSelectEvent}
                    onSelectSlot={handleSelectSlot}
                    handleCurrentView={handleCurrentView}
                />
            </main>
            <Footer />
        </>
    );
};

export default ScheduleAppointment;
