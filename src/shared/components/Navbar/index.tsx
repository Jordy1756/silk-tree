import { Link } from "react-router-dom";
import logo from "../../../assets/images/company/logo.png";
import NavigationLink from "../NavigationLink";
import { useAuthStatus } from "../../hooks/useAuthStatus";
import AvatarIcon from "../../../assets/icons/AvatarIcon";
import "./index.css";
import LogoutIcon from "../../../assets/icons/LogoutIcon";
import { useLogoutUser } from "../../hooks/useLogoutUser";

const Navbar = () => {
    const { isAuthenticated, handleIsAuthenticated } = useAuthStatus();
    const { logoutUser } = useLogoutUser(handleIsAuthenticated);

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
                <NavigationLink className="primary" to={isAuthenticated ? "/schedule-appointment" : "/authorization"}>
                    {isAuthenticated ? "Agendar cita" : "Comenzar"}
                </NavigationLink>
                {isAuthenticated && (
                    <div>
                        <picture>
                            <AvatarIcon width={20} height={20} color="var(--neutral-600)" />
                        </picture>
                        <ul>
                            <li>
                                <button onClick={() => logoutUser()}>
                                    <LogoutIcon width={24} height={24} color="var(--neutral-900)" />
                                    Cerrar sesion
                                </button>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
