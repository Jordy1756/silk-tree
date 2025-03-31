import { USER_BASE_URL } from "../../../shared/constants/apiEndpoints";
import { User } from "../entities/User";

export const loginUserService = async (user: User) =>
    await fetch(`${USER_BASE_URL}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    });
