import AboutUs from "./modules/AboutUs";
import Banner from "./modules/Banner";
import FAQ from "./modules/FAQ";
import Services from "./modules/services";
import Footer from "./shared/components/Footer";
import Marquee from "./shared/components/Marquee";
import basics from "./shared/data/basics.json";

const App = () => {
    return (
        <>
            <Banner />
            <main className="main__content">
                <Marquee list={basics.marquee} />
                <AboutUs />
                <Services />
                <FAQ />
            </main>
            <Footer />
        </>
    );
};

export default App;
