import Form from "../../../../shared/components/Form";
import Separator from "../Separator";
import GoogleIcon from "../../../../assets/icons/GoogleIcon";
import Button from "../../../../shared/components/Button";
import InputBox from "../../../../shared/components/InputBox";
import "./index.css";
import { useLoginUser } from "../../hooks/useLoginUser";
import { getLoginFormValidation } from "../../utils/loginFormValidations";

type Props = {
    isToggled: boolean;
    handleIsToggled: () => void;
};

const Login = ({ isToggled, handleIsToggled }: Props) => {
    const { register, handleSubmit, errors, loginUser } = useLoginUser();
    return (
        <section className={`login ${isToggled ? "active" : ""}`}>
            <header>
                <h2>Iniciar Sesion</h2>
                <p>Ingresa tus credenciales para acceder a tu cuenta</p>
            </header>
            <main>
                <Form onSubmit={loginUser} handleSubmit={handleSubmit}>
                    <InputBox name="email" labelText="Correo electrónico" error={errors.email}>
                        <input placeholder="" type="text" {...register("email", getLoginFormValidation("email"))} />
                    </InputBox>
                    <div>
                        <InputBox name="password" labelText="Contraseña" error={errors.password}>
                            <input
                                placeholder=""
                                type="password"
                                autoComplete="off"
                                {...register("password", getLoginFormValidation("password"))}
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
