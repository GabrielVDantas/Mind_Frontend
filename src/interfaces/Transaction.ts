interface Category {
  id: number;
  name: string;
}

interface Transaction {
  id: number;
  description: string;
  amount: number;
  category: Category;
}

export default Transaction;
