import { useForm } from "react-hook-form";
import { useToast } from "../../../shared/hooks/useToast";
import { loginUserService } from "../services/loginUserService";
import { User } from "../entities/User";
import { useNavigate } from "react-router-dom";

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
            email: "jordycastro1756@gmail.com",
            password: "12345678",
        },
    });

    const loginUser = async (userData: User) => {
        try {
            await loginUserService(userData);
            reset();
            navigate("/#home", { replace: true });
        } catch (error: any) {
            console.error(error);
            addToast({
                title: "Credenciales invalidas",
                message: `El correo o la contraseña son incorrectas`,
                type: "error",
            });
        }
    };

    return { register, handleSubmit, errors, loginUser };
};
