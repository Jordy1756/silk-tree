import { MEDICAL_APPOINTMENT_BASE_URL } from "../../../shared/constants/apiEndpoints";

export const deleteMedicalAppointmentService = async (medicalAppointmentId: string) => {
    const response = await fetch(`${MEDICAL_APPOINTMENT_BASE_URL}/deleteMedicalAppointment/${medicalAppointmentId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (!response.ok) throw new Error("No se pudo eliminar la cita médica");

    const data = await response.json();

    if (data === 0) throw new Error();

    return data;
};
