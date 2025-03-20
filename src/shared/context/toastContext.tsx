import { createContext, ReactNode, useEffect, useState } from "react";
import { ToastProps } from "../types/toastTypes";
import Toast from "../components/Toast";

type ToastContextType = {
    toasts: ToastProps[];
    addToast: (toast: ToastProps) => void;
    removeToast: (id: string) => void;
};

export const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider = ({ children }: { children: ReactNode }) => {
    const [toasts, setToasts] = useState<ToastProps[]>([]);

    const addToast = (toast: ToastProps) => {
        const newToast: ToastProps = {
            ...toast,
            id: `toast-${Date.now()}`,
            type: toast.type,
        };
        setToasts((prevToasts) => [...prevToasts, newToast]);
    };

    const removeToast = (id: string) => setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));

    useEffect(() => {
        const timers = toasts.map(({ id }) => setTimeout(() => removeToast(id), 3000));

        return () => timers.forEach((timer) => clearTimeout(timer));
    }, [toasts]);

    return (
        <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
            {children}
            <div className="toasts__container">
                {toasts.map(({ id, title, message, type }) => (
                    <Toast key={id} id={id} title={title} message={message} type={type} />
                ))}
            </div>
        </ToastContext.Provider>
    );
};
