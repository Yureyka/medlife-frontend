import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowDiagonal } from "icons";

import styles from "./Breadcrumbs.module.scss";

export const Breadcrumbs: React.FC = () => {
  const locations = useLocation().pathname;

  const breadcrumbs = [
    { label: "Главная", to: "/" },
    { label: "Услуги и цены", to: "/services" },
    { label: "Команда", to: "/team" },
  ];

  return (
    <div className={styles.breadcrumbs}>
      {breadcrumbs
        .filter((breadcrumb) => locations.includes(breadcrumb.to))
        .map((breadcrumb, index) => (
          <React.Fragment key={breadcrumb.to}>
            {index > 0 && (
              <span className={styles.separator}>
                <ArrowDiagonal />
              </span>
            )}
            {index === breadcrumbs.length - 1 ? (
              <span className={styles.current}>{breadcrumb.label}</span>
            ) : (
              <Link to={breadcrumb.to} className={styles.link}>
                {breadcrumb.label}
              </Link>
            )}
          </React.Fragment>
        ))}
    </div>
  );
};
