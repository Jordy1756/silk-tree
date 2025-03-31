import "./index.css";
import Form from "../../../../shared/components/Form";
import Separator from "../Separator";
import GoogleIcon from "../../../../assets/icons/GoogleIcon";
import Button from "../../../../shared/components/Button";
import InputBox from "../../../../shared/components/InputBox";
import { useRegisterUser } from "../../hooks/useRegisterUser";

type Props = {
    isToggled: boolean;
    handleIsToggled: () => void;
};

const Register = ({ isToggled, handleIsToggled }: Props) => {
    const { register, handleSubmit, errors, registerUser } = useRegisterUser();

    return (
        <section className={`register ${!isToggled ? "active" : ""}`}>
            <header>
                <h2>Crea tu cuenta</h2>
                <p>Regístrate para acceder a todas las funciones</p>
            </header>
            <main>
                <Form onSubmit={registerUser} handleSubmit={handleSubmit}>
                    <div className="input__box-container">
                        <InputBox name="name" labelText="Nombre" error={errors.name}>
                            <input
                                placeholder=""
                                type="text"
                                {...register("name", {
                                    required: { value: true, message: "El nombre es requerido" },
                                    minLength: { value: 3, message: "El nombre no puede tener menos de 3 caracteres" },
                                    maxLength: { value: 50, message: "El nombre no puede tener más de 50 caracteres" },
                                })}
                            />
                        </InputBox>
                        <InputBox name="lastName" labelText="Apellidos" error={errors.lastName}>
                            <input
                                placeholder=""
                                type="text"
                                {...register("lastName", {
                                    required: { value: true, message: "Los apellidos son requeridos" },
                                    minLength: {
                                        value: 3,
                                        message: "Los apellidos no pueden tener menos de 3 caracteres",
                                    },
                                    maxLength: {
                                        value: 50,
                                        message: "Los apellidos no pueden tener más de 50 caracteres",
                                    },
                                })}
                            />
                        </InputBox>
                    </div>
                    <InputBox name="email" labelText="Correo electrónico" error={errors.email}>
                        <input
                            placeholder=""
                            type="email"
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
                    <InputBox name="confirmPassword" labelText="Confirmar contraseña" error={errors.confirmPassword}>
                        <input
                            placeholder=""
                            type="password"
                            autoComplete="off"
                            {...register("confirmPassword", {
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
                    <Button type="submit" className="primary">
                        Registrarse
                    </Button>
                </Form>
                <Separator text="o registrate con" />
                <Button type="button" className="secondary">
                    <GoogleIcon width={24} height={24} /> Registrarse con Google
                </Button>
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
