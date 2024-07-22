import React from "react";
import H3 from "../Text/H3";
import P from "../Text/P";
import styles from "./Card.module.css";
import Transaction from "../../interfaces/Transaction";

interface Card {
  transaction: Transaction;
}

const Card: React.FC<Card> = ({ transaction }) => {
  return (
    <article className={styles.cardContainer} key={transaction.id}>
      <H3 content={`${transaction.amount}`} />
      <P content={transaction.description} />
    </article>
  );
};

export default Card;
