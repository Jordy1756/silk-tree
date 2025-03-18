import { useState } from "react";
import { useStandardModal } from "../../../shared/hooks/useStandardModal";
import { CalendarEvent } from "../types/calendarEvent";
import { AppointmentFormValues } from "../types/appointmentFormTypes";
import { convertToDate, getFormattedDateString } from "../../../shared/utility/handleDates";
import NewScheduleAppointment from "../components/NewScheduleAppointment";
import ScheduleAppointmentDetails from "../components/ScheduleAppointmentDetails";

const getDates = (appointmentDate: string, initialHour: string, finalHour: string) => {
    const newAppointmentDate = convertToDate(appointmentDate);
    return {
        startDate: new Date(getFormattedDateString(newAppointmentDate, "YYYY-MM-DD") + "T" + initialHour),
        endDate: new Date(getFormattedDateString(newAppointmentDate, "YYYY-MM-DD") + "T" + finalHour),
    };
};

const getNewCalendarEvent = ({ id, title, start, end, specialty }: CalendarEvent) => ({
    id,
    title: `Cita de ${specialty}`,
    start,
    end,
    specialty,
});

export const useCalendarEvents = () => {
    const { showModal, closeModal } = useStandardModal();
    const [calendarEvents, setCalendarEvents] = useState<CalendarEvent[]>([
        {
            id: "1",
            title: "Meeting1",
            start: new Date(2025, 2, 18, 8, 0),
            end: new Date(2025, 2, 18, 9, 0),
            specialty: "1",
        },
        {
            id: "2",
            title: "Meeting2",
            start: new Date(2025, 2, 18, 9, 0),
            end: new Date(2025, 2, 18, 10, 0),
            specialty: "2",
        },
        {
            id: "3",
            title: "Meeting3",
            start: new Date(2025, 2, 18, 10, 0),
            end: new Date(2025, 2, 18, 11, 0),
            specialty: "3",
        },
    ]);
    const [currentView, setCurrentView] = useState("month");
    const handleCurrentView = (view: string) => setCurrentView(view);

    const insertCalendarEvent = ({ appointmentDate, initialHour, finalHour, specialty }: AppointmentFormValues) => {
        const { startDate, endDate } = getDates(appointmentDate, initialHour, finalHour);

        const newCalendarEvent = getNewCalendarEvent({
            id: "",
            title: "",
            start: startDate,
            end: endDate,
            specialty,
        });

        setCalendarEvents((prev) => [...prev, newCalendarEvent]);
        closeModal();
    };

    const deleteCalendarEvent = (calendarEventId: string) => {
        setCalendarEvents((prev) => prev.filter(({ id }) => id !== calendarEventId));
        closeModal();
    };

    const updateCalendarEvent = (
        calendarEventId: string,
        { appointmentDate, initialHour, finalHour, specialty }: AppointmentFormValues
    ) => {
        const { startDate, endDate } = getDates(appointmentDate, initialHour, finalHour);

        setCalendarEvents((prev) =>
            prev.map((event) => {
                if (event.id === calendarEventId) {
                    return getNewCalendarEvent({
                        id: calendarEventId,
                        title: "",
                        start: startDate,
                        end: endDate,
                        specialty,
                    });
                }
                return event;
            })
        );

        closeModal();
    };

    const handleSelectSlot = ({ start: startDate, end: endDate }: CalendarEvent) => {
        showModal(
            "Agendar cita",
            <NewScheduleAppointment
                startDate={startDate}
                endDate={currentView === "month" ? startDate : endDate}
                specialty=""
                insertCalendarEvent={insertCalendarEvent}
            />
        );
    };

    const handleSelectEvent = ({ id, start: startDate, end: endDate, specialty }: CalendarEvent) => {
        showModal(
            "Detalles de la cita",
            <ScheduleAppointmentDetails
                startDate={startDate}
                endDate={endDate}
                specialty={specialty}
                deleteCalendarEvent={() => deleteCalendarEvent(id)}
                updateCalendarEvent={(formValues: AppointmentFormValues) => updateCalendarEvent(id, formValues)}
            />
        );
    };

    return { calendarEvents, handleSelectSlot, handleSelectEvent, currentView, handleCurrentView };
};
