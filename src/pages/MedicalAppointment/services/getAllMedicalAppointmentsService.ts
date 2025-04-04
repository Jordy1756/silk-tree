import { MEDICAL_APPOINTMENT_BASE_URL } from "../../../shared/constants/apiEndpoints";
import { MedicalAppointment } from "../entities/MedicalAppointment";
import { convertToDate } from "../../../shared/utility/handleDates";

export const getAllMedicalAppointmentsService = async () => {
    const response = await fetch(`${MEDICAL_APPOINTMENT_BASE_URL}/getAllMedicalAppointments`, {
        credentials: "include",
    });

    if (!response.ok) throw new Error();

    const data = await response.json();

    return data.map((medicalAppointment: MedicalAppointment) => ({
        ...medicalAppointment,
        start: convertToDate(medicalAppointment.start),
        end: convertToDate(medicalAppointment.end),
    }));
};
