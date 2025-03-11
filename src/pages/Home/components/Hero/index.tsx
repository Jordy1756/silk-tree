import Navbar from "../../../../shared/components/Navbar";
import AwardCard from "./AwardCard";
import Actionable from "../../../../shared/components/Actionable";
import Spline from "@splinetool/react-spline";
import basics from "../../../../shared/data/basics.json";
import "./index.css";

const Hero = () => {
    const { name, summary, award } = basics;
    const [fisrtName, secondName] = name;
    return (
        <header id="home" className="hero__container">
            <Navbar />
            <section className="hero__main-content">
                <h1>
                    {fisrtName}
                    <span>{secondName}</span>
                </h1>
                <p>{summary}</p>
                <Actionable type="CTA" className="primary" to="/schedule-appointment">
                    Agendar cita
                </Actionable>
            </section>
            <section className="award__section">
                <AwardCard {...award} />
            </section>
            <Spline
                className="spline__animation"
                scene="https://prod.spline.design/RBrvcAZcumTOcqwc/scene.splinecode"
            />
        </header>
    );
};

export default Hero;
