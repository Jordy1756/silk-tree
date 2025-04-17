import { useLocation, useNavigate } from "react-router-dom";
import { logoutUserService } from "../services/logoutUserService";
import { ApiError } from "../utils/apiError";
import { useToast } from "./useToast";
import { useState } from "react";
import { useAuthStatus } from "./useAuthStatus";

export const useNavbar = () => {
    const { addToast } = useToast();
    const { handleIsAuthenticated } = useAuthStatus();
    const location = useLocation();
    const navigate = useNavigate();
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleUserMenuToggle = () => setIsUserMenuOpen((prev) => !prev);
    const handleMenuToggle = () => setIsMenuOpen((prev) => !prev);

    const logoutUser = async () => {
        try {
            await logoutUserService();
            handleIsAuthenticated(false);
            handleUserMenuToggle();
            addToast({ title: "Sesión cerrada", message: "Has cerrado sesión exitosamente", type: "success" });

            if (location.pathname !== "/") navigate("/#home", { replace: true });
        } catch (error: any) {
            console.error(error);
            if (error instanceof ApiError) addToast({ title: error.name, message: error.message, type: "error" });
        }
    };

    return { isUserMenuOpen, isMenuOpen, handleUserMenuToggle, handleMenuToggle, logoutUser };
};
