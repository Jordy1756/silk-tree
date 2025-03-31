import { useForm } from "react-hook-form";
import { useToast } from "../../../shared/hooks/useToast";
import { loginUserService } from "../services/loginUserService";
import { User } from "../entities/User";

export const useLoginUser = () => {
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
            const response = await loginUserService(userData);

            if (!response.ok) throw new Error();

            const user = await response.json();

            if (!user) throw new Error("Credenciales invalidas");
            
            reset();
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
