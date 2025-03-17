import { Link } from "react-router-dom";
import logo from "../../../assets/images/company/logo.png";
import NavigationLink from "../Link";
import "./index.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar__links">
                <Link to="/#home">
                    <img src={logo} alt="Logo" />
                </Link>
                <ul>
                    <li>
                        <Link to="/#about-us">Sobre nosotros</Link>
                    </li>
                    <li>
                        <Link to="/#services">Servicios</Link>
                    </li>
                    <li>
                        <Link to="/#our-team">Medicos</Link>
                    </li>
                    <li>
                        <Link to="/#contact-us">Contactanos</Link>
                    </li>
                </ul>
            </div>
            <div>
                <NavigationLink className="primary" to="/authorization">
                    Comenzar
                </NavigationLink>
            </div>
        </nav>
    );
};

export default Navbar;
