import { useEffect, useState } from "react";
import Actionable from "../../../../shared/components/Actionable";
import ScheduleAppointmentForm from "../SchuduleAppointmentForm";
import { useModal } from "../../../../shared/hooks/useModal";
import { useForm } from "react-hook-form";
import { AppointmentFormValues } from "../../types/appointmentFormTypes";
import { getDefaultFormValues } from "../../utility/handleFormValues";
import "./index.css";

type ScheduleAppointmentDetailsProps = {
    id: string;
    startDate: Date;
    endDate: Date;
    specialty: string;
    updateCalendarEvent: (calendarEvent: AppointmentFormValues) => void;
    deleteCalendarEvent: (calendarEventId: string) => void;
};

const ScheduleAppointmentDetails = ({
    id,
    startDate,
    endDate,
    specialty,
    updateCalendarEvent,
    deleteCalendarEvent,
}: ScheduleAppointmentDetailsProps) => {
    const [isEditMode, setIsEditMode] = useState(true);
    const { closeModal } = useModal();
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

    return (
        <ScheduleAppointmentForm
            isEditable={{
                isDateNonEditable: isEditMode,
                isHourNonEditable: isEditMode,
                isSpecialtyNonEditable: isEditMode,
            }}
            register={register}
            handleSubmit={handleSubmit}
            errors={errors}
            onSubmit={updateCalendarEvent}
        >
            <Actionable
                type="button"
                className="primary"
                buttonType={!isEditMode ? "button" : "submit"}
                onClick={() => setIsEditMode(!isEditMode)}
            >
                {isEditMode ? "Editar" : "Actualizar"}
            </Actionable>
            <Actionable
                type="button"
                className="secondary"
                buttonType="button"
                onClick={() => (isEditMode ? deleteCalendarEvent(id) : closeModal())}
            >
                {isEditMode ? "Eliminar" : "Cancelar"}
            </Actionable>
        </ScheduleAppointmentForm>
    );
};

export default ScheduleAppointmentDetails;
