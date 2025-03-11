import { useCallback, useState } from "react";
import { useCalendar } from "./hooks/useCalendar";
import { useModal } from "../../shared/hooks/useModal";
import Footer from "../../shared/components/Footer";
import Navbar from "../../shared/components/Navbar";
import AppointmentCalendar from "./components/Calendar";
import NewAppointmentForm from "./components/NewAppointmentForm";
import dayjs from "dayjs";
import "./index.css";

const ScheduleAppointment = () => {
    const { localizer, startAccessor, endAccessor, views, min, max, messages } = useCalendar();
    const { showModal } = useModal();

    const [events, setEvents] = useState([
        {
            title: "Meeting1",
            start: new Date(2025, 2, 11, 8, 0),
            end: new Date(2025, 2, 11, 9, 0),
        },
        {
            title: "Meeting2",
            start: new Date(2025, 2, 11, 9, 0),
            end: new Date(2025, 2, 11, 10, 0),
        },
        {
            title: "Meeting3",
            start: new Date(2025, 2, 11, 10, 0),
            end: new Date(2025, 2, 11, 11, 0),
        },
        {
            title: "Meeting3",
            start: new Date(2025, 2, 11, 11, 0),
            end: new Date(2025, 2, 11, 12, 0),
        },
        {
            title: "Meeting3",
            start: new Date(2025, 2, 11, 12, 0),
            end: new Date(2025, 2, 11, 13, 0),
        },
        {
            title: "Meeting3",
            start: new Date(2025, 2, 11, 13, 0),
            end: new Date(2025, 2, 11, 14, 0),
        },
        {
            title: "Meeting10",
            start: new Date(2025, 2, 11, 14, 0),
            end: new Date(2025, 2, 11, 15, 0),
        },
    ]);

    const handleEvents = (events: any) => setEvents((prev) => [...prev, ...events]);

    const handleSelectSlot = useCallback(
        ({ start, end }: { start: Date; end: Date }) => {
            showModal(
                "Agendar cita",
                <NewAppointmentForm startDate={start} endDate={end} handleEvents={handleEvents} />
            );
        },
        [setEvents]
    );

    const handleSelectEvent = useCallback(
        (event: any) =>
            showModal(
                "Detalles de la cita",
                <p>
                    Cita {event.title} para {dayjs(event.start).format("DD/MM/YYYY HH:mm")} -{" "}
                    {dayjs(event.end).format("DD/MM/YYYY HH:mm")}
                </p>
            ),
        []
    );

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
                    onSelectEvent={handleSelectEvent}
                    onSelectSlot={handleSelectSlot}
                    selectable={true}
                />
            </main>
            <Footer />
        </>
    );
};

export default ScheduleAppointment;
