import React from "react";
import { Header } from "common";
import { Button, Container } from "ui";

import styles from "./MainBanner.module.scss";

export const MainBanner: React.FC = () => {
  return (
    <div className={styles.banner}>
      <Container>
        <Header isMainPage />
        <div className={styles.bannerContent}>
          <div className={styles.title}>
            <h1>
              Медицинский <br />
              центр Медлайф
            </h1>
            <h3>Ваше здоровье в наших руках</h3>
          </div>
          <div className={styles.appointment}>
            <Button>записаться на прием</Button>
          </div>
        </div>
        <div className={styles.advantages}>
          <div className={styles.advantageCard}>
            <span className={styles.metrics}>21</span>{" "}
            <span className={styles.advantageText}>опытный специалист</span>
          </div>
          <div className={styles.advantageCard}>
            <span className={styles.metrics}>92%</span>{" "}
            <span className={styles.advantageText}>положительных отзывов</span>
          </div>
          <div className={styles.advantageCard}>
            <span className={styles.metrics}>30+</span>{" "}
            <span className={styles.advantageText}>
              сертификатов и дипломов
            </span>
          </div>
        </div>
      </Container>
    </div>
  );
};
