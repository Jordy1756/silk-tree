import { USER_BASE_URL } from "../../../shared/constants/apiEndpoints";

export const registerUser = async () =>
    await fetch(`${USER_BASE_URL}/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: "Pepe",
            lastName: "Apellido pepe",
            email: "pepito@gmail.com",
            password: "12345678",
        }),
    });
