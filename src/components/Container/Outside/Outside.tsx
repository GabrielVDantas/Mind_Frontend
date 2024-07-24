import React from "react";
import styles from "./Outside.module.css";

interface Outside {
  rightContent?: React.ReactNode;
  leftContent?: React.ReactNode;
}

const Outside: React.FC<Outside> = ({ rightContent, leftContent }) => {
  if (leftContent) {
    return (
      <section className={styles.outside}>
        <div className={styles.leftContent}>
          {leftContent}
        </div>
        <div className={styles.banner}>
          <img src="https://wallpaperaccess.com/full/1104826.jpg" />
        </div>
      </section>
    );
  } else if (rightContent) {
    return (
      <section className={styles.outside}>
        <div className={styles.banner}>
          <img src="https://wallpaperaccess.com/full/1104826.jpg" />
        </div>
        <div className={styles.rightContent}>
          {rightContent}
        </div>
      </section>
    );
  }
};

export default Outside;
