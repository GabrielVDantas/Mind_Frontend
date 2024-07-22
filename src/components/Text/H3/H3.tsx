import React from "react";
import styles from "../Text.module.css";

interface H3 {
  content: string;
}

const H3: React.FC<H3> = ({ content }) => {
  return <h3 className={styles.h3Style}>{content}</h3>;
};

export default H3;
