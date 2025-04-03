import { SPECIALTY_BASE_URL } from "../../../shared/constants/apiEndpoints";

export const getAllSpecialitiesService = async () => {
    const response = await fetch(`${SPECIALTY_BASE_URL}/getAllSpecialties`);
    if (!response.ok) throw new Error();

    const specialties = await response.json();

    if (!specialties) throw new Error();

    return specialties;
};
