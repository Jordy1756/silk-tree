import { useContext } from "react";
import { StandardModalContext } from "../context/standardModalContext";

export const useStandardModal = () => {
    const context = useContext(StandardModalContext);
    if (!context) throw new Error("useModal debe estar dentro de un ModalProvider");

    return context;
};
