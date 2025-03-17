import { useEffect, useState } from "react";
import ScheduleAppointmentForm from "../SchuduleAppointmentForm";
import { useForm } from "react-hook-form";
import { AppointmentFormValues } from "../../types/appointmentFormTypes";
import { getDefaultFormValues } from "../../utility/handleFormValues";
import { useConfirmationModal } from "../../../../shared/hooks/useConfirmartionModal";
import Button from "../../../../shared/components/Button";
import "./index.css";

type Props = {
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
}: Props) => {
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
            <Button type={!isEditMode ? "button" : "submit"} className="primary" onClick={() => handleIsEditMode()}>
                {isEditMode ? "Editar" : "Actualizar"}
            </Button>
            <Button
                type="button"
                className="secondary"
                onClick={() =>
                    isEditMode
                        ? showModal("Estas seguro?", "Si, eliminar", () => deleteCalendarEvent(id))
                        : handleIsEditMode()
                }
            >
                {isEditMode ? "Eliminar" : "Cancelar"}
            </Button>
        </ScheduleAppointmentForm>
    );
};

export default ScheduleAppointmentDetails;
