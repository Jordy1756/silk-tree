import { USER_BASE_URL } from "../../../shared/constants/apiEndpoints";
import { User } from "../entities/User";

export const registerUserService = async (userData: User) => {
    const response = await fetch(`${USER_BASE_URL}/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
    });

    if (!response.ok) throw new Error();

    const user = await response.json();

    if (!user) throw new Error("No se pudo crear el usuario");

    return user;
};
