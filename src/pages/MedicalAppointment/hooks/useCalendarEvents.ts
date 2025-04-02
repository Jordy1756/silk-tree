import { useContext } from "react";
import { CalendarEventsContext } from "../context/calendarEventsContext";

export const useCalendarEvents = () => {
    const context = useContext(CalendarEventsContext);
    if (!context) throw new Error("useCalendarEvent debe estar dentro de un CalendarEventProvider");

    return context;
};
