import Form from "../../../../shared/components/Form";
import { AppointmentFormValues } from "../../types/appointmentFormTypes";
import { ReactNode } from "react";
import { useSpecialties } from "../../hooks/useSpecialties";
import { useFormValidations } from "../../hooks/useFormValidations";
import { useScheduleAppointmentForm } from "../../hooks/useScheduleAppointmentForm";
import InputBox from "../../../../shared/components/InputBox";
import "./index.css";

type Props = {
    children: ReactNode;
    startDate: Date;
    endDate: Date;
    specialty: string;
    isNonEditable?: boolean;
    onSubmit: (calendarEvent: AppointmentFormValues) => void;
};

const ScheduleAppointmentForm = ({ children, startDate, endDate, specialty, isNonEditable, onSubmit }: Props) => {
    const { specialties } = useSpecialties();
    const { getFormValidation } = useFormValidations();
    const { register, handleSubmit, errors } = useScheduleAppointmentForm(startDate, endDate, specialty);

    return (
        <Form handleSubmit={handleSubmit} onSubmit={onSubmit}>
            <InputBox name="appointmentDate" labelText="Fecha" error={errors.appointmentDate}>
                <input
                    type="date"
                    readOnly={isNonEditable}
                    {...register("appointmentDate", getFormValidation("appointmentDate"))}
                />
            </InputBox>
            <div className="input__box-container">
                <InputBox name="initialHour" labelText="Hora de inicio" error={errors.initialHour}>
                    <input
                        type="time"
                        readOnly={isNonEditable}
                        {...register("initialHour", getFormValidation("initialHour"))}
                    />
                </InputBox>
                <InputBox name="finalHour" labelText="Hora de salida" error={errors.finalHour}>
                    <input
                        type="time"
                        readOnly={isNonEditable}
                        {...register("finalHour", getFormValidation("finalHour"))}
                    />
                </InputBox>
            </div>
            <InputBox name="specialty" labelText="Especialidad" error={errors.specialty}>
                <select {...register("specialty", getFormValidation("specialty"))} disabled={isNonEditable}>
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
