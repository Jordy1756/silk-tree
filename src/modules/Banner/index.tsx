import Navbar from "../../shared/components/Navbar";
import Award from "./components/Award";
import Hero from "./components/Hero";
import Spline from "@splinetool/react-spline";
import basics from "../../shared/data/basics.json";
import "./index.css";

const Banner = () => {
    const { award } = basics;
    return (
        <header className="banner__header">
            <Navbar />
            <Hero />
            <section className="award__section">
                <Award {...award} />
            </section>
            <Spline className="spline__object" scene="https://prod.spline.design/RBrvcAZcumTOcqwc/scene.splinecode" />
        </header>
    );
};

export default Banner;
