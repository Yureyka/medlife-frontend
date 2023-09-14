import React from "react";

import styles from "./AdvantageCard.module.scss";
import { IAdvantageCard } from "interfaces";

export const AdvantageCard: React.FC<IAdvantageCard> = ({
  title,
  counter,
  description,
}) => {
  return (
    <div className={styles.advantageCard}>
      <div className={styles.cardHeader}>
        <h5 className={styles.title}>{title}</h5>
        <span className={styles.counter}>{counter}</span>
      </div>
      <p className={styles.description}>{description}</p>
    </div>
  );
};
