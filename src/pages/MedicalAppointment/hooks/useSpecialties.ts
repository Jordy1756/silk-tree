import { useState } from "react";
import { Specialty } from "../entities/Specialty";

export const useSpecialties = () => {
    const [specialties, setSpecialties] = useState<Specialty[]>([
        { id: "1", name: "Cardiología" },
        { id: "2", name: "Dermatología" },
        { id: "3", name: "Endocrinología" },
        { id: "4", name: "Gastroenterología" },
        { id: "5", name: "Geriatría" },
        { id: "6", name: "Ginecología" },
        { id: "7", name: "Hematología" },
        { id: "8", name: "Infectología" },
        { id: "9", name: "Medicina interna" },
        { id: "10", name: "Nefrología" },
        { id: "11", name: "Neumología" },
        { id: "12", name: "Neurología" },
        { id: "13", name: "Nutriología" },
        { id: "14", name: "Oftalmología" },
        { id: "15", name: "Oncología" },
        { id: "16", name: "Pediatría" },
        { id: "17", name: "Psiquiatría" },
        { id: "18", name: "Reumatología" },
        { id: "19", name: "Traumatología" },
        { id: "20", name: "Urología" },
    ]);

    return { specialties };
};
