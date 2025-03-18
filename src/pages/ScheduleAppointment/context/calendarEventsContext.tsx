import { createContext, ReactNode, useCallback, useState } from "react";
import { CalendarEvent } from "../types/calendarEvent";

type CalendarEventsContextType = {
    currentCalendarEvent: CalendarEvent;
    calendarEvents: CalendarEvent[];
    handleCurrentCalendarEvent: (calendarEvent: CalendarEvent) => void;
    addCalendarEvent: (newEvent: CalendarEvent) => void;
    modifyCalendarEvent: (updatedEvent: CalendarEvent) => void;
    removeCalendarEvent: (id: string) => void;
    resizeEvent: (calendarEvent: CalendarEvent) => void;
};

export const CalendarEventsContext = createContext<CalendarEventsContextType | undefined>(undefined);

export const CalendarEventsProvider = ({ children }: { children: ReactNode }) => {
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

    const resizeEvent = useCallback(
        ({ id, start, end }: CalendarEvent) => {
            console.log({ id, start, end, currentCalendarEventId: currentCalendarEvent.id });
            setCalendarEvents((prev) => {
                const existing = prev.find((ev) => ev.id === id);
                if (!existing) return prev; 
                const filtered = prev.filter((ev) => ev.id !== id);
                return [...filtered, { ...existing, start, end }];
            });
        },
        [setCalendarEvents]
    );

    return (
        <CalendarEventsContext.Provider
            value={{
                currentCalendarEvent,
                calendarEvents,
                handleCurrentCalendarEvent,
                addCalendarEvent,
                modifyCalendarEvent,
                removeCalendarEvent,
                resizeEvent,
            }}
        >
            {children}
        </CalendarEventsContext.Provider>
    );
};
