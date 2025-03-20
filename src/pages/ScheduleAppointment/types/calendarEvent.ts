export type CalendarEvent = {
    id: string;
    title: string;
    start: Date;
    end: Date;
    specialty: string;
};

export type DragAndDropCalendar = {
    resourceId: unknown;
    start: Date;
    end: Date;
    event: CalendarEvent;
};
