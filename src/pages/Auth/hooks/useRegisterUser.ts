import { useForm } from "react-hook-form";
import { useToast } from "../../../shared/hooks/useToast";
import { User } from "../entities/User";
import { registerUserService } from "../services/registerUserService";
import { ApiError } from "../../../shared/utility/apiError";

export const useRegisterUser = (handleIsToggled: () => void) => {
    const { addToast } = useToast();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        mode: "onBlur",
        defaultValues: {
            name: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
    });

    const registerUser = async (userData: User) => {
        try {
            const user = await registerUserService(userData);

            addToast({
                title: "Usuario creado",
                message: ` El usuario ${user.email} fue creado correctamente`,
                type: "success",
            });
            reset();
            handleIsToggled();
        } catch (error: any) {
            console.log(error);
            if (error instanceof ApiError) addToast({ title: error.name, message: error.message, type: "error" });
        }
    };

    return { register, handleSubmit, errors, registerUser };
};
