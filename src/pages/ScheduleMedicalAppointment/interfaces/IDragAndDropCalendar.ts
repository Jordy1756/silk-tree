import { ICalendarEvent } from "./ICalendarEvent";

export interface IDragAndDropCalendar {
    resourceId: unknown;
    start: Date;
    end: Date;
    event: ICalendarEvent;
}
