import "./aboutUsCard.css";

type Props = {
    text: string;
    value: string;
};

const AboutUsCard = ({ text, value }: Props) => {
    return (
        <article className="about__us-card">
            <p>{text}</p>
            <span>{value}</span>
        </article>
    );
};

export default AboutUsCard;
