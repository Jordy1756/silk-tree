import { useContext } from "react";
import { ModalContext } from "../context/modalContext";

export const useModal = () => {
    const context = useContext(ModalContext);
    if (!context) throw new Error("useModal debe estar dentro de un ModalProvider");

    return context;
};
