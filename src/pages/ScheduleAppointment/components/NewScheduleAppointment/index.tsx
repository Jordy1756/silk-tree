import type { AppointmentFormValues } from "../../types/appointmentFormTypes";
import { useForm } from "react-hook-form";
import "./index.css";
import Actionable from "../../../../shared/components/Actionable";
import ScheduleAppointmentForm from "../SchuduleAppointmentForm";
import { getDefaultFormValues } from "../../utility/handleFormValues";
import { useStandardModal } from "../../../../shared/hooks/useStandardModal";
import { useEffect } from "react";

type NewScheduleAppointmentProps = {
    id: string;
    startDate: Date;
    endDate: Date;
    specialty: string;
    currentView: string;
    insertCalendarEvent: (calendarEvent: AppointmentFormValues) => void;
};

const NewScheduleAppointment = ({
    id,
    startDate,
    endDate,
    specialty,
    currentView,
    insertCalendarEvent,
}: NewScheduleAppointmentProps) => {
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
            <Actionable type="button" className="primary" buttonType="submit">
                Agendar
            </Actionable>
            <Actionable type="button" className="secondary" buttonType="reset" onClick={() => closeModal()}>
                Cancelar
            </Actionable>
        </ScheduleAppointmentForm>
    );
};

export default NewScheduleAppointment;
