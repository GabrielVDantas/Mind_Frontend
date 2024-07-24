import React, { useState } from "react";
import Button from "../../Button/Button";
import Modal from "../Modal";
import InputData from "../../../interfaces/Input";
import Form from "../../Form/Form";
import TransactionRequests from "../../../service/transactionService/transactionRequests";
import { useRouter } from "next/router";
import DeleteOrUpdate from "../../../interfaces/DeleteOrUpdate";

const UpdateTransaction: React.FC<DeleteOrUpdate> = ({ transactionId, type }) => {
  const [updateTransactionModal, setUpdateTransactionModal] = useState(false);

  const openUpdateTransactionModal = () => {
    setUpdateTransactionModal(true);
  };

  const closeUpdateTransactionModal = () => {
    setUpdateTransactionModal(false);
  };

  return (
    <>
      <Button
        content="Atualizar"
        buttonAction={openUpdateTransactionModal}
        openModal={true}
      />
      <Modal
        isOpen={updateTransactionModal}
        onClose={closeUpdateTransactionModal}
        content={<UpdateTransactionForm transactionId={transactionId} closeModal={closeUpdateTransactionModal}
          type={`${type}`}
        />}
      />
    </>
  );
};

export default UpdateTransaction;

const UpdateTransactionForm: React.FC<DeleteOrUpdate> = ({ transactionId, closeModal, type }) => {
  const router = useRouter();
  
  const inputs: InputData[] = [
    {
      name: "amount",
      type: "number",
      placeholder: "Nova quantia...",
      required: true,
    },
    {
      name: "description",
      type: "text",
      placeholder: "Nova descrição da transação...",
      required: true,
    },
  ];

  const submitUpdateTransaction = async (data: Record<string, unknown>) => {
    const response = await TransactionRequests.updateTransactionRequest(
      data,
      transactionId
    );
    if (response && response.status === 200) {
      closeModal();
    }
  };

  return (
    <Form
      h3Content="Atualizar transação"
      pContent="Errou alguma coisa? Sem problemas, atualize as informações!"
      inputs={inputs}
      buttonContent="Atualizar"
      submitForm={submitUpdateTransaction}
      incomeForm={type === "reserva"}
      expenseForm={type === "despesa"}
    />
  );
};
