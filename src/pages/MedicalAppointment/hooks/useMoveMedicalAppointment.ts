import { useToast } from "../../../shared/hooks/useToast";
import { DragAndDropCalendar } from "../entities/DragAndDropCalendar";
import { validateAppointmentDate } from "../utility/handleAppointmentForm";
import { getOverlapToastData } from "../utility/handleCalendarEvent";
import { useMedicalAppointments } from "./useMedicalAppointments";

export const useMoveMedicalAppointment = () => {
    const { addToast } = useToast();
    const { checkMedicalAppointmentOverlap } = useMedicalAppointments();

    const moveMedicalAppointment = ({ start, end, event: medicalAppointment }: DragAndDropCalendar) => {
        const message = validateAppointmentDate(start.toDateString());

        if (typeof message === "string") return addToast({ title: "Fecha no válida", message, type: "error" });

        const startDate = medicalAppointment.start;
        const endDate = medicalAppointment.end;

        medicalAppointment.start = start;
        medicalAppointment.end = end;

        if (checkMedicalAppointmentOverlap(medicalAppointment)) {
            medicalAppointment.start = startDate;
            medicalAppointment.end = endDate;
            return addToast(getOverlapToastData());
        }

        addToast({
            title: "Cita movida exitosamente",
            message: `Su cita de ${medicalAppointment.specialty.name} ha sido movida correctamente`,
            type: "success",
        });
    };

    return { moveMedicalAppointment };
};
