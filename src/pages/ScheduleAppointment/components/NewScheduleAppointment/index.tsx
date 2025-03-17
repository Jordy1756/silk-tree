import type { AppointmentFormValues } from "../../types/appointmentFormTypes";
import { useStandardModal } from "../../../../shared/hooks/useStandardModal";
import ScheduleAppointmentForm from "../SchuduleAppointmentForm";
import Button from "../../../../shared/components/Button";
import "./index.css";

type Props = {
    id: string;
    startDate: Date;
    endDate: Date;
    specialty: string;
    currentView: string;
    insertCalendarEvent: (calendarEvent: AppointmentFormValues) => void;
};

const NewScheduleAppointment = ({ id, startDate, endDate, specialty, currentView, insertCalendarEvent }: Props) => {
    const { closeModal } = useStandardModal();

    return (
        <ScheduleAppointmentForm
            isEditable={{
                isDateNonEditable: true,
                isHourNonEditable: currentView !== "month",
                isSpecialtyNonEditable: false,
            }}
            id={id}
            startDate={startDate}
            endDate={endDate}
            specialty={specialty}
            onSubmit={insertCalendarEvent}
        >
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
