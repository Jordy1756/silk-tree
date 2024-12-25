import AboutUs from "./modules/AboutUs";
import Banner from "./modules/Banner";
import Marquee from "./shared/components/Marquee";

const App = () => {
    const list = ["Nuestros servicios", "Equipo de profesionales", "Tecnología de punta", "Ambiente seguro"];
    return (
        <>
            <Banner />
            <main className="main__content">
                <Marquee list={list} />
                <AboutUs />
            </main>
        </>
    );
};

export default App;
