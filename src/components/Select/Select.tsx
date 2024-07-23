import React from "react";
import styles from "./Select.module.css"

interface CategorySelectProps {
  categories: string[];
  onChange: (value: string) => void;
}      

const Select: React.FC<CategorySelectProps> = ({ categories, onChange }) => {
  return (
    <select onChange={(e) => onChange(e.target.value)} className={styles.selectStyle}>
      <option value="">Selecione uma categoria</option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default Select;


