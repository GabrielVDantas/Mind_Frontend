import React from "react";
import styles from "../Text.module.css";

interface P {
  content: string;
}

const P: React.FC<P> = ({ content }) => {
  return <p className={styles.pStyle}>{content}</p>;
};

export default P;
