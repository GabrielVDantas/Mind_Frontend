import { useEffect, useState } from "react";
import Inside from "../src/components/Container/Inside";
import H2 from "../src/components/Text/H2";
import Card from "../src/components/Card";
import TransactionRequests from "../src/service/transactionService/transactionRequests";

const Feed = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    async function feed() {
      try {
        const response = await TransactionRequests.getFeedTransactionsRequest();
        response &&
          response.status === 200 &&
          setTransactions(response.data.transaction);
      } catch (error) {
        console.error(error);
      }
    }
    feed();
  }, []);

  const handleDeleteTransaction = (transactionId) => {
    setTransactions((prevTransactions) =>
      prevTransactions.filter((transaction) => transaction.id !== transactionId)
    );
  };

  return (
    <Inside
      content={
        transactions.length === 0 ? (
          <H2 content=" Estamos buscando as transações (ou talvez você não tenha criado uma ainda)..." />
        ) : (
          transactions.map((transaction) => (
            <Card
              transaction={transaction}
              key={transaction.id}
              onDelete={handleDeleteTransaction}
            />
          ))
        )
      }
    />
  );
};

export default Feed;
