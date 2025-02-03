import HorizontalScrollSection from "../../../../shared/components/HorizontalScrollSection";
import AboutUsCard from "./AboutUsCard";
import aboutUs from "../../data/aboutUs.json";
import "./index.css";

const AboutUs = () => {
    const { title, description, cards } = aboutUs;
    return (
        <HorizontalScrollSection
            id="about-us"
            height="200dvh"
            pinChildren={
                <header>
                    <h2>{title}</h2>
                    <p>{description}</p>
                </header>
            }
        >
            {cards.map(({ text, value }, index) => (
                <AboutUsCard key={index} text={text} value={value} />
            ))}
        </HorizontalScrollSection>
    );
};

export default AboutUs;
