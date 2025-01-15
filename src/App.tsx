import AboutUs from "./modules/AboutUs";
import Banner from "./modules/Banner";
import ContactUs from "./modules/ContactUs";
import FAQ from "./modules/FAQ";
import OurTeam from "./modules/OurTeam";
import Services from "./modules/Services";
import Footer from "./shared/components/Footer";
import Marquee from "./shared/components/Marquee";
import basics from "./shared/data/basics.json";
import "./app.css";

const App = () => {
    return (
        <>
            <Banner />
            <main className="main__content">
                <section className="marquee__section">
                    <Marquee list={basics.marquee} />
                </section>
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

export default App;
