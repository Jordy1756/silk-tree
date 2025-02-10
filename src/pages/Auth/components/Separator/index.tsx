import "./index.css";

type SeparatorProps = {
    text?: string;
};

const Separator = ({ text }: SeparatorProps) => {
    return (
        <div className="form__separator">
            <p>{text}</p>
        </div>
    );
};

export default Separator;
