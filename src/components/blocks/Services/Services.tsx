import React from "react";
import { Container, Button } from "ui";

import tomographyImage from "assets/images/tomography.jpg";
import fetalImage from "assets/images/fetal.jpg";
import gastroscopyImage from "assets/images/gastroscopy.jpg";
import ultrasonographyImage from "assets/images/ultrasonography.jpg";
import xRayImage from "assets/images/x-ray.jpg";
import cardiogramImage from "assets/images/cardiogram.jpg";

import styles from "./Services.module.scss";

const SERVICES = [
  {
    image: tomographyImage,
    name: "Компьютерная томография",
    href: "/services/tomography",
  },
  {
    image: xRayImage,
    name: "Рентген",
    href: "/services/x-ray",
  },
  {
    image: ultrasonographyImage,
    name: "Ультразвуковое исследование",
    href: "/services/ultrasonography",
  },
  {
    image: gastroscopyImage,
    name: "Гастроскопия",
    href: "/services/gastroscopy",
  },
  {
    image: cardiogramImage,
    name: "Электрокардиограф",
    href: "/services/cardiogram",
  },
  {
    image: fetalImage,
    name: "Фетальный монитор",
    href: "/services/fetal",
  },
];

export const Services: React.FC = () => {
  return (
    <Container>
      <section className={styles.services}>
        {SERVICES.map(({ image, name, href }) => (
          <div key={name} className={styles.serviceCard}>
            <div className={styles.imageWrapper}>
              <img src={image} alt={`Услуга ${name}`} />
            </div>
            <div className={styles.content}>
              <h5 className={styles.serviceName}>{name}</h5>
              <Button ariaLabel={`Узнать подробнее о ${name}`} onlyIcon linkButton href={href} />
            </div>
          </div>
        ))}
      </section>
    </Container>
  );
};
