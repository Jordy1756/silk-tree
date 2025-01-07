import "./index.css";

type AwardType = {
    name: string;
    date: string;
    description: string;
};

const Award = ({ name, date, description }: AwardType) => {
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

export default Award;
