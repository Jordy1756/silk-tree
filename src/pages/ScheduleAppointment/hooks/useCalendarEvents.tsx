import { useCallback, useState } from "react";
import { useModal } from "../../../shared/hooks/useModal";
import NewAppointmentForm from "../components/NewAppointmentForm";
import { CalendarEvent } from "../types/calendarEvent";
import AppointmentDetails from "../components/AppointmentDetails";
import { AppointmentFormValues } from "../types/appointmentFormTypes";
import { getFormattedDateString } from "../../../shared/utility/handleDates";

// type CalendarEventActions = "insert" | "edit" | "update" | "delete";

// const getDefaultFormValues = (startDate: Date, endDate: Date): AppointmentFormValues => {
//     return {
//         startDate,
//         endDate,
//         isEditHour: false,
//         appointmentDate: getFormattedDateString(startDate, "YYYY-MM-DD"),
//         initialHour: getFormattedDateString(startDate, "HH:mm"),
//         finalHour: getFormattedDateString(endDate, "HH:mm"),
//         specialty: "",
//     };
// };

export const useCalendarEvents = (events: CalendarEvent[]) => {
    const { showModal } = useModal();
    const [calendarEvents, setCalendarEvents] = useState<CalendarEvent[]>(events);
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
            title: `Cita de ${specialty}`,
            startDate,
            endDate,
            specialty,
        };

        setCalendarEvents((prev) => [...prev, newCalendarEvent]);
    };

    // const calendarEventActions = {
    //     insert: {
    //         primaryButtonText: "Agendar",
    //         secondaryButtonText: "Cancelar",
    //         primaryButtonAction: insertCalendarEvent,
    //     },
    //     edit: {
    //         primaryButtonText: "Editar",
    //         secondaryButtonText: "Eliminar",
    //     },
    //     update: {
    //         primaryButtonText: "Actualizar",
    //         secondaryButtonText: "Cancelar",
    //     },
    // };

    const handleSelectSlot = ({ startDate, endDate }: CalendarEvent) => {
        showModal(
            "Agendar cita",
            <NewAppointmentForm
                startDate={startDate}
                endDate={currentView === "month" ? startDate : endDate}
                isEditHour={currentView !== "month"}
                handleCalendarAction={insertCalendarEvent}
            />
        );
    };

    const handleSelectEvent = useCallback(
        (calendarEvent: CalendarEvent) => {
            showModal("Detalles de la cita", <AppointmentDetails {...calendarEvent} />);
        },
        [showModal]
    );

    return { calendarEvents, handleSelectSlot, handleSelectEvent, currentView, handleCurrentView };
};
