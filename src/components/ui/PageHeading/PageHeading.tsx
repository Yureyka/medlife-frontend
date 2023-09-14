import React from "react";
import { Breadcrumbs } from "common";
import { Container } from "ui";

import styles from "./PageHeading.module.scss";
import { ArrowDiagonal } from "icons";
import { IPageHeading } from "interfaces";

export const PageHeading: React.FC<IPageHeading> = ({ title }) => {
  return (
    <div className={styles.pageHeading}>
      <Container>
        <Breadcrumbs></Breadcrumbs>
        <div className={styles.headingBottom}>
          <h1 className={styles.pageTitle}>{title}</h1>
          <div className={styles.arrows}>
            <ArrowDiagonal />
            <ArrowDiagonal />
            <ArrowDiagonal />
          </div>
        </div>
      </Container>
    </div>
  );
};
