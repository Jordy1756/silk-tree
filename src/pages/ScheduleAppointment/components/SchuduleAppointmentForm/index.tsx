import "./index.css";
import Form from "../../../../shared/components/Form";
import { FieldErrors, UseFormHandleSubmit, UseFormRegister } from "react-hook-form";
import { AppointmentFormValues } from "../../types/appointmentFormTypes";
import { ReactNode } from "react";
import { useSpecialties } from "../../hooks/useSpecialties";
import InputBox from "../../../../shared/components/InputBox";

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

    return (
        <Form handleSubmit={handleSubmit} onSubmit={onSubmit}>
            <InputBox name="appointmentDate" labelText="Fecha" error={appointmentDate}>
                <input
                    type="date"
                    readOnly={isDateNonEditable}
                    {...register("appointmentDate", {
                        required: { value: true, message: "La fecha es requerida" },
                    })}
                />
            </InputBox>
            <div className="input__box-container">
                <InputBox name="initialHour" labelText="Hora de inicio" error={initialHour}>
                    <input
                        type="time"
                        readOnly={isHourNonEditable}
                        {...register("initialHour", {
                            required: { value: true, message: "La hora de inicio es requerida" },
                            min: { value: "08:00", message: "La hora de inicio no puede ser antes de las 8:00" },
                            max: { value: "19:00", message: "La hora de inicio no puede ser después de las 19:00" },
                            pattern: {
                                value: /^([0-9]|0[0-9]|1[0-9]|2[0-3]):(00|30)$/,
                                message: "La hora debe ser en intervalos de 30 minutos (XX:00 o XX:30)",
                            },
                        })}
                    />
                </InputBox>
                <InputBox name="finalHour" labelText="Hora de salida" error={finalHour}>
                    <input
                        type="time"
                        readOnly={isHourNonEditable}
                        {...register("finalHour", {
                            required: { value: true, message: "La hora de inicio es requerida" },
                            min: { value: "08:00", message: "La hora de inicio no puede ser antes de las 8:00" },
                            max: { value: "19:00", message: "La hora de inicio no puede ser después de las 19:00" },
                            pattern: {
                                value: /^([0-9]|0[0-9]|1[0-9]|2[0-3]):(00|30)$/,
                                message: "La hora debe ser en intervalos de 30 minutos (XX:00 o XX:30)",
                            },
                        })}
                    />
                </InputBox>
            </div>
            <InputBox name="specialty" labelText="Especialidad" error={specialty}>
                <select
                    {...register("specialty", {
                        required: { value: true, message: "La especialidad es requerida" },
                    })}
                    disabled={isSpecialtyNonEditable}
                >
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
