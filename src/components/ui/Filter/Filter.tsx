import React, { ChangeEvent, useState } from "react";
import cn from "classnames";
import styles from "./Filter.module.scss";
import { IFilter } from "interfaces";

export const Filter: React.FC<IFilter> = ({
  placeholder,
  onSearch,
  ...inputProps
}) => {
  const [value, setValue] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <div className={styles.filterContainer}>
      <input
        placeholder={placeholder}
        className={cn(styles.filter)}
        value={value}
        onChange={handleChange}
        {...inputProps}
      />
    </div>
  );
};
