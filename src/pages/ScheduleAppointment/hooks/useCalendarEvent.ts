import { useContext } from "react";
import { CalendarEventContext } from "../context/calendarEventContext";

export const useCalendarEvent = () => {
    const context = useContext(CalendarEventContext);
    if (!context) throw new Error("useCalendarEvent debe estar dentro de un CalendarEventProvider");

    return context;
};
