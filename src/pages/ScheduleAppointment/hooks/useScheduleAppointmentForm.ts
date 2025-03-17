import { useForm } from "react-hook-form";
import { AppointmentFormValues } from "../types/appointmentFormTypes";
import { useEffect } from "react";
import { getFormattedDateString } from "../../../shared/utility/handleDates";

const getDefaultFormValues = (startDate: Date, endDate: Date, specialty: string): AppointmentFormValues => ({
    appointmentDate: getFormattedDateString(startDate, "YYYY-MM-DD"),
    initialHour: getFormattedDateString(startDate, "HH:mm"),
    finalHour: getFormattedDateString(endDate, "HH:mm"),
    specialty,
});

export const useScheduleAppointmentForm = (startDate: Date, endDate: Date, specialty: string) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<AppointmentFormValues>({
        mode: "onBlur",
        defaultValues: getDefaultFormValues(startDate, endDate, specialty),
    });

    useEffect(() => {
        reset(getDefaultFormValues(startDate, endDate, specialty));
    }, [startDate, endDate, specialty, reset]);

    return { register, handleSubmit, errors };
};
