import Footer from "../../shared/components/Footer";
import Marquee from "../../shared/components/Marquee";
import AboutUs from "./components/AboutUs";
import Hero from "./components/Hero";
import ContactUs from "./components/ContactUs";
import FAQ from "./components/FAQ";
import OurTeam from "./components/OurTeam";
import Services from "./components/Services";
import basics from "../../shared/data/basics.json";
import "./index.css";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Home = () => {
    const location = useLocation();
    const sectionIdentifiers = ["#home", "#about-us", "#services", "#our-team", "#contact-us", "#FAQs"];

    const scrollToSection = () =>
        sectionIdentifiers.includes(location.hash) && document.querySelector(location.hash)?.scrollIntoView();

    useEffect(() => {
        scrollToSection();
    }, [location]);

    return (
        <>
            <Hero />
            <main className="main__content">
                <Marquee list={basics.marquee} />
                <AboutUs />
                <Services />
                <OurTeam />
                <FAQ />
                <ContactUs />
            </main>
            <Footer />
        </>
    );
};

export default Home;
