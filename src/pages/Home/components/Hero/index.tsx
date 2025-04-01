import AwardCard from "./AwardCard";
import Spline from "@splinetool/react-spline";
import basics from "../../../../shared/data/basics.json";
import "./index.css";
import NavigationLink from "../../../../shared/components/Link";

const Hero = () => {
    const { name, summary, award } = basics;
    const [fisrtName, secondName] = name;
    return (
        <section id="home" className="hero__container">
            <div>
                <h1>
                    {fisrtName}
                    <span>{secondName}</span>
                </h1>
                <p>{summary}</p>
                <NavigationLink className="primary" to="/schedule-appointment">
                    Agendar cita
                </NavigationLink>
            </div>
            <section className="award__section">
                <AwardCard {...award} />
            </section>
            <Spline
                className="spline__animation"
                scene="https://prod.spline.design/RBrvcAZcumTOcqwc/scene.splinecode"
            />
        </section>
    );
};

export default Hero;
