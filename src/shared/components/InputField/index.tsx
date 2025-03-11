import { FieldError, UseFormRegister } from "react-hook-form";
import { ReactNode } from "react";
import "./index.css";

type ValidationTypes = {
    required: { value: boolean; message: string };
    maxLength?: { value: number; message: string };
    minLength?: { value: number; message: string };
    pattern?: { value: RegExp; message: string };
    min?: { value: number | string; message: string };
    max?: { value: number | string; message: string };
};

type InputBoxProps = {
    name: string;
    labelText: string;
    error?: FieldError | undefined;
    children?: ReactNode;
};

type ValidatedInputFieldProps = InputBoxProps & {
    register: UseFormRegister<any>;
    validation: ValidationTypes;
};

type TextFieldProps = ValidatedInputFieldProps & {
    type: "text" | "email" | "password" | "time";
    autoComplete?: "on" | "off";
};

const InputBox = ({ name, labelText, error, children }: InputBoxProps) => {
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

export const TextareaField = ({ name, labelText, register, validation, error }: ValidatedInputFieldProps) => {
    return (
        <InputBox name={name} labelText={labelText} error={error}>
            <textarea placeholder="" {...register(name, validation)} />
        </InputBox>
    );
};

export const TextField = ({ name, labelText, type, autoComplete, register, validation, error }: TextFieldProps) => {
    return (
        <InputBox name={name} labelText={labelText} error={error}>
            <input placeholder="" type={type} {...register(name, validation)} autoComplete={autoComplete} />
        </InputBox>
    );
};
