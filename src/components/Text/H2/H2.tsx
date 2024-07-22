import React from "react";
import styles from "../Text.module.css";

interface H2 {
  content: string;
}

const H2: React.FC<H2> = ({ content }) => {
  return <h2 className={styles.h2Style}>{content}</h2>;
};

export default H2;
