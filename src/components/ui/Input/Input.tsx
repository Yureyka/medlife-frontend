import React, { ChangeEvent, useState } from "react";
import cn from "classnames";
import styles from "./Input.module.scss";
import { IInput } from "interfaces";

export const Input: React.FC<IInput> = ({
  label,
  value,
  onChange,
  type,
  defaultValue,
  invalidMessage,
  ...inputProps
}) => {
  return (
    <div className={styles.inputContainer}>
      <input
        placeholder=" "
        className={cn(styles.input, { [styles.invalid]: invalidMessage })}
        value={value}
        onChange={onChange}
        type={type}
        {...inputProps}
      />
      <label className={styles.label}>{label}</label>
      {invalidMessage && <p className={styles.error}>{invalidMessage}</p>}
    </div>
  );
};
