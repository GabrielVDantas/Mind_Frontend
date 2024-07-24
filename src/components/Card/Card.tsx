import React, { useState } from "react";
import H3 from "../Text/H3";
import P from "../Text/P";
import styles from "./Card.module.css";
import Transaction from "../../interfaces/Transaction";
import Strong from "../Text/Strong";
import UpdateTransaction from "./UpdateTransaction/UpdateTransaction";
import DeleteTransaction from "./DeleteTransaction/DeleteTransaction";

interface CardProps {
  transaction: Transaction;
  onDelete: (transactionId: string) => void;
}

const Card: React.FC<CardProps> = ({ transaction, onDelete }) => {
  const [cardData, setCardData] = useState({
    category: transaction.category,
    amount: transaction.amount,
    description: transaction.description,
  });

  const handleCardDataUpdate = (newData: Record<string, unknown>) => {
    setCardData((prevData) => ({
      ...prevData,
      ...newData,
    }));
  };
  

  return (
    <article className={styles.cardContainer} key={transaction.id}>      
      <Strong content={`Categoria: ${cardData.category.name}`}/>
      <H3 content={`R$: ${cardData.amount}`} />
      <P content={`Motivo: ${cardData.description}`} />
      <div className={styles.cardButtons}>
        <UpdateTransaction transactionId={transaction.id} type={transaction.type}  onDataUpdate={handleCardDataUpdate}/>
        <DeleteTransaction transactionId={transaction.id} onDataUpdate={handleCardDataUpdate} onDelete={onDelete}/>
      </div>
    </article>
  );
};

export default Card;
