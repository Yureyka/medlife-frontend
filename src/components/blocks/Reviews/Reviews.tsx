import React from "react";
import { Container, Carousel } from "ui";

import styles from "./Reviews.module.scss";

const REVIEWS = [
  {
    name: "анонимный отзыв",
    text: "Хочу выразить огромную благодарность врачу с большой буквы терапевту Гайдамак Е.B. Врач высочайшей квалификации, вдумчивая, ориентирована на пациента.",
  },
  {
    name: "Мария",
    text: "Очень вежливый и приветливый персонал! Спасибо за квалифицированную помощь Сладиковой А.А. Успехов и процветания клинике «Медлайф»! Побольше благодарных пациентов.",
  },
  {
    name: "Андрей",
    text: "На днях почувствовал себя неважно, обратился в медцентр «Медлайф». Честно говоря, не знал к какому специалисту обратиться. ",
  },
  {
    name: "Андрей",
    text: "На днях почувствовал себя неважно, обратился в медцентр «Медлайф». Честно говоря, не знал к какому специалисту обратиться. ",
  },
  {
    name: "Андрей",
    text: "На днях почувствовал себя неважно, обратился в медцентр «Медлайф». Честно говоря, не знал к какому специалисту обратиться. ",
  },
  {
    name: "Андрей",
    text: "На днях почувствовал себя неважно, обратился в медцентр «Медлайф». Честно говоря, не знал к какому специалисту обратиться. ",
  },
  {
    name: "Андрей",
    text: "На днях почувствовал себя неважно, обратился в медцентр «Медлайф». Честно говоря, не знал к какому специалисту обратиться. ",
  },
];

export const Reviews: React.FC = () => {
  return (
    <section className={styles.reviews}>
      <Container>
        <h3 className={styles.title}>Отзывы наших клиентов</h3>
      </Container>
      <Carousel>
        {REVIEWS.map(({ name, text }, index) => {
          return (
            <div key={index + name} className={styles.review}>
              <h5 className={styles.name}>{name}</h5>

              <p className={styles.text}>{text}</p>
            </div>
          );
        })}
      </Carousel>
    </section>
  );
};
