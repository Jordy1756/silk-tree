import "./index.css";

type StatisticsCardProps = {
    text: string;
    value: string;
};

const StatisticsCard = ({ text, value }: StatisticsCardProps) => {
    return (
        <article className="statistics__card">
            <p>{text}</p>
            <span>{value}</span>
        </article>
    );
};

export default StatisticsCard;
