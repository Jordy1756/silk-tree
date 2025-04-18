import { useLocation, useNavigate } from "react-router-dom";
import { logoutUserService } from "../services/logoutUserService";
import { ApiError } from "../utils/apiError";
import { useToast } from "./useToast";
import { useState, useRef, useCallback, useEffect } from "react";
import { useAuthStatus } from "./useAuthStatus";

export const useNavbar = () => {
    const { addToast } = useToast();
    const { handleIsAuthenticated } = useAuthStatus();
    const location = useLocation();
    const navigate = useNavigate();
    const [isUserMenuOpen, setIsUserMenuOpen] = useState<boolean>(false);
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    // Referencias para el menú de usuario
    const userMenuRef = useRef<HTMLUListElement | null>(null);
    const userButtonRef = useRef<HTMLButtonElement | null>(null);

    // Referencias para el menú principal
    const mainMenuRef = useRef<HTMLElement | null>(null);
    const mainMenuButtonRef = useRef<HTMLButtonElement | null>(null);

    const handleUserMenuToggle = () => setIsUserMenuOpen((prev) => !prev);
    const handleMenuToggle = () => setIsMenuOpen((prev) => !prev);

    const logoutUser = async () => {
        try {
            await logoutUserService();
            handleIsAuthenticated(false);
            setIsUserMenuOpen(false);
            addToast({ title: "Sesión cerrada", message: "Has cerrado sesión exitosamente", type: "success" });

            if (location.pathname !== "/") navigate("/#home", { replace: true });
        } catch (error: any) {
            console.error(error);
            if (error instanceof ApiError) addToast({ title: error.name, message: error.message, type: "error" });
        }
    };

    // Función memoizada para manejar clics fuera del menú de usuario
    const handleUserClickOutside = useCallback(
        (event: MouseEvent) => {
            const target = event.target as Node;

            if (
                isUserMenuOpen &&
                userMenuRef.current &&
                !userMenuRef.current.contains(target) &&
                userButtonRef.current &&
                !userButtonRef.current.contains(target)
            ) {
                setIsUserMenuOpen(false);
            }
        },
        [isUserMenuOpen]
    );

    // Función memoizada para manejar clics fuera del menú principal
    const handleMainMenuClickOutside = useCallback(
        (event: MouseEvent) => {
            const target = event.target as Node;

            if (
                isMenuOpen &&
                mainMenuRef.current &&
                !mainMenuRef.current.contains(target) &&
                mainMenuButtonRef.current &&
                !mainMenuButtonRef.current.contains(target)
            ) {
                setIsMenuOpen(false);
            }
        },
        [isMenuOpen]
    );

    // Effect para el menú de usuario
    useEffect(() => {
        if (isUserMenuOpen) {
            document.addEventListener("mousedown", handleUserClickOutside);

            return () => {
                document.removeEventListener("mousedown", handleUserClickOutside);
            };
        }
    }, [isUserMenuOpen, handleUserClickOutside]);

    // Effect para el menú principal
    useEffect(() => {
        if (isMenuOpen) {
            document.addEventListener("mousedown", handleMainMenuClickOutside);

            return () => {
                document.removeEventListener("mousedown", handleMainMenuClickOutside);
            };
        }
    }, [isMenuOpen, handleMainMenuClickOutside]);

    return {
        isUserMenuOpen,
        isMenuOpen,
        handleUserMenuToggle,
        handleMenuToggle,
        logoutUser,
        userMenuRef,
        userButtonRef,
        mainMenuRef,
        mainMenuButtonRef,
    };
};
