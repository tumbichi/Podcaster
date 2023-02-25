import React, { InputHTMLAttributes } from "react";
import styles from "./InputText.module.css";
import { ChangeEvent } from "react";

interface InputTextProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  onChange: (text: string) => void;
}

const InputText = ({ placeholder, className, onChange, type = "text", ...props }: InputTextProps) => {
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <input
      className={`${styles.container} ${className}`}
      placeholder={placeholder}
      type={type}
      onChange={handleOnChange}
      {...props}
    />
  );
};

export default InputText;
