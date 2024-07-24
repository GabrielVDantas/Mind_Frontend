interface DeleteOrUpdateTransaction {
    transactionId: number;
    type: string;
    closeModal?: () => void
}

export default DeleteOrUpdateTransaction;