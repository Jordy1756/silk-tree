import type { CalendarEvent } from "../../types/calendarEvent";
import "./index.css";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { AppointmentFormValues } from "../../types/appointmentFormTypes";
import { SelectField, TextField } from "../../../../shared/components/InputField";
import Actionable from "../../../../shared/components/Actionable";
import { useModal } from "../../../../shared/hooks/useModal";
import Form from "../../../../shared/components/Form";
import { getFormattedDateString } from "../../../../shared/utility/handleDates";

type AppointmentDetailsProps = CalendarEvent;

const AppointmentDetails = ({ startDate, endDate, specialty }: AppointmentDetailsProps) => {
    const { closeModal } = useModal();
    const [isEditCalendarEvent, setIsEditCalendarEvent] = useState(true);

    const handleIsEditCalendarEvent = () => setIsEditCalendarEvent((prev) => !prev);

    const defaultValuesForm: AppointmentFormValues = {
        startDate,
        endDate,
        isEditHour: true,
        appointmentDate: getFormattedDateString(startDate, "YYYY-MM-DD"),
        initialHour: getFormattedDateString(startDate, "HH:mm"),
        finalHour: getFormattedDateString(endDate, "HH:mm"),
        specialty: specialty,
    };

    const specialties = [
        { value: "1", label: "Cardiología" },
        { value: "2", label: "Dermatología" },
        { value: "3", label: "Endocrinología" },
        { value: "4", label: "Gastroenterología" },
        { value: "5", label: "Geriatría" },
        { value: "6", label: "Ginecología" },
        { value: "7", label: "Hematología" },
        { value: "8", label: "Infectología" },
        { value: "9", label: "Medicina interna" },
        { value: "10", label: "Nefrología" },
        { value: "11", label: "Neumología" },
        { value: "12", label: "Neurología" },
        { value: "13", label: "Nutriología" },
        { value: "14", label: "Oftalmología" },
        { value: "15", label: "Oncología" },
        { value: "16", label: "Pediatría" },
        { value: "17", label: "Psiquiatría" },
        { value: "18", label: "Reumatología" },
        { value: "19", label: "Traumatología" },
        { value: "20", label: "Urología" },
    ];

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        mode: "onBlur",
        defaultValues: defaultValuesForm,
    });

    useEffect(() => {
        reset(defaultValuesForm);
    }, [startDate, endDate, reset]);

    const onSubmit = ({ initialHour, finalHour, specialty }: AppointmentFormValues) => {
        let startDateTime = startDate,
            endDateTime = endDate;

        if (!isEditCalendarEvent) {
            startDateTime = new Date(getFormattedDateString(startDate, "YYYY-MM-DD") + "T" + initialHour);
            endDateTime = new Date(getFormattedDateString(startDate, "YYYY-MM-DD") + "T" + finalHour);
        }

        // const newCalendarEvent: CalendarEvent = {
        //     title: `Cita de ${specialty}`,
        //     start: startDateTime,
        //     end: endDateTime,
        //     specialty,
        // };

        // handleEvents(newCalendarEvent);
        reset();
        closeModal();
    };

    return (
        <Form handleSubmit={handleSubmit} onSubmit={onSubmit}>
            <TextField
                type="date"
                name="appointmentDate"
                labelText="Fecha"
                readonly={isEditCalendarEvent}
                register={register}
                validation={{
                    required: { value: true, message: "La fecha es requerida" },
                }}
                error={errors.appointmentDate}
            />
            <div className="input__box-container">
                <TextField
                    type="time"
                    name="initialHour"
                    labelText="Hora de inicio"
                    readonly={isEditCalendarEvent}
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
                    error={errors.initialHour}
                />
                <TextField
                    type="time"
                    name="finalHour"
                    labelText="Hora de salida"
                    readonly={isEditCalendarEvent}
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
                    error={errors.finalHour}
                />
            </div>
            <SelectField
                name="specialty"
                labelText="Especialidad"
                options={specialties}
                disabled={isEditCalendarEvent}
                register={register}
                validation={{
                    required: { value: true, message: "La especialidad es requerida" },
                }}
                error={errors.specialty}
            />
            <div className="form__actions">
                <Actionable
                    type="button"
                    className="primary"
                    buttonType={isEditCalendarEvent ? "submit" : "button"}
                    onClick={handleIsEditCalendarEvent}
                >
                    {isEditCalendarEvent ? "Editar" : "Actualizar"}
                </Actionable>
                <Actionable type="button" className="secondary" buttonType="reset" onClick={() => closeModal()}>
                    {isEditCalendarEvent ? "Eliminar" : "Cancelar"}
                </Actionable>
            </div>
        </Form>
    );
};

export default AppointmentDetails;
