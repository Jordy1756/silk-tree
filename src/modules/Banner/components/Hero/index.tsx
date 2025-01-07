import Actionable from "../../../../shared/components/Actionable";
import basics from "../../../../shared/data/basics.json";
import "./index.css";

const Hero = () => {
    const { name, summary } = basics;
    return (
        <section className="hero">
            <h1>
                {name[0]}
                <span>{name[1]}</span>
            </h1>
            <p>{summary}</p>
            <Actionable type="CTA" className="primary" href="#">
                Get Started
            </Actionable>
        </section>
    );
};

export default Hero;
