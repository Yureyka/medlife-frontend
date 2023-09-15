import React from "react";
import { Container, Button } from "ui";
import { DiagnosticsCard } from "common";

import styles from "./Diagnostics.module.scss";

const DIAGNOSTICS = [
  {
    title: "КТ-диагностика",
    description:
      "Компьютерная томография (КТ) проводится для диагностики органов брюшной полости и почек, дыхательной и костной систем человека. Чаще всего КТ используют, чтобы определить точное расположение травм.",
    href: "#",
  },
  {
    title: "Рентген",
    description:
      "Применяется в обследовании легких, костей, мягких тканей, внутренних органов (желудка, почек и т.д.). После рентгеновского исследования врач может поставить точный диагноз в ряде сложных заболеваний.",
    href: "#",
  },
  {
    title: "Ультразвуковое исследование",
    description:
      "С помощью УЗИ можно обнаружить патологию вен и сосудов на ранней стадии и вовремя начать лечение. Благодаря своевременной диагностике удается избежать хирургического вмешательства.",
    href: "#",
  },
  {
    title: "Гастроскопия",
    description:
      "Метод исследования пищевода, желудка и двенадцатиперстной кишки на предмет установления этиологии болей в животе, а также сопутствующих симптомов – тошноты, рвоты, изжоги, отрыжки и т.д.",
    href: "#",
  },
  {
    title: "Электрокардиограмма",
    description:
      "Важное, неинвазивное и не требующее специальной подготовки исследование работы сердца. С помощью ЭКГ врач кардиолог получает детальную и ничем незаменимую информацию о состоянии сердца пациента.",
    href: "#",
  },
];

export const Diagnostics: React.FC = () => {
  return (
    <Container>
      <section className={styles.diagnostics}>
        <div className={styles.diagnosticsHead}>
          <h3 className={styles.title}>
            Полный спектр <br />
            диагностических услуг
          </h3>

          <Button className={styles.button} linkButton href="#">
            смотреть все
          </Button>
        </div>
        <div className={styles.cards}>
          {DIAGNOSTICS.map((item) => {
            return (
              <DiagnosticsCard
                key={item.title}
                title={item.title}
                description={item.description}
                href={item.href}
              />
            );
          })}
        </div>
      </section>
    </Container>
  );
};
