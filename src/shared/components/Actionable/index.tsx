import { ReactNode } from "react";
import "./index.css";

type ActionableProps = {
    type: "button" | "CTA";
    className: "primary" | "secondary";
    buttonType?: "button" | "submit" | "reset";
    href?: string;
    children: ReactNode;
};

const Actionable = ({ type, className, buttonType, href, children }: ActionableProps) => {
    return type === "button" ? (
        <button type={buttonType} className={className}>
            {children}
        </button>
    ) : (
        <a href={href} className={className}>
            {children}
        </a>
    );
};

export default Actionable;
