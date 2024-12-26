import logo from "../../../assets/images/company/logo.png";
import Actionable from "../Actionable";
import "./index.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div>
                <a href="/#">
                    <img src={logo} alt="Logo" />
                </a>
                <ul>
                    <li>
                        <a href="/#about-us">Sobre nosotros</a>
                    </li>
                    <li>
                        <a href="/#">Servicios</a>
                    </li>
                    <li>
                        <a href="/#">Medicos</a>
                    </li>
                    <li>
                        <a href="/#">Contactanos</a>
                    </li>
                </ul>
            </div>
            <div>
                <Actionable type="CTA" className="primary" href="#pepito">
                    Iniciar Sesion
                </Actionable>
                <Actionable type="CTA" className="secondary" href="#pepito2">
                    Registrame
                </Actionable>
            </div>
        </nav>
    );
};

export default Navbar;
