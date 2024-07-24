interface DeleteOrUpdate {
    transactionId: number;
    type: string;
    closeModal?: () => void
}

export default DeleteOrUpdate;