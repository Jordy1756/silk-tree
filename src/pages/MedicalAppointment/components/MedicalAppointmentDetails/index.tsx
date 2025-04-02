import { useState } from "react";
import { useConfirmationModal } from "../../../../shared/hooks/useConfirmartionModal";
import { useUpdateMedicalAppointment } from "../../hooks/useUpdateCalendarEvent";
import { useDeleteMedicalAppointment } from "../../hooks/useDeleteMedicalAppointment";
import MedicalAppointmentForm from "../MedicalAppointmentForm";
import Button from "../../../../shared/components/Button";
import "./index.css";

const MedicalAppointmentDetails = () => {
    const [isEditMode, setIsEditMode] = useState(true);
    const handleIsEditMode = () => setIsEditMode((prev) => !prev);

    const { showModal } = useConfirmationModal();
    const { updateMedicalAppointment: updateCalendarEvent } = useUpdateMedicalAppointment();
    const { deleteMedicalAppointment: deleteCalendarEvent } = useDeleteMedicalAppointment();

    return (
        <MedicalAppointmentForm isNonEditable={isEditMode} onSubmit={updateCalendarEvent}>
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
        </MedicalAppointmentForm>
    );
};

export default MedicalAppointmentDetails;
