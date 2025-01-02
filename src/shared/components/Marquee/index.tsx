import "./index.css";

type MarqueeProps = {
    list: string[];
    color?: "var(--neutral-900)" | "var(--primary-500)";
};

const Marquee = ({ list, color = "var(--neutral-900)" }: MarqueeProps) => {
    return (
        <aside className={"marquee"} style={{ "--marquee-color": color } as React.CSSProperties}>
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
        </aside>
    );
};

export default Marquee;
