import { useForm } from "react-hook-form";
import { AppointmentFormValues } from "../types/appointmentFormTypes";
import { useEffect } from "react";
import { getFormattedDateString } from "../../../shared/utility/handleDates";

const getDefaultFormValues = (
    id: string,
    startDate: Date,
    endDate: Date,
    specialty: string
): AppointmentFormValues => ({
    id,
    startDate,
    endDate,
    isEditHour: false,
    appointmentDate: getFormattedDateString(startDate, "YYYY-MM-DD"),
    initialHour: getFormattedDateString(startDate, "HH:mm"),
    finalHour: getFormattedDateString(endDate, "HH:mm"),
    specialty,
});

export const useScheduleAppointmentForm = (id: string, startDate: Date, endDate: Date, specialty: string) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<AppointmentFormValues>({
        mode: "onBlur",
        defaultValues: getDefaultFormValues(id, startDate, endDate, specialty),
    });

    useEffect(() => {
        reset(getDefaultFormValues(id, startDate, endDate, specialty));
    }, [id, startDate, endDate, specialty, reset]);

    return { register, handleSubmit, errors };
};
