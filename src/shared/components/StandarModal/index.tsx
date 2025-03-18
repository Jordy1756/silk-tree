import { ReactNode, RefObject } from "react";
import CloseIcon from "../../../assets/icons/CloseIcon";
import "./index.css";

type Props = {
    dialogRef: RefObject<HTMLDialogElement>;
    title: string;
    children: ReactNode;
    closeModal: () => void;
};

const StandardModal = ({ dialogRef, title, children, closeModal }: Props) => {
    return (
        <dialog ref={dialogRef} className="standard__modal" closedBy="any">
            <header>
                <h5>{title}</h5>
                <button onClick={() => closeModal()}>
                    <CloseIcon width={24} height={24} color="var(--neutral-50)" />
                </button>
            </header>
            <main>{children}</main>
        </dialog>
    );
};

export default StandardModal;
