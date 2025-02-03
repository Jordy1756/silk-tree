import { UseFormHandleSubmit } from "react-hook-form";
import "./index.css";

type FormProps = {
    children: React.ReactNode;
    onSubmit: (data: any) => void;
    handleSubmit: UseFormHandleSubmit<any, undefined>;
};

const Form = ({ children, onSubmit, handleSubmit }: FormProps) => {
    return (
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
            {children}
        </form>
    );
};

export default Form;
