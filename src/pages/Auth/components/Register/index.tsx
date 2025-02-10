import "./index.css";
import InputField from "../../../../shared/components/InputField";
import { useForm } from "react-hook-form";
import Form from "../../../../shared/components/Form";
import Actionable from "../../../../shared/components/Actionable";
import Separator from "../Separator";
import GoogleIcon from "../../../../assets/icons/GoogleIcon";

type RegisterProps = {
    isToggled: boolean;
    handleIsToggled: () => void;
};

const Register = ({ isToggled, handleIsToggled }: RegisterProps) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        // reset,
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

    return (
        <section className={`register ${!isToggled ? "active" : ""}`}>
            <header>
                <h2>Crea tu cuenta</h2>
                <p>Regístrate para acceder a todas las funciones</p>
            </header>
            <main>
                <Form onSubmit={() => {}} handleSubmit={handleSubmit}>
                    <div className="input__box-container">
                        <InputField
                            typeField="input"
                            name="name"
                            labelText="Nombre"
                            typeInput="text"
                            register={register}
                            validation={{
                                required: { value: true, message: "El nombre es requerido" },
                                minLength: { value: 3, message: "El nombre no puede tener menos de 3 caracteres" },
                                maxLength: { value: 50, message: "El nombre no puede tener más de 50 caracteres" },
                            }}
                            error={errors.name}
                        />
                        <InputField
                            typeField="input"
                            name="lastName"
                            labelText="Apellidos"
                            typeInput="text"
                            register={register}
                            validation={{
                                required: { value: true, message: "Los apellidos son requeridos" },
                                minLength: { value: 3, message: "Los apellidos no pueden tener menos de 3 caracteres" },
                                maxLength: { value: 50, message: "Los apellidos no pueden tener más de 50 caracteres" },
                            }}
                            error={errors.lastName}
                        />
                    </div>
                    <InputField
                        typeField="input"
                        name="email"
                        labelText="Correo electrónico"
                        typeInput="text"
                        register={register}
                        validation={{
                            required: { value: true, message: "El correo electrónico es requerido" },
                            minLength: {
                                value: 3,
                                message: "El correo electrónico no puede tener menos de 3 caracteres",
                            },
                            maxLength: {
                                value: 50,
                                message: "El correo electrónico no puede tener más de 50 caracteres",
                            },
                            pattern: {
                                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                                message: "El correo electrónico no es válido",
                            },
                        }}
                        error={errors.email}
                    />
                    <InputField
                        typeField="input"
                        name="password"
                        labelText="Contraseña"
                        typeInput="password"
                        register={register}
                        validation={{
                            required: { value: true, message: "La contraseña es requerida" },
                            minLength: { value: 8, message: "La contraseña no puede tener menos de 8 caracteres" },
                            maxLength: { value: 50, message: "La contraseña no puede tener más de 50 caracteres" },
                        }}
                        error={errors.password}
                    />
                    <InputField
                        typeField="input"
                        name="confirmPassword"
                        labelText="Confirmar contraseña"
                        typeInput="password"
                        register={register}
                        validation={{
                            required: { value: true, message: "La confirmación de la contraseña es requerida" },
                            minLength: {
                                value: 8,
                                message: "La confirmación de la contraseña no puede tener menos de 8 caracteres",
                            },
                            maxLength: {
                                value: 50,
                                message: "La confirmación de la contraseña no puede tener más de 50 caracteres",
                            },
                        }}
                        error={errors.confirmPassword}
                    />
                    <Actionable type="button" className="primary" buttonType="submit">
                        Registrarse
                    </Actionable>
                </Form>
                <Separator text="o registrate con" />
                <Actionable type="button" className="secondary" buttonType="button">
                    <GoogleIcon width={24} height={24} /> Registrarse con Google
                </Actionable>
            </main>
            <footer>
                <p>
                    Ya tienes cuenta?
                    <button type="button" onClick={handleIsToggled}>
                        Inicia sesion
                    </button>
                </p>
            </footer>
        </section>
    );
};

export default Register;
