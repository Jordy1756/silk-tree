import { useState } from "react";
import { useConfirmationModal } from "../../../../shared/hooks/useConfirmartionModal";
import { useUpdateCalendarEvent } from "../../hooks/useUpdateCalendarEvent";
import { useDeleteCalendarEvent } from "../../hooks/useDeleteCalendarEvent";
import ScheduleAppointmentForm from "../SchuduleAppointmentForm";
import Button from "../../../../shared/components/Button";
import "./index.css";

const ScheduleAppointmentDetails = () => {
    const [isEditMode, setIsEditMode] = useState(true);
    const handleIsEditMode = () => setIsEditMode((prev) => !prev);

    const { showModal } = useConfirmationModal();
    const { updateCalendarEvent } = useUpdateCalendarEvent();
    const { deleteCalendarEvent } = useDeleteCalendarEvent();

    return (
        <ScheduleAppointmentForm isNonEditable={isEditMode} onSubmit={updateCalendarEvent}>
            <Button type={!isEditMode ? "button" : "submit"} className="primary" onClick={() => handleIsEditMode()}>
                {isEditMode ? "Editar" : "Actualizar"}
            </Button>
            <Button
                type="button"
                className="secondary"
                onClick={() =>
                    isEditMode ? showModal("Estas seguro?", "Si, eliminar", deleteCalendarEvent) : handleIsEditMode()
                }
            >
                {isEditMode ? "Eliminar" : "Cancelar"}
            </Button>
        </ScheduleAppointmentForm>
    );
};

export default ScheduleAppointmentDetails;
