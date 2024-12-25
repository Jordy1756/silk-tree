import Navbar from "../../shared/components/Navbar";
import Award from "./components/Award";
import Hero from "./components/Hero";
import Spline from "@splinetool/react-spline";
import "./index.css";

const Banner = () => {
    return (
        <header className="banner__header">
            <Navbar />
            <Hero />
            <section className="award__section">
                <Award />
            </section>
            <Spline className="spline__object" scene="https://prod.spline.design/RBrvcAZcumTOcqwc/scene.splinecode" />
        </header>
    );
};

export default Banner;
