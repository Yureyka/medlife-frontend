import React from "react";
import styles from "./Checkbox.module.scss";
import { ICheckbox } from "interfaces";

export const Checkbox: React.FC<ICheckbox> = ({ label, checked, onChange }) => {
  const handleChange = () => {
    onChange(!checked);
  };

  return (
    <div className={styles.checkboxWrapper}>
      <label className={styles.checkboxLabel}>
        <input
          type="checkbox"
          checked={checked}
          onChange={handleChange}
          className={styles.checkboxInput}
        />
        <span className={styles.checkmark}></span>
        {label}
      </label>
    </div>
  );
};
