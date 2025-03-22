import { createContext, ReactNode, useCallback, useState } from "react";
import { CalendarEvent } from "../types/calendarEvent";

type CalendarEventsContextType = {
    currentCalendarEvent: CalendarEvent;
    calendarEvents: CalendarEvent[];
    handleCurrentCalendarEvent: (calendarEvent: CalendarEvent) => void;
    addCalendarEvent: (newEvent: CalendarEvent) => void;
    modifyCalendarEvent: (updatedEvent: CalendarEvent) => void;
    removeCalendarEvent: () => void;
    checkCalendarEventOverlap: (newEvent: CalendarEvent) => boolean;
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
            id: crypto.randomUUID(),
            title: "Meeting1",
            start: new Date(2025, 2, 23, 8, 0),
            end: new Date(2025, 2, 23, 9, 0),
            specialty: "1",
        },
        {
            id: crypto.randomUUID(),
            title: "Meeting2",
            start: new Date(2025, 2, 23, 9, 0),
            end: new Date(2025, 2, 23, 10, 0),
            specialty: "2",
        },
        {
            id: crypto.randomUUID(),
            title: "Meeting3",
            start: new Date(2025, 2, 23, 10, 0),
            end: new Date(2025, 2, 23, 11, 0),
            specialty: "3",
        },
    ]);

    const handleCurrentCalendarEvent = useCallback(
        (calendarEvent: CalendarEvent) => setCurrentCalendarEvent(calendarEvent),
        [setCurrentCalendarEvent]
    );

    const addCalendarEvent = useCallback(
        (newCalendarEvent: CalendarEvent) => setCalendarEvents((prev) => [...prev, newCalendarEvent]),
        [setCalendarEvents]
    );

    const modifyCalendarEvent = useCallback(
        (updatedCalendarEvent: CalendarEvent) => {
            setCalendarEvents((prev) =>
                prev.map((event) => (event.id === updatedCalendarEvent.id ? updatedCalendarEvent : event))
            );
        },
        [setCalendarEvents]
    );

    const removeCalendarEvent = useCallback(
        () => setCalendarEvents((prev) => prev.filter((event) => event.id !== currentCalendarEvent.id)),
        [setCalendarEvents, currentCalendarEvent.id]
    );

    const checkCalendarEventOverlap = (newEvent: CalendarEvent) =>
        calendarEvents.some(({ id, start, end }) => newEvent.id !== id && newEvent.start < end && newEvent.end > start);

    return (
        <CalendarEventsContext.Provider
            value={{
                currentCalendarEvent,
                calendarEvents,
                handleCurrentCalendarEvent,
                addCalendarEvent,
                modifyCalendarEvent,
                removeCalendarEvent,
                checkCalendarEventOverlap,
            }}
        >
            {children}
        </CalendarEventsContext.Provider>
    );
};
