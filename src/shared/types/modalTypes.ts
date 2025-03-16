import { ReactNode, RefObject } from "react";

type BasicModalProps = {
    dialogRef: RefObject<HTMLDialogElement>;
    closeModal: () => void;
};

export type StandardModalProps = BasicModalProps & {
    title: string;
    children: ReactNode;
};

export type ConfirmModalProps = BasicModalProps & {
    message: string;
    primaryButtonText: string;
    onConfirm: (id: string | number) => void;
};

export type StandardModalContextType = {
    title: string;
    content: ReactNode;
    showModal: (title: string, content: ReactNode) => void;
    closeModal: () => void;
};

export type ConfirmationModalContextType = {
    message: string;
    primaryButtonText: string;
    showModal: (message: string, primaryButtonText: string, onConfirm: (id: string | number) => void) => void;
    closeModal: () => void;
};
