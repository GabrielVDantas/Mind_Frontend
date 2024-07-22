import styles from "./Form.module.css";
import { FormEvent, useState } from "react";
import H3 from "../Text/H3";
import Button from "../Button/Button";
import Anchor from "../Button/Anchor";
import Input from "../Input";
import P from "../Text/P";
import FormProps from "../../interfaces/Form";

const Form = <T extends Record<string, unknown>>({
  h3Content,
  pContent,
  inputs,
  buttonContent,
  authForm,
  submitForm,
}: FormProps<T>) => {
  const [data, setData] = useState<T>(() => ({} as T));

  const handleSubmitForm = async (e: FormEvent) => {
    e.preventDefault();
    submitForm(data);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    if (type === "file") {
      handleInputFileChange(e);
    } else {
      setData({
        ...data,
        [name]: value,
      });
    }
  };

  const handleInputFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target;
    const file = e.target.files?.[0];
    setData({
      ...data,
      [name]: file
    })
  };

  return (
    <form onSubmit={handleSubmitForm} className={styles.formStyle}>
      <H3 content={h3Content} />
      <P content={pContent} />
      {inputs.map((input, index) => (
        <div key={index}>
          <Input
            name={input.name}
            value={data[input.name] || ""}
            type={input.type}
            placeholder={input.placeholder}
            required={input.required}
            multiple={input.multiple}
            onChange={handleInputChange}
          />
        </div>
      ))}
      <Button content={buttonContent} />
      {authForm === "register" ? (
        <Anchor to="/login" content="Já tenho uma conta" />
      ) : authForm === "login" ? (
        <Anchor to="/register" content="Sou novo aqui" />
      ) : null}
    </form>
  );
};

export default Form;
