import React, { useEffect, useRef, useState } from "react";
import styles from "./Select.module.scss";
import cn from "classnames";
import { IOption, ISelect } from "interfaces";

export const Select: React.FC<ISelect> = ({
  options,
  onSelect,
  defaultSelected,
  label,
}) => {
  const [selectedValue, setSelectedValue] = useState<IOption | undefined>();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    setSelectedValue(defaultSelected);
  }, [defaultSelected]);

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleSelect = (value: IOption) => {
    setSelectedValue(value);
    onSelect(value);
    setIsOpen(false);
  };

  return (
    <div className={styles.selectContainer}>
      <div
        className={cn(styles.select, { [styles.open]: isOpen })}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <label className={styles.label}>{label}</label>
        <span className={styles.arrowIcon} />
        <div className={styles.selectContent}>{selectedValue?.label}</div>
      </div>
      {isOpen && (
        <div className={styles.optionsWrapper} ref={dropdownRef}>
          <ul className={styles.optionsList}>
            {options.map((option) => (
              <li
                key={option.value}
                className={styles.optionItem}
                onClick={() => handleSelect(option)}
              >
                {option.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
