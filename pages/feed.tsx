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
        response && response.status === 200 && setTransactions(response.data.transaction);
      } catch (error) {
        console.error(error);
      }
    }
    feed();
  }, []);

  return (
    <Inside
      content={
        transactions.length === 0 ? (
          <H2 content="Você não criou nenhuma transação ainda, tente criar uma agora!" />
        ) : (
          transactions.map((transaction) => <Card transaction={transaction} key={transaction.id}/>)
        )
      }
    />
  );
};

export default Feed;
