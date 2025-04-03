import { MEDICAL_APPOINTMENT_BASE_URL } from "../../../shared/constants/apiEndpoints";
import { MedicalAppointment } from "../entities/MedicalAppointment";

export const updateMedicalAppointmentService = async (medicalAppointment: MedicalAppointment) => {
    const response = await fetch(`${MEDICAL_APPOINTMENT_BASE_URL}/updateMedicalAppointment`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(medicalAppointment),
    });

    if (!response.ok) throw new Error();

    const data = await response.json();

    if (data <= 0) throw new Error();

    return data;
};
