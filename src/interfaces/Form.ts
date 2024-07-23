interface FormProps<T> {
  h3Content: string;
  pContent: string;
  inputs: any[];
  buttonContent: string;
  submitForm: (data: T) => void;
  authForm?: string;
  needCategory?: boolean;
}

export default FormProps;
