import { useState } from "react";
import { useModal } from "../../../shared/hooks/useModal";
import NewScheduleAppointment from "../components/NewScheduleAppointment";
import { CalendarEvent } from "../types/calendarEvent";
import { AppointmentFormValues } from "../types/appointmentFormTypes";
import { getFormattedDateString } from "../../../shared/utility/handleDates";
import ScheduleAppointmentDetails from "../components/ScheduleAppointmentDetails";

export const useCalendarEvents = () => {
    const { showModal, closeModal } = useModal();
    const [calendarEvents, setCalendarEvents] = useState<CalendarEvent[]>([
        {
            id: "1",
            title: "Meeting1",
            start: new Date(2025, 2, 11, 8, 0),
            end: new Date(2025, 2, 11, 9, 0),
            specialty: "1",
        },
        {
            id: "2",
            title: "Meeting2",
            start: new Date(2025, 2, 11, 9, 0),
            end: new Date(2025, 2, 11, 10, 0),
            specialty: "2",
        },
        {
            id: "3",
            title: "Meeting3",
            start: new Date(2025, 2, 11, 10, 0),
            end: new Date(2025, 2, 11, 11, 0),
            specialty: "3",
        },
    ]);

    const [currentView, setCurrentView] = useState("month");
    const handleCurrentView = (view: string) => setCurrentView(view);

    const insertCalendarEvent = ({
        startDate,
        endDate,
        isEditHour,
        initialHour,
        finalHour,
        specialty,
    }: AppointmentFormValues) => {
        if (!isEditHour) {
            startDate = new Date(getFormattedDateString(startDate, "YYYY-MM-DD") + "T" + initialHour);
            endDate = new Date(getFormattedDateString(startDate, "YYYY-MM-DD") + "T" + finalHour);
        }

        const newCalendarEvent: CalendarEvent = {
            id: "10",
            title: `Cita de ${specialty}`,
            start: startDate,
            end: endDate,
            specialty,
        };

        setCalendarEvents((prev) => [...prev, newCalendarEvent]);
    };

    const deleteCalendarEvent = (calendarEventId: string) =>
        setCalendarEvents((prev) => prev.filter(({ id }) => id !== calendarEventId));

    const updateCalendarEvent = ({
        id,
        startDate: newStartDate,
        endDate: newEndDate,
        appointmentDate,
        isEditHour,
        initialHour,
        finalHour,
        specialty: newSpecialty,
    }: AppointmentFormValues) => {
        const newAppointmentDate = new Date(appointmentDate);
        
        if (!isEditHour) {
            newStartDate = new Date(getFormattedDateString(newAppointmentDate, "YYYY-MM-DD") + "T" + initialHour);
            newEndDate = new Date(getFormattedDateString(newAppointmentDate, "YYYY-MM-DD") + "T" + finalHour);
        }

        setCalendarEvents((prev) =>
            prev.map((event) => {
                if (event.id === id) {
                    return {
                        ...event,
                        title: `Cita de ${newSpecialty}`,
                        start: newStartDate,
                        end: newEndDate,
                        specialty: newSpecialty,
                    };
                }
                return event;
            })
        );
    };

    const handleSelectSlot = ({ id, start: startDate, end: endDate }: CalendarEvent) => {
        showModal(
            "Agendar cita",
            <NewScheduleAppointment
                id={id}
                startDate={startDate}
                endDate={currentView === "month" ? startDate : endDate}
                specialty=""
                currentView={currentView}
                insertCalendarEvent={insertCalendarEvent}
            />
        );
    };

    const handleSelectEvent = ({ id, start: startDate, end: endDate, specialty }: CalendarEvent) => {
        showModal(
            "Detalles de la cita",
            <ScheduleAppointmentDetails
                id={id}
                startDate={startDate}
                endDate={endDate}
                specialty={specialty}
                deleteCalendarEvent={deleteCalendarEvent}
                updateCalendarEvent={updateCalendarEvent}
            />
        );
    };

    return { calendarEvents, handleSelectSlot, handleSelectEvent, currentView, handleCurrentView };
};
