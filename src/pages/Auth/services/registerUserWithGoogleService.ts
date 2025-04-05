import { USER_BASE_URL } from "../../../shared/constants/apiEndpoints";
import { ApiError } from "../../../shared/utility/apiError";

export const registerUserWithGoogleService = async (googleAccessToken: string) => {
    const response = await fetch(`${USER_BASE_URL}/registerWithGoogle`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ googleAccessToken }),
    });

    const data = await response.json();

    if (!response.ok) throw new ApiError(data.name, data.message);

    return data;
};
