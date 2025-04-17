import { Link } from "react-router-dom";
import { useAuthStatus } from "../../hooks/useAuthStatus";
import { useNavbar } from "../../hooks/useNavbar";
import logo from "../../../assets/images/company/logo.webp";
import NavigationLink from "../NavigationLink";
import AvatarIcon from "../../../assets/icons/AvatarIcon";
import LogoutIcon from "../../../assets/icons/LogoutIcon";
import "./index.css";

const Navbar = () => {
    const { isAuthenticated } = useAuthStatus();
    const { isUserMenuOpen, isMenuOpen, handleUserMenuToggle, handleMenuToggle, logoutUser } = useNavbar();

    return (
        <nav className={`navbar ${isMenuOpen ? "open" : ""}`}>
            <div className="navbar__links">
                <div>
                    <Link to="/#home">
                        <img src={logo} alt="Logo de SilkTree" loading="lazy" decoding="async" />
                    </Link>
                    <button onClick={handleMenuToggle}>
                        <div>
                            <span />
                            <span />
                        </div>
                        Menu
                    </button>
                </div>
                <ul>
                    <li>
                        <Link to="/#about-us">Sobre nosotros</Link>
                    </li>
                    <li>
                        <Link to="/#services">Servicios</Link>
                    </li>
                    <li>
                        <Link to="/#our-team">Médicos</Link>
                    </li>
                </ul>
            </div>
            <div className={`navbar__actions ${isUserMenuOpen ? "open" : ""}`}>
                <div>
                    <NavigationLink
                        className="primary"
                        to={isAuthenticated ? "/schedule-appointment" : "/authorization"}
                    >
                        {isAuthenticated ? "Agendar cita" : "Comenzar"}
                    </NavigationLink>

                    <button onClick={handleUserMenuToggle}>
                        <AvatarIcon width={24} height={24} color="var(--neutral-900)" />
                    </button>
                </div>
                {isAuthenticated && (
                    <ul>
                        <li>
                            <button onClick={logoutUser}>
                                <LogoutIcon width={24} height={24} color="var(--error-500)" /> Cerrar sesión
                            </button>
                        </li>
                    </ul>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
