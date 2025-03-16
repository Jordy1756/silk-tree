import { createContext, ReactNode, useRef, useState } from "react";
import { StandardModalContextType } from "../types/modalTypes";
import StandardModal from "../components/StandarModal";

export const StandardModalContext = createContext<StandardModalContextType | undefined>(undefined);

export const StandardModalProvider = ({ children }: { children: ReactNode }) => {
    const standardModalRef = useRef<HTMLDialogElement>(null);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState<ReactNode>();

    const showModal = (title: string, content: ReactNode) => {
        setTitle(title);
        setContent(content);
        standardModalRef.current?.showModal();
    };

    const closeModal = () => standardModalRef.current?.close();

    return (
        <StandardModalContext.Provider value={{ title, content, showModal, closeModal }}>
            {children}
            <StandardModal dialogRef={standardModalRef} title={title} closeModal={closeModal}>
                {content}
            </StandardModal>
        </StandardModalContext.Provider>
    );
};
