import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Container, Carousel } from "ui";
import { truncate } from "helpers";
import { ReviewApi } from "api";

import styles from "./Reviews.module.scss";

export const Reviews: React.FC = () => {
  const { data } = useQuery(["comment"], ReviewApi.getReviews);

  if (!data) {
    return null;
  }

  return (
    <section className={styles.reviews}>
      <Container>
        <h3 className={styles.title}>Отзывы наших клиентов</h3>
      </Container>
      <Carousel>
        {data.map(({ name, comment }, index) => {
          return (
            <div key={index + name} className={styles.review}>
              <h5 className={styles.name}>{name}</h5>

              <p className={styles.text}>{truncate(comment, 300)}</p>
            </div>
          );
        })}
      </Carousel>
    </section>
  );
};
