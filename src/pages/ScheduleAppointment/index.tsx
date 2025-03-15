import { useCalendar } from "./hooks/useCalendar";
import Footer from "../../shared/components/Footer";
import Navbar from "../../shared/components/Navbar";
import AppointmentCalendar from "./components/Calendar";
import "./index.css";
import { useCalendarEvents } from "./hooks/useCalendarEvents";

const ScheduleAppointment = () => {
    const { localizer, startAccessor, endAccessor, views, min, max, messages } = useCalendar();

    const events = [
        {
            title: "Meeting1",
            start: new Date(2025, 2, 11, 8, 0),
            end: new Date(2025, 2, 11, 9, 0),
            specialty: "1",
        },
        {
            title: "Meeting2",
            start: new Date(2025, 2, 11, 9, 0),
            end: new Date(2025, 2, 11, 10, 0),
            specialty: "2",
        },
        {
            title: "Meeting3",
            start: new Date(2025, 2, 11, 10, 0),
            end: new Date(2025, 2, 11, 11, 0),
            specialty: "3",
        },
        {
            title: "Meeting3",
            start: new Date(2025, 2, 11, 11, 0),
            end: new Date(2025, 2, 11, 12, 0),
            specialty: "4",
        },
        {
            title: "Meeting3",
            start: new Date(2025, 2, 11, 12, 0),
            end: new Date(2025, 2, 11, 13, 0),
            specialty: "5",
        },
        {
            title: "Meeting3",
            start: new Date(2025, 2, 11, 13, 0),
            end: new Date(2025, 2, 11, 14, 0),
            specialty: "6",
        },
        {
            title: "Meeting10",
            start: new Date(2025, 2, 11, 14, 0),
            end: new Date(2025, 2, 11, 15, 0),
            specialty: "7",
        },
    ];

    const { calendarEvents, handleCurrentView, handleSelectEvent, handleSelectSlot } = useCalendarEvents(events);

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
