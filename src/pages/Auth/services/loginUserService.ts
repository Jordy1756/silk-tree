import { USER_BASE_URL } from "../../../shared/constants/apiEndpoints";
import { User } from "../entities/User";

export const loginUserService = async (user: User) => {
    const response = await fetch(`${USER_BASE_URL}/login`, {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    });

    if (!response.ok) throw new Error();

    const data = await response.json();

    if (!data) throw new Error("Credenciales invalidas");

    return data;
};
