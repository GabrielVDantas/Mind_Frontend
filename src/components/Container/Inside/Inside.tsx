import { ReactNode } from "react";
import Nav from "../../Nav";
import styles from "./Inside.module.css";

interface Inside {
  content: ReactNode;
}

const Inside: React.FC<Inside> = ({ content }) => {
  return (
    <section className={styles.inside}>
      <Nav />
      <div className={styles.insideContent}>{content}</div>
    </section>
  );
};

export default Inside;
