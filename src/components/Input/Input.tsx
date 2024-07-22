import styles from "./Input.module.css";
import React from "react";

interface Input {
  name: string;
  value: any;
  type: string;
  placeholder?: string;
  required?: boolean;
  multiple?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<Input> = ({
  name,
  value,
  type,
  placeholder,
  required,
  multiple,
  onChange,
}) => {
  return (
    <input 
      className={styles.inputStyle}
      name={name}
      value={type === "file" ? undefined : value}
      type={type}
      placeholder={placeholder}
      required={required}
      multiple={multiple}
      onChange={onChange}
    />
  )
};

export default Input;
