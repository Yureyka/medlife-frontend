import React, { useRef, useEffect } from "react";
import cn from "classnames";
import styles from "./Modal.module.scss";
import { IModal } from "interfaces";
import { Cross } from "icons";

export const Modal: React.FC<IModal> = ({ isOpen, onClose, children }) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  const handleClose = () => {
    onClose();
  };

  const handleOutsideClick = (event: Event) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      window.document.body.style.overflow = "hidden"
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      window.document.body.style.overflow = "auto"
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <div
      className={cn(styles.modal, {
        [styles.open]: isOpen,
      })}
    >
      <div className={styles.modalContent} ref={modalRef}>
        <button aria-label="Закрыть модальное окно" className={styles.closeButton} onClick={handleClose}>
          <Cross />
        </button>
        {children}
      </div>
    </div>
  );
};
