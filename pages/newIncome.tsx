import { useRouter } from "next/router";
import Inside from "../src/components/Container/Inside";
import Form from "../src/components/Form/Form";
import InputData from "../src/interfaces/Input";
import TransactionRequests from "../src/service/transactionService/transactionRequests";

const NewIncomeForm = () => {
  const router = useRouter();
  const inputs: InputData[] = [
    {
      name: "amount",
      type: "number",
      placeholder: "Quantia...",
      required: true,
    },
    {
      name: "description",
      type: "text",
      placeholder: "Descrição da transação...",
      required: true,
    },
  ];

  const submitNewTransaction = async (data: Record<string, unknown>) => {
    try {
      const response = await TransactionRequests.newTransactionRequest(data);
      response && response.status === 201 && router.push("/feed");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Form
      h3Content="Nova receita"
      pContent="Insira os dados para adicionar uma nova receita"
      inputs={inputs}
      buttonContent="Adicionar"
      submitForm={submitNewTransaction}
      incomeForm={true}
    />
  );
};

const NewProject = () => {
  return <Inside content={<NewIncomeForm />} />;
};

export default NewProject;
