import { NavLink } from "react-router-dom";
import logo from "../../../assets/images/company/logo.png";
import Actionable from "../Actionable";
import "./index.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar__links">
                <NavLink to="/#home">
                    <img src={logo} alt="Logo" />
                </NavLink>
                <ul>
                    <li>
                        <NavLink to="/#about-us">Sobre nosotros</NavLink>
                    </li>
                    <li>
                        <NavLink to="/#services">Servicios</NavLink>
                    </li>
                    <li>
                        <NavLink to="/#our-team">Medicos</NavLink>
                    </li>
                    <li>
                        <NavLink to="/#contact-us">Contactanos</NavLink>
                    </li>
                </ul>
            </div>
            <div>
                <Actionable type="CTA" className="primary" to="/authorization">
                    Comenzar
                </Actionable>
            </div>
        </nav>
    );
};

export default Navbar;
