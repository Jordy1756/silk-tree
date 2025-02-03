import { FieldError, UseFormRegister } from "react-hook-form";
import "./index.css";

type ValidationTypes = {
    required: { value: boolean; message: string };
    maxLength: { value: number; message: string };
    minLength: { value: number; message: string };
    pattern?: { value: RegExp; message: string };
};

type InputFieldProps = {
    typeField: "input" | "textarea";
    name: string;
    labelText: string;
    typeInput?: "text" | "password";
    register: UseFormRegister<any>;
    validation: ValidationTypes;
    error: FieldError | undefined;
};

const InputField = ({ typeField, name, labelText, typeInput, register, validation, error }: InputFieldProps) => {
    return (
        <div className="input__box">
            <div>
                {typeField === "input" ? (
                    <input type={typeInput} placeholder="" {...register(name, validation)} />
                ) : (
                    <textarea placeholder="" {...register(name, validation)} />
                )}
                <label htmlFor={name}>{labelText}</label>
            </div>
            {error && <p>{error.message}</p>}
        </div>
    );
};

export default InputField;
