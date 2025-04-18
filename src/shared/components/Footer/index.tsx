import logo from "../../../assets/images/company/logo.webp";
import { NavLink } from "react-router-dom";
import NavigationLink from "../NavigationLink";
import { useAuthStatus } from "../../hooks/useAuthStatus";
import "./index.css";

const Footer = () => {
    const { isAuthenticated } = useAuthStatus();

    return (
        <footer className="footer">
            <section>
                <div>
                    <NavLink to="/#home">
                        <img src={logo} alt="Logo de SilkTree" loading="lazy" decoding="async" />
                    </NavLink>
                    <blockquote>Cuidando tu salud con confianza y dedicación</blockquote>
                    <NavigationLink
                        className="primary"
                        to={isAuthenticated ? "/schedule-appointment" : "/authorization"}
                    >
                        {isAuthenticated ? "Agendar cita" : "Comenzar"}
                    </NavigationLink>
                </div>
                <nav>
                    <ul>
                        <li>
                            <span>01</span>
                            <a href="/#about-us">Sobre nosotros</a>
                        </li>
                        <li>
                            <span>02</span>
                            <a href="/#services">Servicios</a>
                        </li>
                        <li>
                            <span>03</span>
                            <a href="/#">Medicos</a>
                        </li>
                        <li>
                            <span>04</span>
                            <a href="/#FAQs">FAQ</a>
                        </li>
                        <li>
                            <span>05</span>
                            <a href="/#contact-us">Contactanos</a>
                        </li>
                    </ul>
                </nav>
            </section>
            <aside>
                <p>&copy; SilkTree 2024</p>
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/#">Términos y condiciones</NavLink>
                        </li>
                        <li>
                            <NavLink to="/#">Política de privacidad</NavLink>
                        </li>
                    </ul>
                </nav>
            </aside>
        </footer>
    );
};

export default Footer;
