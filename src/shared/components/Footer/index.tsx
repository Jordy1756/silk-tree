import logo from "../../../assets/images/company/logo.webp";
import { Link } from "react-router-dom";
import NavigationLink from "../NavigationLink";
import { useAuthStatus } from "../../hooks/useAuthStatus";
import "./index.css";

const Footer = () => {
    const { isAuthenticated } = useAuthStatus();

    return (
        <footer className="footer">
            <section>
                <div>
                    <Link to="/#home">
                        <img src={logo} alt="Logo de SilkTree" loading="lazy" decoding="async" />
                    </Link>
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
                            <Link to="/#about-us">Sobre nosotros</Link>
                        </li>
                        <li>
                            <span>02</span>
                            <Link to="/#services">Servicios</Link>
                        </li>
                        <li>
                            <span>03</span>
                            <Link to="/#our-team">Médicos</Link>
                        </li>
                        <li>
                            <span>04</span>
                            <Link to="/#FAQs">FAQ</Link>
                        </li>
                    </ul>
                </nav>
            </section>
            <aside>
                <p>&copy; SilkTree 2024</p>
                <nav>
                    <ul>
                        <li>
                            <Link to="/#">Términos y condiciones</Link>
                        </li>
                        <li>
                            <Link to="/#">Política de privacidad</Link>
                        </li>
                    </ul>
                </nav>
            </aside>
        </footer>
    );
};

export default Footer;
