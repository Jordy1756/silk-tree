import { ReactNode } from "react";
import "./index.css";
import { NavLink } from "react-router-dom";

type ActionableProps = {
    type: "button" | "CTA";
    className: "primary" | "secondary";
    buttonType?: "button" | "submit" | "reset";
    to?: string;
    onClick?: () => void;
    children: ReactNode;
};

const Actionable = ({ type, className, buttonType, to = "", onClick, children }: ActionableProps) => {
    return type === "button" ? (
        <button type={buttonType} className={className} onClick={onClick}>
            {children}
        </button>
    ) : (
        <NavLink to={to} className={className}>
            {children}
        </NavLink>
    );
};

export default Actionable;
