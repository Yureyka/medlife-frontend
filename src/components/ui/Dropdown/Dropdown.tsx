import React, { useState, useEffect, useRef } from "react";
import cn from "classnames";

import styles from "./Dropdown.module.scss";
import { IDropdown } from "interfaces";

export const Dropdown: React.FC<IDropdown> = ({
  options,
  onSelect,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
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
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleOptionClick = (option: number) => {
    setSelectedOption(option);
    onSelect && onSelect(selectedOption);
    setIsOpen(false);
  };

  return (
    <div ref={dropdownRef} className={styles.dropdown}>
      <div className={styles.selectedOption} onClick={() => setIsOpen(!isOpen)}>
        {children}
      </div>
      <ul
        className={cn(styles.optionsList, {
          [styles.isOpen]: isOpen,
        })}
      >
        {options.map((option, index) => (
          <li
            key={index}
            className={styles.option}
            onClick={() => handleOptionClick(index)}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};
