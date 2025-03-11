import { createContext, ReactNode, useRef, useState } from "react";
import Modal from "../components/Modal";

type modalContextType = {
    title: string;
    content: ReactNode;
    showModal: (title: string, content: ReactNode) => void;
    closeModal: () => void;
};

export const ModalContext = createContext<modalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
    const dialogRef = useRef<HTMLDialogElement>(null);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState<ReactNode>();

    const showModal = (title: string, content: ReactNode) => {
        setTitle(title);
        setContent(content);
        dialogRef.current?.showModal();
    };

    const closeModal = () => dialogRef.current?.close();

    return (
        <ModalContext.Provider value={{ title, content, showModal, closeModal }}>
            {children}
            <Modal dialogRef={dialogRef} title={title} closeModal={closeModal}>
                {content}
            </Modal>
        </ModalContext.Provider>
    );
};
