import { Link } from "react-router-dom";
import { useAuthStatus } from "../../hooks/useAuthStatus";
import { useNavbar } from "../../hooks/useNavbar";
import logo from "../../../assets/images/company/logo.webp";
import AvatarIcon from "../../../assets/icons/AvatarIcon";
import LogoutIcon from "../../../assets/icons/LogoutIcon";
import basics from "../../data/basics.json";
import "./index.css";

const Navbar = () => {
    const { isAuthenticated } = useAuthStatus();
    const { isUserMenuOpen, isMenuOpen, handleUserMenuToggle, handleMenuToggle, logoutUser } = useNavbar();
    const { socialNetworks } = basics;

    return (
        <header className={`header ${isMenuOpen ? "with__navbar-open" : ""}`}>
            <nav>
                <div>
                    <Link to="/#home">
                        <img src={logo} alt="Logo de SilkTree" loading="lazy" decoding="async" />
                    </Link>
                    <button onClick={handleMenuToggle}>
                        <div>
                            <span />
                            <span />
                        </div>
                        <span>Menu</span>
                    </button>
                </div>
                <ul>
                    <li>
                        <span>01</span>
                        <Link to="/#home">Home</Link>
                    </li>
                    <li>
                        <span>02</span>
                        <Link to="/#about-us">Sobre nosotros</Link>
                    </li>
                    <li>
                        <span>03</span>
                        <Link to="/#services">Servicios</Link>
                    </li>
                    <li>
                        <span>04</span>
                        <Link to="/#our-team">Médicos</Link>
                    </li>
                </ul>
            </nav>
            <div className={`${isUserMenuOpen ? "user__menu-open" : ""}`}>
                <div>
                    <Link to={isAuthenticated ? "/schedule-appointment" : "/authorization"}>
                        {isAuthenticated ? "Agendar cita" : "Comenzar"}
                    </Link>
                    {isAuthenticated && (
                        <>
                            <button onClick={handleUserMenuToggle}>
                                <AvatarIcon width={24} height={24} color="var(--neutral-900)" />
                            </button>
                            <ul>
                                <li>
                                    <button onClick={logoutUser}>
                                        <LogoutIcon width={24} height={24} color="var(--error-500)" />
                                        Cerrar sesión
                                    </button>
                                </li>
                            </ul>
                        </>
                    )}
                </div>
                <span />
                <aside>
                    <ul>
                        {socialNetworks.map(({ name, url }, index) => (
                            <li key={index}>
                                <a href={url} target="_blank" rel="noopener noreferrer">
                                    {name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </aside>
            </div>
        </header>
    );
};

export default Navbar;
