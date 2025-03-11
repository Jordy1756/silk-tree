import { useForm } from "react-hook-form";
import Actionable from "../../../../shared/components/Actionable";
import { TextField } from "../../../../shared/components/InputField";
import Form from "../../../../shared/components/Form";
import Separator from "../Separator";
import GoogleIcon from "../../../../assets/icons/GoogleIcon";
import "./index.css";

type LoginProps = {
    isToggled: boolean;
    handleIsToggled: () => void;
};

const Login = ({ isToggled, handleIsToggled }: LoginProps) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        // reset,
    } = useForm({
        mode: "onBlur",
        defaultValues: {
            email: "",
            password: "",
        },
    });

    return (
        <section className={`login ${isToggled ? "active" : ""}`}>
            <header>
                <h2>Iniciar Sesion</h2>
                <p>Ingresa tus credenciales para acceder a tu cuenta</p>
            </header>
            <main>
                <Form onSubmit={() => {}} handleSubmit={handleSubmit}>
                    <TextField
                        type="email"
                        name="email"
                        labelText="Correo electrónico"
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
                    <div>
                        <TextField
                            type="password"
                            name="password"
                            labelText="Contraseña"
                            autoComplete="off"
                            register={register}
                            validation={{
                                required: { value: true, message: "La contraseña es requerida" },
                                minLength: { value: 8, message: "La contraseña no puede tener menos de 8 caracteres" },
                                maxLength: { value: 50, message: "La contraseña no puede tener más de 50 caracteres" },
                            }}
                            error={errors.password}
                        />
                        <p className="forgot__password">Olvido su contraseña</p>
                    </div>

                    <Actionable type="button" className="primary" buttonType="submit">
                        Iniciar Sesion
                    </Actionable>
                </Form>
                <Separator text="O inicia sesión con" />
                <Actionable type="button" className="secondary" buttonType="button">
                    <GoogleIcon width={24} height={24} />
                    Iniciar Sesion con Google
                </Actionable>
            </main>
            <footer>
                <p>
                    ¿No tienes una cuenta?
                    <button type="button" onClick={handleIsToggled}>
                        Registrate
                    </button>
                </p>
            </footer>
        </section>
    );
};

export default Login;
