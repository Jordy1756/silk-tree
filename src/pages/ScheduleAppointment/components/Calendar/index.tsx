import { Calendar } from "react-big-calendar";
import "./index.css";

type AppointmentCalendarProps = {
    localizer: any;
    startAccessor?: string;
    endAccessor?: string;
    events: any[];
    views?: string[];
    min?: Date;
    max?: Date;
    messages: Record<string, string>;
    selectable?: boolean;
    popup?: boolean;
    onSelectEvent?: any;
    onSelectSlot?: any;
    handleCurrentView?: (view: string) => void;
};

const AppointmentCalendar = ({
    localizer,
    startAccessor,
    endAccessor,
    events,
    views,
    min,
    max,
    messages,
    selectable,
    popup,
    onSelectEvent,
    onSelectSlot,
    handleCurrentView,
}: AppointmentCalendarProps) => {
    return (
        <Calendar
            localizer={localizer}
            startAccessor={startAccessor}
            endAccessor={endAccessor}
            style={{ height: "100vh" }}
            events={events}
            views={views}
            min={min}
            max={max}
            messages={messages}
            selectable={selectable}
            popup={popup}
            onSelectEvent={onSelectEvent}
            onSelectSlot={onSelectSlot}
            onView={handleCurrentView}
        />
    );
};

export default AppointmentCalendar;
