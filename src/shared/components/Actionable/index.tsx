import { ReactNode } from "react";
import "./index.css";
import { NavLink } from "react-router-dom";

type ActionableProps = {
    type: "button" | "CTA";
    className: "primary" | "secondary";
    buttonType?: "button" | "submit" | "reset";
    to?: string;
    children: ReactNode;
};

const Actionable = ({ type, className, buttonType, to = "", children }: ActionableProps) => {
    return type === "button" ? (
        <button type={buttonType} className={className}>
            {children}
        </button>
    ) : (
        <NavLink to={to} className={className}>
            {children}
        </NavLink>
    );
};

export default Actionable;
