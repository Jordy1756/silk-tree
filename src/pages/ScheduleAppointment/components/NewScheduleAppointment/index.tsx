import { useStandardModal } from "../../../../shared/hooks/useStandardModal";
import { useInsertCalendarEvent } from "../../hooks/useInsertCalendarEvent";
import ScheduleAppointmentForm from "../SchuduleAppointmentForm";
import Button from "../../../../shared/components/Button";
import "./index.css";

const NewScheduleAppointment = () => {
    const { closeModal } = useStandardModal();
    const { insertCalendarEvent } = useInsertCalendarEvent();

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
