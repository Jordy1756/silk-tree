import type { AppointmentFormValues } from "../../types/appointmentFormTypes";
import { useForm } from "react-hook-form";
import ScheduleAppointmentForm from "../SchuduleAppointmentForm";
import { getDefaultFormValues } from "../../utility/handleFormValues";
import { useStandardModal } from "../../../../shared/hooks/useStandardModal";
import { useEffect } from "react";
import "./index.css";
import Button from "../../../../shared/components/Button";

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
                isDateNonEditable: true,
                isHourNonEditable: currentView !== "month",
                isSpecialtyNonEditable: false,
            }}
            register={register}
            handleSubmit={handleSubmit}
            errors={errors}
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
