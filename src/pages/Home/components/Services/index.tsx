import Marquee from "../../../../shared/components/Marquee";
import ServiceCard from "./ServiceCard";
import basics from "../../../../shared/data/basics.json";
import services from "../../data/services.json";
import "./index.css";

const Services = () => {
    return (
        <section id="services" className="services">
            <div>
                <Marquee list={basics.marquee} color="var(--primary-500)" />
                <div>
                    {services.map(({ name, image, scrollTrigger }, index) => (
                        <ServiceCard key={index} name={name} image={image} scrollTrigger={scrollTrigger} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
