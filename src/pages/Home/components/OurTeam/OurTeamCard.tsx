import "./ourTeamCard.css";

type OurTeamCardProps = {
    index: number;
    image: string;
    name: string;
    specialty: string;
};

const OurTeamCard = ({ index, image, name, specialty }: OurTeamCardProps) => {
    return (
        <article className="our__team-card" style={{ "--grid-area": `doctor${index + 1}` } as React.CSSProperties}>
            <figure>
                <img src={image} alt={`Imagen de ${name}`} loading="lazy" decoding="async" />
            </figure>
            <div>
                <h6>{name}</h6>
                <p>{specialty}</p>
            </div>
        </article>
    );
};

export default OurTeamCard;
