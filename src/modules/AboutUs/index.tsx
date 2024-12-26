import HorizontalScrollSection from "./components/HorizontalScrollSection";
import StatisticsCard from "./components/statisticsCard";
import "./index.css";

const AboutUs = () => {
    return (
        <HorizontalScrollSection
            id="about-us"
            height="200dvh"
            viewTimelineName="--about-us-pin-tl"
            pinChildren={
                <header>
                    <h2>Sobre nostros</h2>
                    <p>
                        En SilkTree, nos dedicamos a proporcionar atención médica de la más alta calidad a nuestros
                        pacientes. Con tecnología de vanguardia y un equipo de profesionales altamente capacitados,
                        estamos comprometidos a mejorar la salud y el bienestar de nuestra comunidad.
                    </p>
                </header>
            }
        >
            <StatisticsCard text="Clientes satisfechos" value="1000" />
            <StatisticsCard text="Atención de emergencias" value="24/7" />
            <StatisticsCard text="Profesionales" value="100" />
            <StatisticsCard text="Años de experiencia" value="+10" />
            <StatisticsCard text="Clínicas" value="+5" />
            <StatisticsCard text="Especialidades" value="10" />
        </HorizontalScrollSection>
    );
};

export default AboutUs;
