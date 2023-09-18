import React, { useState } from "react";
import { Button, Container } from "ui";

import styles from "./ServiceMainPrices.module.scss";
import { IServiceMainPrices } from "src/interfaces/blocks";
import { AppointmentModal } from "blocks";

export const ServiceMainPrices: React.FC<IServiceMainPrices> = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getRandomServices = () => {
    const sorted = data.sort(() => 0.5 - Math.random());
    return sorted.slice(0, 8);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Container>
      <section className={styles.servicesPrices}>
        <h3 className={styles.title}>Цены</h3>
        <div className={styles.cards}>
          {getRandomServices().map(({ name, price }) =>
            name.includes("ШТРАФ") ? null : (
              <div key={name} className={styles.card}>
                <h5 className={styles.serviceTitle}>{name}</h5>
                <div className={styles.content}>
                  <div className={styles.priceInfo}>
                    <p className={styles.serviceSubtitle}>стоимость</p>
                    <p className={styles.price}>{price}</p>
                  </div>
                  <Button
                    onClick={() => {
                      setIsModalOpen(true);
                    }}
                  >
                    записаться
                  </Button>
                </div>
              </div>
            )
          )}
        </div>
        <p className={styles.contactPriceInfo}>
          Ознакомиться с полным перечнем услуг и их стоимостью вы можете в
          разделе “Цены” или по телефонам +7 (978) 604-16-00 ; +7 (978)
          604-16-01
        </p>
      </section>
      <AppointmentModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </Container>
  );
};
