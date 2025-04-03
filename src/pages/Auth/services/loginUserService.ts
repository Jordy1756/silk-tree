import { USER_BASE_URL } from "../../../shared/constants/apiEndpoints";
import { User } from "../entities/User";

export const loginUserService = async (userData: User) => {
    const response = await fetch(`${USER_BASE_URL}/login`, {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
    });

    if (!response.ok) throw new Error();

    const user = await response.json();
    
    if (!user) throw new Error("Credenciales invalidas");

    return user;
};
