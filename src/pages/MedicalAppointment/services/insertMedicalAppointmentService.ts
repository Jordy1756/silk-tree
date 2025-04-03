import { MEDICAL_APPOINTMENT_BASE_URL } from "../../../shared/constants/apiEndpoints";
import { MedicalAppointment } from "../entities/MedicalAppointment";

export const insertMedicalAppointmentService = async (medicalAppointment: MedicalAppointment) => {
    const response = await fetch(`${MEDICAL_APPOINTMENT_BASE_URL}/insertMedicalAppointment`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(medicalAppointment),
    });

    if (!response.ok) throw new Error();

    const data = await response.json();

    if (!data) throw new Error();

    return data;
};
