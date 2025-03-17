import Form from "../../../../shared/components/Form";
import { FieldErrors, UseFormHandleSubmit, UseFormRegister } from "react-hook-form";
import { AppointmentFormValues } from "../../types/appointmentFormTypes";
import { ReactNode } from "react";
import { useSpecialties } from "../../hooks/useSpecialties";
import { useFormValidations } from "../../hooks/useFormValidations";
import InputBox from "../../../../shared/components/InputBox";
import "./index.css";

type Props = {
    children: ReactNode;
    isEditable: {
        isDateNonEditable: boolean;
        isHourNonEditable: boolean;
        isSpecialtyNonEditable: boolean;
    };
    register: UseFormRegister<AppointmentFormValues>;
    handleSubmit: UseFormHandleSubmit<AppointmentFormValues>;
    errors: FieldErrors<AppointmentFormValues>;
    onSubmit: (calendarEvent: AppointmentFormValues) => void;
};

const ScheduleAppointmentForm = ({
    children,
    isEditable: { isDateNonEditable, isHourNonEditable, isSpecialtyNonEditable },
    register,
    handleSubmit,
    errors: { appointmentDate, initialHour, finalHour, specialty },
    onSubmit,
}: Props) => {
    const { specialties } = useSpecialties();
    const { getFormValidation } = useFormValidations();

    return (
        <Form handleSubmit={handleSubmit} onSubmit={onSubmit}>
            <InputBox name="appointmentDate" labelText="Fecha" error={appointmentDate}>
                <input
                    type="date"
                    readOnly={isDateNonEditable}
                    {...register("appointmentDate", getFormValidation("appointmentDate"))}
                />
            </InputBox>
            <div className="input__box-container">
                <InputBox name="initialHour" labelText="Hora de inicio" error={initialHour}>
                    <input
                        type="time"
                        readOnly={isHourNonEditable}
                        {...register("initialHour", getFormValidation("initialHour"))}
                    />
                </InputBox>
                <InputBox name="finalHour" labelText="Hora de salida" error={finalHour}>
                    <input
                        type="time"
                        readOnly={isHourNonEditable}
                        {...register("finalHour", getFormValidation("finalHour"))}
                    />
                </InputBox>
            </div>
            <InputBox name="specialty" labelText="Especialidad" error={specialty}>
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
