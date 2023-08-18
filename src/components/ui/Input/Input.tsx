import React, { InputHTMLAttributes, ChangeEvent, useState } from "react";
import cn from "classnames";
import styles from "./Input.module.scss";

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  type: "text" | "tel";
  defaultValue?: string;
}

const PHONE = /(?:\+|\d)[\d\-\(\) ]{9,}\d/g;

export const Input: React.FC<IInput> = ({
  label,
  value,
  onChange,
  type,
  defaultValue,
  ...inputProps
}) => {
  const [isValid, setIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const validateOnBlur = (event: ChangeEvent<HTMLInputElement>) => {
    if (type === "text") {
      setIsValid(event.target.value.trim() !== "");
      setErrorMessage("Поле не может быть пустым");
    } else if (type === "tel") {
      setIsValid(PHONE.test(value));
      setErrorMessage("Введите номер в формате +77777777777");
    }
  };

  return (
    <div className={styles.inputContainer}>
      <input
        placeholder=" "
        className={cn(styles.input, { [styles.invalid]: !isValid })}
        value={value}
        onChange={onChange}
        type={type}
        onBlur={validateOnBlur}
        {...inputProps}
      />
      <label className={styles.label}>{label}</label>
      {!isValid && <p className={styles.error}>{errorMessage}</p>}
    </div>
  );
};
