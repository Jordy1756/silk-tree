import { FieldError } from "react-hook-form";
import { ReactElement } from "react";
import "./index.css";

export type Props = {
    name: string;
    labelText: string;
    error: FieldError | undefined;
    children: ReactElement<
        JSX.IntrinsicElements["input"] | JSX.IntrinsicElements["select"] | JSX.IntrinsicElements["textarea"]
    >;
};

const InputBox = ({ name, labelText, error, children }: Props) => {
    return (
        <div className="input__box">
            <div>
                {children}
                <label htmlFor={name}>{labelText}</label>
            </div>
            {error && <p>{error.message}</p>}
        </div>
    );
};

export default InputBox;
