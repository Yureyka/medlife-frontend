import React from "react";
import "moment/dist/locale/ru";
import { Button, Carousel, Container } from "ui";

import styles from "./News.module.scss";

import { Link, useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { NewsApi } from "api";
import { BACKEND_URL } from "helpers";
import moment from "moment";

export const News: React.FC = () => {
  const { data } = useQuery(["getNews"], NewsApi.getNews);

  if (!data) {
    return null;
  }

  moment.locale("ru");

  return (
    <section className={styles.news}>
      <Container>
        <h3 className={styles.title}>Новости</h3>
      </Container>
      <Carousel>
        {data?.map((news) => {
          return (
            <div key={news.title + news.createdAt} className={styles.newsItem}>
              <div className={styles.imgWrapper}>
                <img
                  src={`${BACKEND_URL}/${news.image}`}
                  alt={`Новость: ${news.title} ${news.description}`}
                />
              </div>
              <h5 className={styles.newsTitle}>{news.title}</h5>
              <div className={styles.newsBottom}>
                <p className={styles.date}>
                  {moment(news.createdAt).format("DD MMMM, YYYY")}
                </p>
                <Button
                  ariaLabel="Открыть полную новость"
                  className={styles.link}
                  onlyIcon
                  linkButton
                  href={`/news/${news._id}`}
                />
              </div>
            </div>
          );
        })}
      </Carousel>
    </section>
  );
};
