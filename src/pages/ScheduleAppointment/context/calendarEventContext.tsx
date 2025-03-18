import { createContext, ReactNode, useState } from "react";
import { CalendarEvent } from "../types/calendarEvent";

type CalendarEventContextType = {
    currentCalendarEvent: CalendarEvent;
    calendarEvents: CalendarEvent[];
    handleCurrentCalendarEvent: (calendarEvent: CalendarEvent) => void;
    addCalendarEvent: (newEvent: CalendarEvent) => void;
    modifyCalendarEvent: (updatedEvent: CalendarEvent) => void;
    removeCalendarEvent: (id: string) => void;
};

export const CalendarEventContext = createContext<CalendarEventContextType | undefined>(undefined);

export const CalendarEventProvider = ({ children }: { children: ReactNode }) => {
    const [currentCalendarEvent, setCurrentCalendarEvent] = useState<CalendarEvent>({
        id: "",
        title: "",
        start: new Date(),
        end: new Date(),
        specialty: "",
    });

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

    const handleCurrentCalendarEvent = (calendarEvent: CalendarEvent) => setCurrentCalendarEvent(calendarEvent);

    const addCalendarEvent = (newEvent: CalendarEvent) => setCalendarEvents((prev) => [...prev, newEvent]);

    const modifyCalendarEvent = (updatedEvent: CalendarEvent) =>
        setCalendarEvents((prev) => prev.map((event) => (event.id === updatedEvent.id ? updatedEvent : event)));

    const removeCalendarEvent = (id: string) => setCalendarEvents((prev) => prev.filter((event) => event.id !== id));

    return (
        <CalendarEventContext.Provider
            value={{
                currentCalendarEvent,
                calendarEvents,
                handleCurrentCalendarEvent,
                addCalendarEvent,
                modifyCalendarEvent,
                removeCalendarEvent,
            }}
        >
            {children}
        </CalendarEventContext.Provider>
    );
};
