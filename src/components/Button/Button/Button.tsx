import React, { ReactNode } from "react";
import styles from "../Button.module.css";
interface ButtonProps {
  content: string | ReactNode;
  buttonAction?: () => void;
  closeModal?: boolean;
  openModal?: boolean;
  icon?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  content,
  buttonAction,
  closeModal = false,
  openModal = false,
  icon = false,
}) => {
  const buttonCss = closeModal
    ? styles.closeModal
    : openModal
    ? styles.openModal
    : icon
    ? styles.iconStyle
    : styles.basic;

  return (
    <button className={buttonCss} onClick={buttonAction}>
      {content}
    </button>
  );
};

export default Button;
