import { useLocation, useNavigate } from "react-router-dom";
import { logoutUserService } from "../services/logoutUserService";
import { ApiError } from "../utils/apiError";
import { useToast } from "./useToast";

export const useLogoutUser = (handleIsAuthenticated: (isAuthenticated: boolean) => void) => {
    const { addToast } = useToast();
    const location = useLocation();
    const navigate = useNavigate();

    const logoutUser = async () => {
        try {
            await logoutUserService();
            handleIsAuthenticated(false);
            addToast({ title: "Sesión cerrada", message: "Has cerrado sesión exitosamente", type: "success" });

            if (location.pathname !== "/") navigate("/#home", { replace: true });
        } catch (error: any) {
            console.error(error);
            if (error instanceof ApiError) addToast({ title: error.name, message: error.message, type: "error" });
        }
    };

    return { logoutUser };
};
