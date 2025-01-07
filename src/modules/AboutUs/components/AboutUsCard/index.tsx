import "./index.css";

type AboutUsCardProps = {
    text: string;
    value: string;
};

const AboutUsCard = ({ text, value }: AboutUsCardProps) => {
    return (
        <article className="about__us-card">
            <p>{text}</p>
            <span>{value}</span>
        </article>
    );
};

export default AboutUsCard;
