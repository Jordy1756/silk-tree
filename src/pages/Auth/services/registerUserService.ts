import { USER_BASE_URL } from "../../../shared/constants/apiEndpoints";
import { User } from "../entities/User";

export const registerUserService = async (user: User) => {
    const response = await fetch(`${USER_BASE_URL}/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    });

    if (!response.ok) throw new Error();
    
    const data = await response.json();

    if (!data) throw new Error("No se pudo crear el usuario");

    return data;
};
