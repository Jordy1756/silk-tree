import { useForm } from "react-hook-form";
import Form from "../../../../shared/components/Form";
import Separator from "../Separator";
import GoogleIcon from "../../../../assets/icons/GoogleIcon";
import "./index.css";
import Button from "../../../../shared/components/Button";
import InputBox from "../../../../shared/components/InputBox";

type Props = {
    isToggled: boolean;
    handleIsToggled: () => void;
};

const Login = ({ isToggled, handleIsToggled }: Props) => {
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

    const onSubmit = () => {
    };

    return (
        <section className={`login ${isToggled ? "active" : ""}`}>
            <header>
                <h2>Iniciar Sesion</h2>
                <p>Ingresa tus credenciales para acceder a tu cuenta</p>
            </header>
            <main>
                <Form onSubmit={onSubmit} handleSubmit={handleSubmit}>
                    <InputBox name="email" labelText="Correo electrónico" error={errors.email}>
                        <input
                            placeholder=""
                            type="text"
                            {...register("email", {
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
                            })}
                        />
                    </InputBox>
                    <div>
                        <InputBox name="password" labelText="Contraseña" error={errors.password}>
                            <input
                                placeholder=""
                                type="password"
                                autoComplete="off"
                                {...register("password", {
                                    required: { value: true, message: "La contraseña es requerida" },
                                    minLength: {
                                        value: 8,
                                        message: "La contraseña no puede tener menos de 8 caracteres",
                                    },
                                    maxLength: {
                                        value: 50,
                                        message: "La contraseña no puede tener más de 50 caracteres",
                                    },
                                })}
                            />
                        </InputBox>
                        <p className="forgot__password">Olvido su contraseña</p>
                    </div>

                    <Button className="primary" type="submit">
                        Iniciar Sesion
                    </Button>
                </Form>
                <Separator text="O inicia sesión con" />
                <Button className="secondary" type="button">
                    <GoogleIcon width={24} height={24} />
                    Iniciar Sesion con Google
                </Button>
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
