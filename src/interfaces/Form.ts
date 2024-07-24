interface FormProps<T> {
  h3Content: string;
  pContent: string;
  inputs: any[];
  buttonContent: string;
  submitForm: (data: T) => void;
  authForm?: string;
  incomeForm?: boolean;
  expenseForm?: boolean;
  modalForm?: boolean;
}

export default FormProps;
