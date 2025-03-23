import { createContext, ReactNode, useCallback, useState } from "react";
import { ICalendarEvent } from "../interfaces/ICalendarEvent";

type CalendarEventsContextType = {
    currentCalendarEvent: ICalendarEvent;
    calendarEvents: ICalendarEvent[];
    handleCurrentCalendarEvent: (calendarEvent: ICalendarEvent) => void;
    addCalendarEvent: (newEvent: ICalendarEvent) => void;
    modifyCalendarEvent: (updatedEvent: ICalendarEvent) => void;
    removeCalendarEvent: () => void;
    checkCalendarEventOverlap: (newEvent: ICalendarEvent) => boolean;
};

export const CalendarEventsContext = createContext<CalendarEventsContextType | undefined>(undefined);

export const CalendarEventsProvider = ({ children }: { children: ReactNode }) => {
    const [currentCalendarEvent, setCurrentCalendarEvent] = useState<ICalendarEvent>({
        id: "",
        title: "",
        start: new Date(),
        end: new Date(),
        specialty: "",
    });

    const [calendarEvents, setCalendarEvents] = useState<ICalendarEvent[]>([
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
        (calendarEvent: ICalendarEvent) => setCurrentCalendarEvent(calendarEvent),
        [setCurrentCalendarEvent]
    );

    const addCalendarEvent = useCallback(
        (newCalendarEvent: ICalendarEvent) => setCalendarEvents((prev) => [...prev, newCalendarEvent]),
        [setCalendarEvents]
    );

    const modifyCalendarEvent = useCallback(
        (updatedCalendarEvent: ICalendarEvent) => {
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

    const checkCalendarEventOverlap = (newEvent: ICalendarEvent) =>
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
