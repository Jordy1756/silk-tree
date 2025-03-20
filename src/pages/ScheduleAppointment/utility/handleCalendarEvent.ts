import { convertToDate, getFormattedDateString, DATE_FORMAT } from "../../../shared/utility/handleDates";

export const getDates = (appointmentDate: string, initialHour: string, finalHour: string) => {
    const newAppointmentDate = convertToDate(appointmentDate);
    return {
        startDate: new Date(getFormattedDateString(newAppointmentDate, DATE_FORMAT) + "T" + initialHour),
        endDate: new Date(getFormattedDateString(newAppointmentDate, DATE_FORMAT) + "T" + finalHour),
    };
};
