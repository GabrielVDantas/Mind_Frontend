interface FormProps<T> {
  h3Content: string;
  pContent: string;
  inputs: any[];
  buttonContent: string;
  authForm?: string;
  submitForm: (data: T) => void;
}

export default FormProps;
