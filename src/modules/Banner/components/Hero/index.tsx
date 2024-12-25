import Actionable from "../../../../shared/components/Actionable";
import "./index.css";

const Hero = () => {
    return (
        <section className="hero">
            <h1>SilkTree</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni aut ab, corporis reiciendis labore rem
                nihil necessitatibus consectetur expedita nostrum, possimus sint nisi, a rerum sapiente suscipit sequi
                omnis porro!
            </p>
            <Actionable type="CTA" className="primary" href="#">
                Get Started
            </Actionable>
        </section>
    );
};

export default Hero;
