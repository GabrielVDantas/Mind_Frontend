import { useEffect, useState } from "react";
import Inside from "../src/components/Container/Inside";
import H2 from "../src/components/Text/H2";
import Card from "../src/components/Card";

const Feed = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    async function feed() {
      try {
        
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
          transactions.map((transaction) => <Card transaction={transaction} />)
        )
      }
    />
  );
};

export default Feed;
