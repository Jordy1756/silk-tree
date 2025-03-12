import type { InputBoxProps, BasicInputFieldProps, TextFieldProps, SelectFieldProps } from "../../types/inputTypes";
import "./index.css";

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

export const TextareaField = ({ name, labelText, register, validation, error }: BasicInputFieldProps) => {
    return (
        <InputBox name={name} labelText={labelText} error={error}>
            <textarea placeholder="" {...register(name, validation)} />
        </InputBox>
    );
};

export const TextField = ({
    name,
    labelText,
    type,
    autoComplete,
    readonly,
    register,
    validation,
    error,
}: TextFieldProps) => {
    return (
        <InputBox name={name} labelText={labelText} error={error}>
            <input
                placeholder=""
                type={type}
                autoComplete={autoComplete}
                readOnly={readonly}
                {...register(name, validation)}
            />
        </InputBox>
    );
};

export const SelectField = ({ name, labelText, options, disabled, register, validation, error }: SelectFieldProps) => {
    return (
        <InputBox name={name} labelText={labelText} error={error}>
            <select {...register(name, validation)} disabled={disabled}>
                <option value="" disabled>
                    Selecciona una opción
                </option>
                {options.map(({ value, label }) => (
                    <option key={value} value={value}>
                        {label}
                    </option>
                ))}
            </select>
        </InputBox>
    );
};
