import Actionable from "../Actionable";
import logo from "../../../assets/images/company/logo.png";
import "./index.css";

const Footer = () => {
    return (
        <footer className="footer">
            <section>
                <div>
                    <a href="/#">
                        <img src={logo} alt="Logo SilkTree" />
                    </a>
                    <blockquote>Cuidando tu salud con confianza y dedicación</blockquote>
                    <Actionable type="CTA" className="primary" href="/#">
                        Get Started
                    </Actionable>
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
                            <a href="/#FAQs">Preguntas frecuentes</a>
                        </li>
                        <li>
                            <span>05</span>
                            <a href="/#">Contactanos</a>
                        </li>
                    </ul>
                </nav>
            </section>
            <aside>
                <p>&copy; SilkTree 2024</p>
                <nav>
                    <ul>
                        <li>
                            <a href="/#">Términos y condiciones</a>
                        </li>
                        <li>
                            <a href="/#">Política de privacidad</a>
                        </li>
                    </ul>
                </nav>
            </aside>
        </footer>
    );
};

export default Footer;
