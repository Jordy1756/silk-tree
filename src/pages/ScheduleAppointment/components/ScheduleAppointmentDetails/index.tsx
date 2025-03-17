import { useState } from "react";
import ScheduleAppointmentForm from "../SchuduleAppointmentForm";
import { AppointmentFormValues } from "../../types/appointmentFormTypes";
import { useConfirmationModal } from "../../../../shared/hooks/useConfirmartionModal";
import Button from "../../../../shared/components/Button";
import "./index.css";

type Props = {
    startDate: Date;
    endDate: Date;
    specialty: string;
    updateCalendarEvent: (calendarEvent: AppointmentFormValues) => void;
    deleteCalendarEvent: () => void;
};

const ScheduleAppointmentDetails = ({
    startDate,
    endDate,
    specialty,
    updateCalendarEvent,
    deleteCalendarEvent,
}: Props) => {
    const [isEditMode, setIsEditMode] = useState(true);
    const { showModal } = useConfirmationModal();
    const handleIsEditMode = () => setIsEditMode((prev) => !prev);

    return (
        <ScheduleAppointmentForm
            isNonEditable={isEditMode}
            startDate={startDate}
            endDate={endDate}
            specialty={specialty}
            onSubmit={updateCalendarEvent}
        >
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
