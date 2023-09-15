import React from "react";
import { Button, Container } from "ui";
import { WideImageWrapper } from "blocks";

import tomographyImage from "assets/images/tomography.jpg";

import styles from "./ServiceMainPrices.module.scss";

const data: any = [
  {
    title: "КТ головного мозга",
    price: "3 800 ₽",
  },
  {
    title: "КТ органов шеи",
    price: "3 800 ₽",
  },
  {
    title: "КТ височных кистей",
    price: "3 800 ₽",
  },
  {
    title: "КТ всего позвоночника",
    price: "3 800 ₽",
  },
  {
    title: "КТ органов забрюшинного пространства",
    price: "3 800 ₽",
  },
  {
    title: "КТ – ангиография почечных артерий",
    price: "3 800 ₽",
  },
  {
    title: "КТ – ангиография сосудов головного мозга",
    price: "3 800 ₽",
  },
  {
    title: "КТ – ангиография легочных артерий",
    price: "3 800 ₽",
  },
];

export const ServiceMainPrices: React.FC = () => {
  return (
    <Container>
      <section className={styles.servicesPrices}>
        <h3 className={styles.title}>Цены</h3>
        <div className={styles.cards}>
          {data.map(({ title, price }) => (
            <div className={styles.card}>
              <h5 className={styles.serviceTitle}>{title}</h5>
              <div className={styles.content}>
                <div className={styles.priceInfo}>
                  <p className={styles.serviceSubtitle}>стоимость</p>
                  <p className={styles.price}>{price}</p>
                </div>
                <Button>записаться</Button>
              </div>
            </div>
          ))}
        </div>
        <p className={styles.contactPriceInfo}>
          Ознакомиться с полным перечнем услуг и их стоимостью вы можете в
          разделе “Цены” или по телефонам +7 (978) 604-16-00 ; +7 (978)
          604-16-01
        </p>
      </section>
    </Container>
  );
};
