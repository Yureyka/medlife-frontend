import React from "react";
import { Container } from "ui";
import { AdvantageCard } from "common";

import styles from "./Advantages.module.scss";

const ADVANTAGES = [
  {
    title: "Опытные профессионалы",
    description:
      "Мы собрали команду специалистов с огромным опытом работы и безупречной репутацией, которым можно доверить своё здоровье и здоровье своей семьи.",
  },
  {
    title: "Качественные материалы",
    description:
      "Мы обеспечиваем персонал и клиентов продукцией современного уровня, поскольку постоянно следим за передовыми технологиями в области медицины.",
  },
  {
    title: "Качественное оборудование",
    description:
      "Невозможно развиваться без использования современных техник и оборудования, которые позволяют на порядок улучшить, как диагностику заболеваний, так и их лечение.",
  },
  {
    title: "Отзывчивый персонал",
    description:
      "Мы не работаем на поток клиентов – мы подходим к каждому человеку индивидуально. Наша задача – помогать людям, а не заниматься «просто обслуживанием».",
  },
  {
    title: "Для детей",
    description:
      "Заботясь об эмоциональном состоянии ребёнка перед приемом к детскому врачу, мы организовали уютный детский уголок, где ребёнок может ожидать приёма.",
  },
  {
    title: "Положительные отзывы ",
    description:
      "Нам всегда приятно, когда Вы рассказываете о том, как наш центр сделал вашу жизнь счастливее. Ваши истории делают счастливыми и нас!",
  },
];

export const Advantages: React.FC = () => {
  return (
    <Container>
      <section className={styles.advantages}>
        <h3 className={styles.title}>Почему нам доверяют?</h3>
        <div className={styles.cards}>
          {ADVANTAGES.map((item, index) => {
            return (
              <AdvantageCard
                key={item.title}
                title={item.title}
                description={item.description}
                counter={`(0${index + 1})`}
              />
            );
          })}
        </div>
      </section>
    </Container>
  );
};
