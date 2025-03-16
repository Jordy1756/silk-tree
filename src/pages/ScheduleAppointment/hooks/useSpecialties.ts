import { useState } from "react";

export const useSpecialties = () => {
    const [specialties, setSpecialties] = useState([
        { value: "1", label: "Cardiología" },
        { value: "2", label: "Dermatología" },
        { value: "3", label: "Endocrinología" },
        { value: "4", label: "Gastroenterología" },
        { value: "5", label: "Geriatría" },
        { value: "6", label: "Ginecología" },
        { value: "7", label: "Hematología" },
        { value: "8", label: "Infectología" },
        { value: "9", label: "Medicina interna" },
        { value: "10", label: "Nefrología" },
        { value: "11", label: "Neumología" },
        { value: "12", label: "Neurología" },
        { value: "13", label: "Nutriología" },
        { value: "14", label: "Oftalmología" },
        { value: "15", label: "Oncología" },
        { value: "16", label: "Pediatría" },
        { value: "17", label: "Psiquiatría" },
        { value: "18", label: "Reumatología" },
        { value: "19", label: "Traumatología" },
        { value: "20", label: "Urología" },
    ]);

    return { specialties };
};
