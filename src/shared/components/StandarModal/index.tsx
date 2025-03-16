import type { StandardModalProps } from "../../types/modalTypes";
import CloseIcon from "../../../assets/icons/CloseIcon";
import "./index.css";

const StandardModal = ({ dialogRef, title, children, closeModal }: StandardModalProps) => {
    return (
        <dialog ref={dialogRef} className="standard__modal">
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
