import "./index.css";
import Form from "../../../../shared/components/Form";
import Separator from "../Separator";
import GoogleIcon from "../../../../assets/icons/GoogleIcon";
import Button from "../../../../shared/components/Button";
import InputBox from "../../../../shared/components/InputBox";
import { useRegisterUser } from "../../hooks/useRegisterUser";
import { getRegisterFormValidation } from "../../utils/registerFormValidations";

type Props = {
    isToggled: boolean;
    handleIsToggled: () => void;
};

const Register = ({ isToggled, handleIsToggled }: Props) => {
    const { register, handleSubmit, errors, registerUser } = useRegisterUser(handleIsToggled);

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
                                {...register("name", getRegisterFormValidation("name"))}
                            />
                        </InputBox>
                        <InputBox name="lastName" labelText="Apellidos" error={errors.lastName}>
                            <input
                                placeholder=""
                                type="text"
                                {...register("lastName", getRegisterFormValidation("lastName"))}
                            />
                        </InputBox>
                    </div>
                    <InputBox name="email" labelText="Correo electrónico" error={errors.email}>
                        <input placeholder="" type="email" {...register("email", getRegisterFormValidation("email"))} />
                    </InputBox>
                    <InputBox name="password" labelText="Contraseña" error={errors.password}>
                        <input
                            placeholder=""
                            type="password"
                            autoComplete="off"
                            {...register("password", getRegisterFormValidation("password"))}
                        />
                    </InputBox>
                    <InputBox name="confirmPassword" labelText="Confirmar contraseña" error={errors.confirmPassword}>
                        <input
                            placeholder=""
                            type="password"
                            autoComplete="off"
                            {...register("confirmPassword", getRegisterFormValidation("confirmPassword"))}
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
