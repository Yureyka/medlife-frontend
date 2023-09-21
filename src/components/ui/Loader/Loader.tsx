import React from "react";
import styles from "./Loader.module.scss";

export const Loader: React.FC = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.dot1}></div>
      <div className={styles.dot2}></div>
      <div className={styles.dot3}></div>
    </div>
  );
};
