import {
    convertToDate,
    DATE_FORMAT,
    FULL_DATE_FORMAT,
    getFormattedDateString,
    TIME_24_FORMAT,
} from "../../../shared/utility/handleDates";
import { AppointmentFormValues } from "../types/appointmentFormTypes";
import { CalendarEvent } from "../types/calendarEvent";

type ValidationName = "appointmentDate" | "initialHour" | "finalHour" | "specialty";

export const validateAppointmentDate = (date: string) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return (
        convertToDate(date) >= convertToDate(today) ||
        `La fecha debe ser mayor o igual a ${getFormattedDateString(today, FULL_DATE_FORMAT)}`
    );
};

const formValidations = {
    appointmentDate: {
        required: { value: true, message: "La fecha es requerida" },
        validate: { isAfterToday: (date: string) => validateAppointmentDate(date) },
    },
    initialHour: {
        required: { value: true, message: "La hora de inicio es requerida" },
        min: { value: "08:00", message: "La hora de inicio no puede ser antes de las 8:00" },
        max: { value: "19:00", message: "La hora de inicio no puede ser después de las 19:00" },
        pattern: {
            value: /^([0-9]|0[0-9]|1[0-9]|2[0-3]):(00|30)$/,
            message: "La hora debe ser en intervalos de 30 minutos (XX:00 o XX:30)",
        },
    },
    finalHour: {
        required: { value: true, message: "La hora de finalizacion es requerida" },
        min: { value: "08:00", message: "La hora de finalizacion no puede ser antes de las 8:00" },
        max: { value: "19:00", message: "La hora de finalizacion no puede ser después de las 19:00" },
        pattern: {
            value: /^([0-9]|0[0-9]|1[0-9]|2[0-3]):(00|30)$/,
            message: "La hora debe ser en intervalos de 30 minutos (XX:00 o XX:30)",
        },
    },
    specialty: {
        required: { value: true, message: "La especialidad es requerida" },
    },
};

export const getFormValidation = (validationName: ValidationName) => formValidations[validationName];

export const getDefaultFormValues = ({
    start: startDate,
    end: endDate,
    specialty,
}: CalendarEvent): AppointmentFormValues => ({
    appointmentDate: getFormattedDateString(startDate, DATE_FORMAT),
    initialHour: getFormattedDateString(startDate, TIME_24_FORMAT),
    finalHour: getFormattedDateString(endDate, TIME_24_FORMAT),
    specialty,
});
