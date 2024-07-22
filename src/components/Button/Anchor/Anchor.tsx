import React, { ReactNode } from "react";
import styles from "../Button.module.css";
import Link from "next/link";

interface AnchorProps {
  to: string;
  content: string | ReactNode;
}

const Anchor: React.FC<AnchorProps> = ({ to, content }) => {
  return (
    <Link className={styles.basic} href={to}>
      {content}
    </Link>
  );
};

export default Anchor;
