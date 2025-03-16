import "./index.css";
import { SelectField, TextField } from "../../../../shared/components/InputField";
import Form from "../../../../shared/components/Form";
import { FieldErrors, UseFormHandleSubmit, UseFormRegister } from "react-hook-form";
import { AppointmentFormValues } from "../../types/appointmentFormTypes";
import { ReactNode } from "react";
import { useSpecialties } from "../../hooks/useSpecialties";

type ScheduleAppointmentFormProps = {
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
}: ScheduleAppointmentFormProps) => {
    const { specialties } = useSpecialties();
    
    return (
        <Form handleSubmit={handleSubmit} onSubmit={onSubmit}>
            <TextField
                type="date"
                name="appointmentDate"
                labelText="Fecha"
                readonly={isDateNonEditable}
                register={register}
                validation={{
                    required: { value: true, message: "La fecha es requerida" },
                }}
                error={appointmentDate}
            />
            <div className="input__box-container">
                <TextField
                    type="time"
                    name="initialHour"
                    labelText="Hora de inicio"
                    readonly={isHourNonEditable}
                    register={register}
                    validation={{
                        required: { value: true, message: "La hora de inicio es requerida" },
                        min: { value: "08:00", message: "La hora de inicio no puede ser antes de las 8:00" },
                        max: { value: "19:00", message: "La hora de inicio no puede ser después de las 19:00" },
                        pattern: {
                            value: /^([0-9]|0[0-9]|1[0-9]|2[0-3]):(00|30)$/,
                            message: "La hora debe ser en intervalos de 30 minutos (XX:00 o XX:30)",
                        },
                    }}
                    error={initialHour}
                />
                <TextField
                    type="time"
                    name="finalHour"
                    labelText="Hora de salida"
                    readonly={isHourNonEditable}
                    register={register}
                    validation={{
                        required: { value: true, message: "La hora de salida es requerida" },
                        min: { value: "08:00", message: "La hora de salida no puede ser antes de las 8:00" },
                        max: { value: "19:00", message: "La hora de salida no puede ser después de las 19:00" },
                        pattern: {
                            value: /^([0-9]|0[0-9]|1[0-9]|2[0-3]):(00|30)$/,
                            message: "La hora debe ser en intervalos de 30 minutos (XX:00 o XX:30)",
                        },
                    }}
                    error={finalHour}
                />
            </div>
            <SelectField
                name="specialty"
                labelText="Especialidad"
                options={specialties}
                disabled={isSpecialtyNonEditable}
                register={register}
                validation={{
                    required: { value: true, message: "La especialidad es requerida" },
                }}
                error={specialty}
            />
            <div className="form__actions">{children}</div>
        </Form>
    );
};

export default ScheduleAppointmentForm;
