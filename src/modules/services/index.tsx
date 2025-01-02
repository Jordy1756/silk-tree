import Marquee from "../../shared/components/Marquee";
import ServiceCard from "./components/ServiceCard";
import "./index.css";

const Services = () => {
    const list = ["Nuestros servicios", "Equipo de profesionales", "Tecnología de punta", "Ambiente seguro"];
    return (
        <section id="services" className="services">
            <div>
                <Marquee list={list} color="var(--primary-500)" />
                <div>
                    <ServiceCard
                        name="Cardiología"
                        image="../../../src/assets/images/services/serviceImg01.webp"
                        scrollTrigger={83.33}
                    />
                    <ServiceCard
                        name="Dermatología"
                        image="../../../src/assets/images/services/serviceImg02.webp"
                        scrollTrigger={66.67}
                    />
                    <ServiceCard
                        name="Endocrinología"
                        image="../../../src/assets/images/services/serviceImg03.webp"
                        scrollTrigger={50}
                    />
                    <ServiceCard
                        name="Gastroenterología"
                        image="../../../src/assets/images/services/serviceImg04.webp"
                        scrollTrigger={33.33}
                    />
                    <ServiceCard
                        name="Ginecología"
                        image="../../../src/assets/images/services/serviceImg05.webp"
                        scrollTrigger={16.67}
                    />
                    <ServiceCard
                        name="Otorrinolaringología"
                        image="../../../src/assets/images/services/serviceImg06.webp"
                        scrollTrigger={0}
                    />
                </div>
            </div>
        </section>
    );
};

export default Services;
