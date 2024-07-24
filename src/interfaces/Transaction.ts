interface Category {
  id: number;
  name: string;
}

enum TransactionType {
  EXPENSE = "despesa",
  INCOME = "reserva",
} 

interface Transaction {
  id: number;
  description: string;
  amount: number;
  category: Category;
  type: TransactionType;
}

export default Transaction;
