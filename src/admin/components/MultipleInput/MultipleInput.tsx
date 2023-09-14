import React, { useEffect, useState } from "react";
import cn from "classnames";
import styles from "./MultipleInput.module.scss";
import { IMultipleInput } from "interfaces";
import { Cross } from "icons";

export const MultipleInput: React.FC<IMultipleInput> = ({
  label,
  placeholder,
  values,
  onChange,
  onAddNew,
  ...inputProps
}) => {
  const [inputValues, setInputValues] = useState<string[]>([]);

  useEffect(() => {
    values && setInputValues(values);
  }, [values]);

  const handleChange = (value: string, changeIndex: number) => {
    const newValues = inputValues.map((elem, index) =>
      changeIndex === index ? value : elem
    );
    setInputValues(newValues);
  };

  return (
    <div className={styles.multipleInput}>
      {inputValues?.map((value, valueId) => (
        <div key={valueId} className={styles.inputContainer}>
          <input
            key={valueId}
            placeholder={placeholder}
            className={cn(styles.input)}
            value={value}
            onChange={(e) => {
              handleChange(e.target.value, valueId);
            }}
            onBlur={() => {
              onChange(inputValues);
            }}
            {...inputProps}
          />
          <button
            className={styles.deleteBtn}
            onClick={(e) => {
              e.preventDefault();
              setInputValues((prev) =>
                prev.filter((_, index) => index !== valueId)
              );
            }}
          >
            <Cross />
          </button>
        </div>
      ))}
      <button
        className={styles.addBtn}
        onClick={(e) => {
          e.preventDefault();
          setInputValues((prev) => [...prev, ""]);
        }}
      >
        Добавить
      </button>
    </div>
  );
};
