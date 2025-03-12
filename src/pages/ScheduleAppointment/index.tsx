import type { CalendarEvent } from "./types/calendarEvent";
import { useCallback, useState } from "react";
import { useCalendar } from "./hooks/useCalendar";
import { useModal } from "../../shared/hooks/useModal";
import Footer from "../../shared/components/Footer";
import Navbar from "../../shared/components/Navbar";
import AppointmentCalendar from "./components/Calendar";
import NewAppointmentForm from "./components/NewAppointmentForm";
import AppointmentDetails from "./components/AppointmentDetails";
import "./index.css";

const ScheduleAppointment = () => {
    const { localizer, startAccessor, endAccessor, views, min, max, messages } = useCalendar();
    const { showModal } = useModal();
    const [currentView, setCurrentView] = useState("month");


    const handleCurrentView = (view: string) => setCurrentView(view);

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
                    events={events}
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
