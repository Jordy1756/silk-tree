import { useForm } from "react-hook-form";
import { useToast } from "../../../shared/hooks/useToast";
import { loginUserService } from "../services/loginUserService";
import { User } from "../entities/User";
import { useNavigate } from "react-router-dom";
import { ApiError } from "../../../shared/utility/apiError";
import { TokenResponse, useGoogleLogin } from "@react-oauth/google";
import { loginUserWithGoogleService } from "../services/loginUserWithGoogleService";

export const useLoginUser = () => {
    const navigate = useNavigate();
    const { addToast } = useToast();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        mode: "onBlur",
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const loginUser = async (userData: User) => {
        try {
            await loginUserService(userData);
            reset();
            navigate("/#home", { replace: true });
        } catch (error: any) {
            console.log(error);
            if (error instanceof ApiError) addToast({ title: error.name, message: error.message, type: "error" });
        }
    };

    const loginUserWithGoogle = useGoogleLogin({
        onSuccess: async (tokenResponse: TokenResponse) => {
            try {
                await loginUserWithGoogleService(tokenResponse.access_token);
                navigate("/#home", { replace: true });
            } catch (error: any) {
                console.log(error);
                if (error instanceof ApiError) addToast({ title: error.name, message: error.message, type: "error" });
            }
        },
        onError: () =>
            addToast({
                title: "Error de autenticación",
                message: "Hubo un problema al conectar con Google. Por favor, intenta más tarde",
                type: "error",
            }),
    });

    return { register, handleSubmit, errors, loginUser, loginUserWithGoogle };
};
