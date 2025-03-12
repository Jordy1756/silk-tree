import { FieldError, UseFormRegister } from "react-hook-form";
import { ReactNode } from "react";

type ValidationTypes = {
    required: { value: boolean; message: string };
    maxLength?: { value: number; message: string };
    minLength?: { value: number; message: string };
    pattern?: { value: RegExp; message: string };
    min?: { value: number | string; message: string };
    max?: { value: number | string; message: string };
};

export type InputBoxProps = {
    name: string;
    labelText: string;
    error?: FieldError | undefined;
    children?: ReactNode;
};

export type BasicInputFieldProps = InputBoxProps & {
    register: UseFormRegister<any>;
    validation: ValidationTypes;
};

export type TextFieldProps = BasicInputFieldProps & {
    type: "text" | "email" | "password" | "time" | "date";
    autoComplete?: "on" | "off";
    readonly?: boolean;
};

export type SelectFieldProps = BasicInputFieldProps & {
    options: { value: string; label: string }[];
    disabled?: boolean;
};
