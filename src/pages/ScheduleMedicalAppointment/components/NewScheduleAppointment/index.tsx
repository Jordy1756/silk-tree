import { useStandardModal } from "../../../../shared/hooks/useStandardModal";
import { useInsertMedicalAppointment } from "../../hooks/useInsertMedicalAppointment";
import ScheduleAppointmentForm from "../SchuduleAppointmentForm";
import Button from "../../../../shared/components/Button";
import "./index.css";

const NewScheduleAppointment = () => {
    const { closeModal } = useStandardModal();
    const { insertCalendarEvent } = useInsertMedicalAppointment();

    return (
        <ScheduleAppointmentForm onSubmit={insertCalendarEvent}>
            <Button type="submit" className="primary">
                Agendar
            </Button>
            <Button type="reset" className="secondary" onClick={() => closeModal()}>
                Cancelar
            </Button>
        </ScheduleAppointmentForm>
    );
};

export default NewScheduleAppointment;
