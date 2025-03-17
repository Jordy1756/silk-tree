import Form from "../../../../shared/components/Form";
import { FieldErrors, UseFormHandleSubmit, UseFormRegister } from "react-hook-form";
import { AppointmentFormValues } from "../../types/appointmentFormTypes";
import { ReactNode } from "react";
import { useSpecialties } from "../../hooks/useSpecialties";
import { useFormValidations } from "../../hooks/useFormValidations";
import InputBox from "../../../../shared/components/InputBox";
import "./index.css";
import { useScheduleAppointmentForm } from "../../hooks/useScheduleAppointmentForm";

type Props = {
    children: ReactNode;
    id: string;
    startDate: Date;
    endDate: Date;
    specialty: string;
    isEditable: {
        isDateNonEditable: boolean;
        isHourNonEditable: boolean;
        isSpecialtyNonEditable: boolean;
    };
    onSubmit: (calendarEvent: AppointmentFormValues) => void;
};

const ScheduleAppointmentForm = ({
    children,
    id,
    startDate,
    endDate,
    specialty,
    isEditable: { isDateNonEditable, isHourNonEditable, isSpecialtyNonEditable },
    onSubmit,
}: Props) => {
    const { specialties } = useSpecialties();
    const { getFormValidation } = useFormValidations();
    const { register, handleSubmit, errors } = useScheduleAppointmentForm(id, startDate, endDate, specialty);

    return (
        <Form handleSubmit={handleSubmit} onSubmit={onSubmit}>
            <InputBox name="appointmentDate" labelText="Fecha" error={errors.appointmentDate}>
                <input
                    type="date"
                    readOnly={isDateNonEditable}
                    {...register("appointmentDate", getFormValidation("appointmentDate"))}
                />
            </InputBox>
            <div className="input__box-container">
                <InputBox name="initialHour" labelText="Hora de inicio" error={errors.initialHour}>
                    <input
                        type="time"
                        readOnly={isHourNonEditable}
                        {...register("initialHour", getFormValidation("initialHour"))}
                    />
                </InputBox>
                <InputBox name="finalHour" labelText="Hora de salida" error={errors.finalHour}>
                    <input
                        type="time"
                        readOnly={isHourNonEditable}
                        {...register("finalHour", getFormValidation("finalHour"))}
                    />
                </InputBox>
            </div>
            <InputBox name="specialty" labelText="Especialidad" error={errors.specialty}>
                <select {...register("specialty", getFormValidation("specialty"))} disabled={isSpecialtyNonEditable}>
                    <option value="" disabled>
                        Selecciona una opción
                    </option>
                    {specialties.map(({ value, label }) => (
                        <option key={value} value={value}>
                            {label}
                        </option>
                    ))}
                </select>
            </InputBox>
            <div className="form__actions">{children}</div>
        </Form>
    );
};

export default ScheduleAppointmentForm;
