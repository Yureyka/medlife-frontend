import React from "react";
import cn from "classnames";
import styles from "./Textarea.module.scss";
import { IInput } from "interfaces";

export const Textarea: React.FC<IInput> = ({
  label,
  value,
  onChange,
  invalidMessage,
  maxLength,
}) => {
  return (
    <div className={styles.inputContainer}>
      <textarea
        placeholder=" "
        className={cn(styles.input, { [styles.invalid]: invalidMessage })}
        value={value}
        onChange={onChange}
        maxLength={maxLength || 150}
      />
      <label className={styles.label}>{label}</label>
      {invalidMessage && <p className={styles.error}>{invalidMessage}</p>}
    </div>
  );
};
