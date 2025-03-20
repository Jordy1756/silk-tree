import { useForm } from "react-hook-form";
import { AppointmentFormValues } from "../types/appointmentFormTypes";
import { useEffect } from "react";
import { getFormattedDateString, DATE_FORMAT, TIME_24_FORMAT } from "../../../shared/utility/handleDates";
import { useCalendarEvents } from "./useCalendarEvents";
import { CalendarEvent } from "../types/calendarEvent";

const getDefaultFormValues = ({ start: startDate, end: endDate, specialty }: CalendarEvent): AppointmentFormValues => ({
    appointmentDate: getFormattedDateString(startDate, DATE_FORMAT),
    initialHour: getFormattedDateString(startDate, TIME_24_FORMAT),
    finalHour: getFormattedDateString(endDate, TIME_24_FORMAT),
    specialty,
});

export const useScheduleAppointmentForm = () => {
    const { currentCalendarEvent: calendarEvent } = useCalendarEvents();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<AppointmentFormValues>({
        mode: "onBlur",
        defaultValues: getDefaultFormValues(calendarEvent),
    });

    useEffect(() => {
        reset(getDefaultFormValues(calendarEvent));
    }, [calendarEvent.start, calendarEvent.end, calendarEvent.specialty, reset]);

    return { register, handleSubmit, errors };
};
