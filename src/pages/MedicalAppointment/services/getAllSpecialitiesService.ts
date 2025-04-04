import { SPECIALTY_BASE_URL } from "../../../shared/constants/apiEndpoints";

export const getAllSpecialitiesService = async () => {
    const response = await fetch(`${SPECIALTY_BASE_URL}/getAllSpecialties`, {
        credentials: "include",
    });

    if (!response.ok) throw new Error();

    const data = await response.json();

    if (!data) throw new Error();

    return data;
};
