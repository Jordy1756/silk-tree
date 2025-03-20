import { createContext, ReactNode, useCallback, useState } from "react";
import { CalendarEvent } from "../types/calendarEvent";

type CalendarEventsContextType = {
    currentCalendarEvent: CalendarEvent;
    calendarEvents: CalendarEvent[];
    handleCurrentCalendarEvent: (calendarEvent: CalendarEvent) => void;
    addCalendarEvent: (newEvent: CalendarEvent) => void;
    modifyCalendarEvent: (updatedEvent: CalendarEvent) => void;
    removeCalendarEvent: () => void;
    checkEventOverlap: (newEvent: CalendarEvent) => boolean;
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
            start: new Date(2025, 2, 23, 8, 0),
            end: new Date(2025, 2, 23, 9, 0),
            specialty: "1",
        },
        {
            id: "2",
            title: "Meeting2",
            start: new Date(2025, 2, 24, 9, 0),
            end: new Date(2025, 2, 24, 10, 0),
            specialty: "2",
        },
        {
            id: "3",
            title: "Meeting3",
            start: new Date(2025, 2, 25, 10, 0),
            end: new Date(2025, 2, 25, 11, 0),
            specialty: "3",
        },
    ]);

    const handleCurrentCalendarEvent = useCallback(
        (calendarEvent: CalendarEvent) => setCurrentCalendarEvent(calendarEvent),
        []
    );

    const addCalendarEvent = useCallback(
        (newEvent: CalendarEvent) => setCalendarEvents((prev) => [...prev, newEvent]),
        [setCalendarEvents]
    );

    const modifyCalendarEvent = useCallback(
        (updatedEvent: CalendarEvent) =>
            setCalendarEvents((prev) => prev.map((event) => (event.id === updatedEvent.id ? updatedEvent : event))),
        [setCalendarEvents]
    );

    const removeCalendarEvent = useCallback(
        () => setCalendarEvents((prev) => prev.filter((event) => event.id !== currentCalendarEvent.id)),
        [setCalendarEvents, currentCalendarEvent]
    );

    const checkEventOverlap = (newEvent: CalendarEvent) =>
        calendarEvents.some(({ start, end }) => newEvent.start < end && newEvent.end > start);

    return (
        <CalendarEventsContext.Provider
            value={{
                currentCalendarEvent,
                calendarEvents,
                handleCurrentCalendarEvent,
                addCalendarEvent,
                modifyCalendarEvent,
                removeCalendarEvent,
                checkEventOverlap,
            }}
        >
            {children}
        </CalendarEventsContext.Provider>
    );
};
