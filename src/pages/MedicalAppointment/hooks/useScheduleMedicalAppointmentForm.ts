import { useForm } from "react-hook-form";
import { AppointmentFormValues } from "../types/appointmentFormTypes";
import { useEffect } from "react";
import { useMedicalAppointments } from "./useMedicalAppointments";
import { getDefaultFormValues } from "../utility/handleAppointmentForm";

export const useScheduleMedicalAppointmentForm = () => {
    const { currentMedicalAppointment } = useMedicalAppointments();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<AppointmentFormValues>({
        mode: "onBlur",
        defaultValues: getDefaultFormValues(currentMedicalAppointment),
    });

    useEffect(() => {
        reset(getDefaultFormValues(currentMedicalAppointment));
    }, [currentMedicalAppointment.start, currentMedicalAppointment.end, currentMedicalAppointment.specialty, reset]);

    return { register, handleSubmit, errors };
};
