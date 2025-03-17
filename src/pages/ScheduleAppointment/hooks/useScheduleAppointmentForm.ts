import { useForm } from "react-hook-form";
import { AppointmentFormValues } from "../types/appointmentFormTypes";
import { useEffect } from "react";
import { getDefaultFormValues } from "../utility/handleFormValues";

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
