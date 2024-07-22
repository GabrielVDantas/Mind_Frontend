import React from "react";
import styles from "../Text.module.css";

interface Strong {
  content: string;
}

const Strong: React.FC<Strong> = ({ content }) => {
  return <strong className={styles.strongStyle}>{content}</strong>;
};

export default Strong;
