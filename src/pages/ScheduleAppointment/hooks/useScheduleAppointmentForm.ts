import { useForm } from "react-hook-form";
import { AppointmentFormValues } from "../types/appointmentFormTypes";
import { useEffect } from "react";
import { getFormattedDateString } from "../../../shared/utility/handleDates";
import { useCalendarEvent } from "./useCalendarEvent";
import { CalendarEvent } from "../types/calendarEvent";

const getDefaultFormValues = ({ start: startDate, end: endDate, specialty }: CalendarEvent): AppointmentFormValues => ({
    appointmentDate: getFormattedDateString(startDate, "YYYY-MM-DD"),
    initialHour: getFormattedDateString(startDate, "HH:mm"),
    finalHour: getFormattedDateString(endDate, "HH:mm"),
    specialty,
});

export const useScheduleAppointmentForm = () => {
    const { currentCalendarEvent: calendarEvent } = useCalendarEvent();
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
