import logo from "../../../assets/images/company/logo.png";
import Actionable from "../Actionable";
import "./index.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar__links">
                <a href="/#">
                    <img src={logo} alt="Logo" />
                </a>
                <ul>
                    <li>
                        <a href="/#about-us">Sobre nosotros</a>
                    </li>
                    <li>
                        <a href="/#services">Servicios</a>
                    </li>
                    <li>
                        <a href="/#our-team">Medicos</a>
                    </li>
                    <li>
                        <a href="/#contact-us">Contactanos</a>
                    </li>
                </ul>
            </div>
            <div>
                <Actionable type="CTA" className="primary" href="/authorization">
                    Comenzar
                </Actionable>
            </div>
        </nav>
    );
};

export default Navbar;
