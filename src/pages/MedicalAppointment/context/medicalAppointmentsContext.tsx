import { createContext, ReactNode, useCallback, useState } from "react";
import { MedicalAppointment } from "../entities/MedicalAppointment";

type MedicalAppointmentsContextType = {
    currentMedicalAppointment: MedicalAppointment;
    medicalAppointments: MedicalAppointment[];
    handleCurrentMedicalAppointment: (medicalAppointment: MedicalAppointment) => void;
    addMedicalAppointment: (newMedicalAppointment: MedicalAppointment) => void;
    modifyMedicalAppointment: (updatedMedicalAppointments: MedicalAppointment) => void;
    removeMedicalAppointment: () => void;
    checkMedicalAppointmentOverlap: (newMedicalAppointment: MedicalAppointment) => boolean;
};

// eslint-disable-next-line react-refresh/only-export-components
export const MedicalAppointmentsContext = createContext<MedicalAppointmentsContextType | undefined>(undefined);

export const MedicalAppointmentsProvider = ({ children }: { children: ReactNode }) => {
    const [currentMedicalAppointment, setCurrentMedicalAppointment] = useState<MedicalAppointment>({
        id: "",
        title: "",
        start: new Date(),
        end: new Date(),
        specialty: {
            id: 0,
            name: "",
        },
    });

    const [medicalAppointments, serMedicalAppointments] = useState<MedicalAppointment[]>([
        {
            id: crypto.randomUUID(),
            title: "Meeting1",
            start: new Date(2025, 2, 23, 8, 0),
            end: new Date(2025, 2, 23, 9, 0),
            specialty: {
                id: 1,
                name: "Cardiologia",
            },
        },
        {
            id: crypto.randomUUID(),
            title: "Meeting2",
            start: new Date(2025, 2, 23, 9, 0),
            end: new Date(2025, 2, 23, 10, 0),
            specialty: {
                id: 2,
                name: "Reumatologia",
            },
        },
        {
            id: crypto.randomUUID(),
            title: "Meeting3",
            start: new Date(2025, 2, 23, 10, 0),
            end: new Date(2025, 2, 23, 11, 0),
            specialty: {
                id: 3,
                name: "Neurologia",
            },
        },
    ]);

    const handleCurrentMedicalAppointment = useCallback(
        (medicalAppointment: MedicalAppointment) => setCurrentMedicalAppointment(medicalAppointment),
        [setCurrentMedicalAppointment]
    );

    const addMedicalAppointment = useCallback(
        (newMedicalAppointment: MedicalAppointment) =>
            serMedicalAppointments((prev) => [...prev, newMedicalAppointment]),
        [serMedicalAppointments]
    );

    const modifyMedicalAppointment = useCallback(
        (updatedMedicalAppointment: MedicalAppointment) => {
            serMedicalAppointments((prev) =>
                prev.map((medicalAppointment) =>
                    medicalAppointment.id === updatedMedicalAppointment.id
                        ? updatedMedicalAppointment
                        : medicalAppointment
                )
            );
        },
        [serMedicalAppointments]
    );

    const removeMedicalAppointment = useCallback(() => {
        serMedicalAppointments((prev) =>
            prev.filter((medicalAppointment) => medicalAppointment.id !== currentMedicalAppointment.id)
        );
    }, [serMedicalAppointments, currentMedicalAppointment.id]);

    const checkMedicalAppointmentOverlap = (newEvent: MedicalAppointment) =>
        medicalAppointments.some(
            ({ id, start, end }) => newEvent.id !== id && newEvent.start < end && newEvent.end > start
        );

    return (
        <MedicalAppointmentsContext.Provider
            value={{
                currentMedicalAppointment,
                medicalAppointments,
                handleCurrentMedicalAppointment,
                addMedicalAppointment,
                modifyMedicalAppointment,
                removeMedicalAppointment,
                checkMedicalAppointmentOverlap,
            }}
        >
            {children}
        </MedicalAppointmentsContext.Provider>
    );
};
