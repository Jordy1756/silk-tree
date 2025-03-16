import { useEffect, useState } from "react";
import Actionable from "../../../../shared/components/Actionable";
import ScheduleAppointmentForm from "../SchuduleAppointmentForm";
import { useStandardModal } from "../../../../shared/hooks/useStandardModal";
import { useForm } from "react-hook-form";
import { AppointmentFormValues } from "../../types/appointmentFormTypes";
import { getDefaultFormValues } from "../../utility/handleFormValues";
import "./index.css";
import { useConfirmationModal } from "../../../../shared/hooks/useConfirmartionModal";

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
    const { showModal } = useConfirmationModal();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<AppointmentFormValues>({
        mode: "onBlur",
        defaultValues: getDefaultFormValues(id, startDate, endDate, specialty),
    });

    const handleIsEditMode = () => setIsEditMode((prev) => !prev);

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
                onClick={() => handleIsEditMode()}
            >
                {isEditMode ? "Editar" : "Actualizar"}
            </Actionable>
            <Actionable
                type="button"
                className="secondary"
                buttonType="button"
                onClick={() =>
                    isEditMode
                        ? showModal("Estas seguro?", "Si, eliminar", () => deleteCalendarEvent(id))
                        : handleIsEditMode()
                }
            >
                {isEditMode ? "Eliminar" : "Cancelar"}
            </Actionable>
        </ScheduleAppointmentForm>
    );
};

export default ScheduleAppointmentDetails;
