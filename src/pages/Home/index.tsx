import Footer from "../../shared/components/Footer";
import Marquee from "../../shared/components/Marquee";
import AboutUs from "./components/AboutUs";
import Banner from "./components/Banner";
import ContactUs from "./components/ContactUs";
import FAQ from "./components/FAQ";
import OurTeam from "./components/OurTeam";
import Services from "./components/Services";
import basics from "../../shared/data/basics.json";
import "./index.css";

const Home = () => {
    return (
        <>
            <Banner />
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
