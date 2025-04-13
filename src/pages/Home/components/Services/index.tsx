import Marquee from "../../../../shared/components/Marquee";
import ServiceCard from "./ServiceCard";
import basics from "../../../../shared/data/basics.json";
import services from "../../data/services.json";
import "./index.css";

const Services = () => {
    return (
        <section id="services" className="services" style={{ "--total-cards": services.length } as React.CSSProperties}>
            <div>
                <Marquee list={basics.marquee} color="var(--primary-500)" />
                <div>
                    {services.map(({ name, image }, index) => (
                        <ServiceCard key={index} index={index} name={name} image={image} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
