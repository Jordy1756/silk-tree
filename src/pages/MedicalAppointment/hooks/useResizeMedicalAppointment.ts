import { useToast } from "../../../shared/hooks/useToast";
import { DragAndDropCalendar } from "../entities/DragAndDropCalendar";
import { getOverlapToastData } from "../utility/handleCalendarEvent";
import { useMedicalAppointments } from "./useMedicalAppointments";

export const useResizeMedicalAppointment = () => {
    const { addToast } = useToast();
    const { checkMedicalAppointmentOverlap } = useMedicalAppointments();

    const resizeMedicalAppointment = ({ start, end, event: medicalAppointment }: DragAndDropCalendar) => {
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
            title: "Horario actualizado",
            message: `La duración de su cita de ${medicalAppointment.specialty.name} ha sido modificada correctamente`,
            type: "success",
        });
    };

    return { resizeMedicalAppointment };
};
