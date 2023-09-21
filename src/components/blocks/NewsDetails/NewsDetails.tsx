import React from "react";
import { INews } from "interfaces";

import styles from "./NewsDetails.module.scss";
import { WideImageWrapper } from "blocks";
import { Container } from "ui";

export const NewsDetails: React.FC<INews> = ({
  title,
  description,
  image,
  createdAt,
}) => {
  return (
    <section className={styles.news}>
      <Container>
        <div className={styles.newsTop}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.date}>{createdAt}</p>
        </div>
        <p className={styles.text}>{description}</p>
      </Container>
      <WideImageWrapper img={image as string} />
    </section>
  );
};
