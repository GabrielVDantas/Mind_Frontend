import React, { ReactNode } from "react";
import styles from "./Modal.module.css";
import Button from "../Button/Button";
import { LuXCircle } from "react-icons/lu";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  content: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, content }) => {
  if (!isOpen) return null;

  return (
    <section className={styles.modalOverlay}>
      <div className={styles.modalCard}>
        <>
          <Button buttonAction={onClose} content={<LuXCircle />} closeModal={true}/>
        </>
        <div className={styles.divWithContent}>{content}</div>
      </div>
    </section>
  );
};

export default Modal;
