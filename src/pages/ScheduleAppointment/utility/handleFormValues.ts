import { getFormattedDateString } from "../../../shared/utility/handleDates";
import { AppointmentFormValues } from "../types/appointmentFormTypes";

export const getDefaultFormValues = (
    id: string,
    startDate: Date,
    endDate: Date,
    specialty: string
): AppointmentFormValues => ({
    id,
    startDate,
    endDate,
    isEditHour: false,
    appointmentDate: getFormattedDateString(startDate, "YYYY-MM-DD"),
    initialHour: getFormattedDateString(startDate, "HH:mm"),
    finalHour: getFormattedDateString(endDate, "HH:mm"),
    specialty,
});
