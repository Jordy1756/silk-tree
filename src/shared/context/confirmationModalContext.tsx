import { createContext, ReactNode, useRef, useState } from "react";
import ConfirmationModal from "../components/ConfirmationModal";

export type ConfirmationModalContextType = {
    message: string;
    primaryButtonText: string;
    showModal: (message: string, primaryButtonText: string, onConfirm: (id: string | number) => void) => void;
    closeModal: () => void;
};

export const ConfirmationModalContext = createContext<ConfirmationModalContextType | undefined>(undefined);

export const ConfirmationModalProvider = ({ children }: { children: ReactNode }) => {
    const confirmationModalRef = useRef<HTMLDialogElement>(null);
    const [message, setMessage] = useState("");
    const [primaryButtonText, setPrimaryButtonText] = useState("");
    const [onConfirm, setOnConfirm] = useState<(id: string | number) => void>(() => () => {});

    const showModal = (message: string, primaryButtonText: string, onConfirm: (id: string | number) => void) => {
        setMessage(message);
        setPrimaryButtonText(primaryButtonText);
        setOnConfirm(() => onConfirm);
        confirmationModalRef.current?.showModal();
    };

    const closeModal = () => confirmationModalRef.current?.close();

    return (
        <ConfirmationModalContext.Provider value={{ message, primaryButtonText, showModal, closeModal }}>
            {children}
            <ConfirmationModal
                dialogRef={confirmationModalRef}
                message={message}
                primaryButtonText={primaryButtonText}
                onConfirm={onConfirm}
                closeModal={closeModal}
            />
        </ConfirmationModalContext.Provider>
    );
};
