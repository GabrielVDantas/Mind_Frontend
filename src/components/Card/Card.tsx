import React from "react";
import H3 from "../Text/H3";
import P from "../Text/P";
import styles from "./Card.module.css";
import Transaction from "../../interfaces/Transaction";
import Strong from "../Text/Strong";
import UpdateTransaction from "./UpdateTransaction/UpdateTransaction";
import DeleteTransaction from "./DeleteTransaction/DeleteTransaction";

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
        <UpdateTransaction transactionId={transaction.id} type={transaction.type} />
        <DeleteTransaction transactionId={transaction.id} type={transaction.type}/>
      </div>
    </article>
  );
};

export default Card;
