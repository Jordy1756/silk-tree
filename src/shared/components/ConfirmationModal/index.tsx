import type { ConfirmModalProps } from "../../types/modalTypes";
import Actionable from "../Actionable";
import "./index.css";

const ConfirmationModal = ({ dialogRef, message, primaryButtonText, onConfirm, closeModal }: ConfirmModalProps) => {
    return (
        <dialog ref={dialogRef} className="confirmation__modal">
            <h5>{message}</h5>
            <div>
                <Actionable
                    type="button"
                    className="primary"
                    buttonType="button"
                    onClick={() => {
                        onConfirm("");
                        closeModal();
                    }}
                >
                    {primaryButtonText}
                </Actionable>
                <Actionable type="button" className="secondary" buttonType="button" onClick={closeModal}>
                    Cancelar
                </Actionable>
            </div>
        </dialog>
    );
};

export default ConfirmationModal;
