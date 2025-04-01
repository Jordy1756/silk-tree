import { useForm } from "react-hook-form";
import { useToast } from "../../../shared/hooks/useToast";
import { User } from "../entities/User";
import { registerUserService } from "../services/registerUserService";

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
            const response = await registerUserService(userData);

            if (!response.ok) throw new Error();

            const user = await response.json();

            if (!user) throw new Error("No se pudo crear el usuario");

            addToast({
                title: "Usuario creado",
                message: ` El usuario ${user.email} fue creado correctamente`,
                type: "success",
            });
            reset();
            handleIsToggled();
        } catch (error: any) {
            console.error(error);
            addToast({
                title: "Usuario existente",
                message: ` El usuario no puede ser creado`,
                type: "error",
            });
        }
    };

    return { register, handleSubmit, errors, registerUser };
};
