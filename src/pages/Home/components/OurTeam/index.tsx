import OurTeamCard from "./OurTeamCard";
import ourTeam from "../../data/ourTeam.json";
import "./index.css";

const OurTeam = () => {
    const { title, description, team } = ourTeam;
    return (
        <section id="our-team" className="our__team">
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            {team.map(({ image, name, specialty }, index) => (
                <OurTeamCard index={index} key={index} image={image} name={name} specialty={specialty} />
            ))}
        </section>
    );
};

export default OurTeam;
