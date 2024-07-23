import React from "react";
import H3 from "../Text/H3";
import P from "../Text/P";
import styles from "./Card.module.css";
import Transaction from "../../interfaces/Transaction";
import UpdateTransaction from "../Modal/UpdateTransaction/UpdateTransaction";
import DeleteTransaction from "../Modal/DeleteTransaction/DeleteTransaction";
import Strong from "../Text/Strong";

interface CardProps {
  transaction: Transaction;
}

const Card: React.FC<CardProps> = ({ transaction }) => {
  return (
    <article className={styles.cardContainer} key={transaction.id}>      
      <Strong content={`Categoria: ${transaction.category.name}`}/>
      <H3 content={`R$: ${transaction.amount}`} />
      <P content={`Motivo: ${transaction.description}`} />
      <div className={styles.cardButtons}>
        <UpdateTransaction transactionId={transaction.id} />
        <DeleteTransaction transactionId={transaction.id}/>
      </div>
    </article>
  );
};

export default Card;
