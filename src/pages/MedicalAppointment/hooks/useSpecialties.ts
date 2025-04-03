import { useEffect, useState } from "react";
import { Specialty } from "../entities/Specialty";
import { getAllSpecialitiesService } from "../services/getAllSpecialitiesService";

export const useSpecialties = () => {
    const [specialties, setSpecialties] = useState<Specialty[]>([]);

    useEffect(() => {
        const fetchSpecialties = async () => {
            try {
                setSpecialties(await getAllSpecialitiesService());
            } catch (err) {
                console.log(err);
            }
        };

        fetchSpecialties();
    }, []);

    return { specialties };
};
