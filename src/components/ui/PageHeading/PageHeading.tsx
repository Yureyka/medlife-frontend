import React from "react";
import cn from "classnames";
import { Breadcrumbs } from "common";
import { Container } from "ui";

import styles from "./PageHeading.module.scss";
import { ArrowDiagonal } from "icons";

interface IPageHeading {
  title: string;
}

export const PageHeading: React.FC<IPageHeading> = ({ title, ...rest }) => {
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
