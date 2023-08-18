import React from "react";
import { Container } from "ui";
import { ArrowDiagonal } from "icons";
import aboutImg from "assets/images/reception.jpg"

import styles from "./AboutInfo.module.scss";

export const AboutInfo: React.FC = () => {
  return (
    <Container>
      <section className={styles.aboutInfo}>
        <div className={styles.info}>
          <h2 className={styles.title}>
            Один из ведущих территориальных диагностических центров в Крыму
          </h2>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <div className={styles.marker} />
              Мы ведём консультативный приём взрослых
              <br /> и детей по 25 специальностям.
            </li>
            <li className={styles.listItem}>
              <div className={styles.marker} />
              Осуществляем более 30 видов инструментальных
              <br /> и более 400 видов лабораторных исследований.
            </li>
            <li className={styles.listItem}>
              <div className={styles.marker} />
              Наш медицинский центр – один из ведущих
              <br /> диагностических центров Крыма.
            </li>
          </ul>
          <div className={styles.icons}>
            <ArrowDiagonal />
            <ArrowDiagonal />
            <ArrowDiagonal />
          </div>
        </div>
        <div className={styles.aboutImg}>
          <img src={aboutImg} alt="Ресепшн Медлайф" />
        </div>
      </section>
    </Container>
  );
};
