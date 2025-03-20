import { ToastError, ToastProps } from "../types/toastTypes";

export const getToastData = (title: string, message: string, type: ToastError): ToastProps => ({
    id: "",
    title,
    message,
    type,
});
