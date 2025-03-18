import { convertToDate, getFormattedDateString } from "../../../shared/utility/handleDates";

export const getDates = (appointmentDate: string, initialHour: string, finalHour: string) => {
    const newAppointmentDate = convertToDate(appointmentDate);
    return {
        startDate: new Date(getFormattedDateString(newAppointmentDate, "YYYY-MM-DD") + "T" + initialHour),
        endDate: new Date(getFormattedDateString(newAppointmentDate, "YYYY-MM-DD") + "T" + finalHour),
    };
};
