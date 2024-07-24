import React, { useState } from "react";
import Button from "../../Button/Button";
import Modal from "../../Modal/Modal";
import InputData from "../../../interfaces/Input";
import Form from "../../Form/Form";
import TransactionRequests from "../../../service/transactionService/transactionRequests";
import DeleteOrUpdateTransaction from "../../../interfaces/DeleteOrUpdateTransaction";

const DeleteTransactionForm: React.FC<DeleteOrUpdateTransaction> = ({
  transactionId,
  closeModal,
}) => {
  const inputs: InputData[] = [
    {
      name: "keyword",
      type: "text",
      placeholder: "CONFIRMAR...",
      required: true,
    },
  ];

  const submitDeleteTransaction = async (data: Record<string, string>) => {
    const response = await TransactionRequests.deleteTransactionRequest(
      data,
      transactionId
    );
    response && response.status === 204 && closeModal();
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

const DeleteTransaction: React.FC<DeleteOrUpdateTransaction> = ({
  transactionId,
  type,
}) => {
  const [deleteTransactionModal, setDeleteTransactionModal] = useState(false);

  const openDeleteTransactionModal = () => setDeleteTransactionModal(true);

  const closeDeleteTransactionModal = () => setDeleteTransactionModal(false);

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
        content={
          <DeleteTransactionForm
            transactionId={transactionId}
            closeModal={closeDeleteTransactionModal}
            type={`${type}`}
          />
        }
      />
    </>
  );
};

export default DeleteTransaction;
