import "./index.css";

type MarqueeProps = {
    list: string[];
    color?: "neutral__900" | "primary__500";
};

const Marquee = ({ list, color = "neutral__900" }: MarqueeProps) => {
    return (
        <section className={`marquee ${color}`}>
            <ul>
                {list.map((item, index) => (
                    <li key={index}>
                        <span>{item}</span>
                        <div></div>
                    </li>
                ))}
            </ul>
            <ul>
                {list.map((item, index) => (
                    <li key={index}>
                        <span>{item}</span>
                        <div></div>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Marquee;
