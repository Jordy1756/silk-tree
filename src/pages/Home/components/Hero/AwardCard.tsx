import "./awardCard.css";

type Props = {
    name: string;
    date: string;
    description: string;
};

const AwardCard = ({ name, date, description }: Props) => {
    return (
        <article className="award__card">
            <div>
                <span>01</span>
                <div>
                    <time>{date}</time>
                    <h3>{name}</h3>
                </div>
            </div>
            <p>{description}</p>
        </article>
    );
};

export default AwardCard;
