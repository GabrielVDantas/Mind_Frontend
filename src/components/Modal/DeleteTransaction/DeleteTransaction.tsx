import React, { useState } from "react";
import Button from "../../Button/Button";
import Modal from "../Modal";
import InputData from "../../../interfaces/Input";
import Form from "../../Form/Form";
import TransactionRequests from "../../../service/transactionService/transactionRequests";
import { useRouter } from "next/router";
import DeleteOrUpdate from "../../../interfaces/DeleteOrUpdate";

const DeleteTransaction: React.FC<DeleteOrUpdate> = ({transactionId}) => {
  const [deleteTransactionModal, setDeleteTransactionModal] = useState(false);

  const openDeleteTransactionModal = () => {
    setDeleteTransactionModal(true);
  };

  const closeDeleteTransactionModal = () => {
    setDeleteTransactionModal(false);
  };

  return (
    <>
      <Button
        content="Deletar"
        buttonAction={openDeleteTransactionModal}
        openModal={true}
      />
      <Modal
        isOpen={deleteTransactionModal}
        onClose={closeDeleteTransactionModal}
        content={<DeleteTransactionForm transactionId={transactionId}/>}
      />
    </>
  );
};

export default DeleteTransaction;

const DeleteTransactionForm: React.FC<DeleteOrUpdate> = ({transactionId}) => {
    const router = useRouter();
  const inputs: InputData[] = [
    {
      name: "keyword",
      type: "text",
      placeholder: "CONFIRMAR...",
      required: true,
    },
  ];

  const submitDeleteTransaction = async (data: Record<string, string>) => {
    const response = await TransactionRequests.deleteTransactionRequest(data, transactionId);
    response && response.status === 204 && router.push("/feed");
  };

  return (
    <Form
      h3Content="Deletar transação"
      pContent="Digite 'CONFIRMAR' para deletar a transação"
      inputs={inputs}
      buttonContent="Deletar"
      submitForm={submitDeleteTransaction}
    />
  );
};
