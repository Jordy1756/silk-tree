import { Link } from "react-router-dom";
import { useAuthStatus } from "../../hooks/useAuthStatus";
import { useLogoutUser } from "../../hooks/useLogoutUser";
import logo from "../../../assets/images/company/logo.png";
import NavigationLink from "../NavigationLink";
import AvatarIcon from "../../../assets/icons/AvatarIcon";
import LogoutIcon from "../../../assets/icons/LogoutIcon";
import "./index.css";
import Button from "../Button";
import MenuIcon from "../../../assets/icons/MenuIcon";

const Navbar = () => {
    const { isAuthenticated, handleIsAuthenticated } = useAuthStatus();
    const { logoutUser } = useLogoutUser(handleIsAuthenticated);

    return (
        <nav className="navbar">
            <div className="navbar__links">
                <Link to="/#home">
                    <img src={logo} alt="Logo de SilkTree" />
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
            <div className="navbar__actions">
                <NavigationLink className="primary" to={isAuthenticated ? "/schedule-appointment" : "/authorization"}>
                    {isAuthenticated ? "Agendar" : "Comenzar"}
                </NavigationLink>
                {isAuthenticated && (
                    <div>
                        <picture>
                            <AvatarIcon width={20} height={20} color="var(--neutral-600)" />
                        </picture>
                        <ul>
                            <li>
                                <button onClick={() => logoutUser()}>
                                    <LogoutIcon width={24} height={24} color="var(--error-500)" />
                                    Cerrar sesion
                                </button>
                            </li>
                        </ul>
                    </div>
                )}
                <Button type="button" className="icon">
                    <MenuIcon width={40} height={40} color="var(--neutral-600)" />
                </Button>
            </div>
        </nav>
    );
};

export default Navbar;
