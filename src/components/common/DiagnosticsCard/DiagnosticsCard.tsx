import React from "react";
import { Link } from "react-router-dom";
import { ArrowDiagonal } from "icons";

import styles from "./DiagnosticsCard.module.scss";
import { IDiagnosticsCard } from "interfaces";

export const DiagnosticsCard: React.FC<IDiagnosticsCard> = ({
  title,
  description,
  href,
}) => {
  return (
    <div className={styles.diagnosticsCard}>
      <Link className={styles.cardLink} to={href} />
      <h5 className={styles.title}>{title}</h5>
      <p className={styles.description}>{description}</p>
      <ArrowDiagonal />
    </div>
  );
};
