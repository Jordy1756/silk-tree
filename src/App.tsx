import AboutUs from "./modules/AboutUs";
import Banner from "./modules/Banner";
import FAQ from "./modules/FAQ";
import Services from "./modules/services";
import Footer from "./shared/components/Footer";
import Marquee from "./shared/components/Marquee";

const App = () => {
    const list = ["Nuestros servicios", "Equipo de profesionales", "Tecnología de punta", "Ambiente seguro"];
    return (
        <>
            <Banner />
            <main className="main__content">
                <Marquee list={list} />
                <AboutUs />
                <Services />
                <FAQ />
            </main>
            <Footer />
        </>
    );
};

export default App;
