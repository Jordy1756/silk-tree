import { useForm } from "react-hook-form";
import { AppointmentFormValues } from "../types/appointmentFormTypes";
import { useEffect } from "react";
import { useCalendarEvents } from "./useCalendarEvents";
import { getDefaultFormValues } from "../utility/handleAppointmentForm";

export const useScheduleAppointmentForm = () => {
    const { currentCalendarEvent } = useCalendarEvents();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<AppointmentFormValues>({
        mode: "onBlur",
        defaultValues: getDefaultFormValues(currentCalendarEvent),
    });

    useEffect(() => {
        reset(getDefaultFormValues(currentCalendarEvent));
    }, [currentCalendarEvent.start, currentCalendarEvent.end, currentCalendarEvent.specialty, reset]);

    return { register, handleSubmit, errors };
};
