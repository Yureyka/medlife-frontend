import React from "react";
import { Container, Button } from "ui";

import styles from "./Team.module.scss";

import testImage from "assets/images/x-ray.jpg";

const TEAM = [
  {
    fullName: "Тромбачева Эвелина Фоминична",
    position: "гинеколог-эндокринолог",
    portrait: "",
  },
  {
    fullName: "Тромбачева Эвелина Фоминична",
    position: "гинеколог-эндокринолог",
    portrait: "",
  },
  {
    fullName: "Тромбачева Эвелина Фоминична",
    position: "гинеколог-эндокринолог",
    portrait: "",
  },
  {
    fullName: "Тромбачева Эвелина Фоминична",
    position: "гинеколог-эндокринолог",
    portrait: "",
  },
  {
    fullName: "Тромбачева Эвелина Фоминична",
    position: "гинеколог-эндокринолог",
    portrait: "",
  },
  {
    fullName: "Тромбачева Эвелина Фоминична",
    position: "гинеколог-эндокринолог",
    portrait: "",
  },
  {
    fullName: "Тромбачева Эвелина Фоминична",
    position: "гинеколог-эндокринолог",
    portrait: "",
  },
  {
    fullName: "Тромбачева Эвелина Фоминична",
    position: "гинеколог-эндокринолог",
    portrait: "",
  },
  {
    fullName: "Тромбачева Эвелина Фоминична",
    position: "гинеколог-эндокринолог",
    portrait: "",
  },
];

export const Team: React.FC = () => {
  return (
    <Container>
      <section className={styles.team}>
        {TEAM.map(({ fullName, position, portrait }) => (
          <div key={fullName + Math.random()} className={styles.employeeCard}>
            <div className={styles.imageWrapper}>
              <img src={testImage} alt={`${position} ${fullName}`} />
            </div>
            <div className={styles.content}>
              <h5 className={styles.fullName}>{fullName}</h5>
              <span className={styles.position}>{position}</span>
              <Button onlyIcon linkButton href="/team/123" />
            </div>
          </div>
        ))}
      </section>
    </Container>
  );
};
