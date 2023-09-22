import React from "react";
import { Container } from "ui";
import { PageLayout } from "../PageLayout";

import styles from "./Legal.module.scss";

export const GovContactsPage: React.FC = () => (
  <PageLayout title="Органы власти по надзору в сфере здравоохранения">
    <Container>
      <p className={styles.firstLevelItem}>
        Адреса и телефоны органов исполнительной власти субъекта Российской
        Федерации в сфере охраны здоровья граждан; территориального органа
        Федеральной службы по надзору в сфере здравоохранения территориального
        органа в сфере защиты прав потребителей и благополучия человека
      </p>
      <h3 className={styles.title}>Контактная информация надзорных органов</h3>
      <div>
        <div className={styles.contact}>
          <p>Тел.: 8 (800) 733 33 12</p>
          <p>Адрес: 295015, Республика Крым, г. Симферополь, пр. Кирова, д.1</p>
          <p>Министерство здравоохранения Республики Крым</p>
        </div>

        <div className={styles.contact}>
          <p>Тел.: +7 (978) 920 10 80</p>
          <p>
            Адрес: 295034, Республика Крым, г. Симферополь, ул. Полевая, д.24/23
          </p>
          <p>
            Территориальный орган Федеральной службы по надзору в сфере
            здравоохранения: Управление Росздравнадзора по Республике Крым
          </p>
        </div>

        <div className={styles.contact}>
          <p>Тел.: 8 (800) 234 45 01</p>
          <p>Адрес: Республика Крым, г. Симферополь, ул. Набережная, д.67</p>
          <p>
            Территориальный орган Федеральной службы по надзору в сфере защиты
            прав потребителей и благополучия человека: Управление
            Роспотребнадзора по Республике Крым
          </p>
        </div>

        <div className={styles.contact}>
          <p>Тел.: +7 (3652) 55 03 99</p>
          <p>Адрес: 295015, г. Симферополь, ул. Севастопольская, д.21</p>
          <p>Прокуратура Республики Крым</p>
        </div>

        <div className={styles.contact}>
          <p>Тел.: +7 (36562) 3 79 89</p>
          <p>Адрес: 298100, г. Феодосия, ул. Земская, д.4, каб. №53, №44</p>
          <p>
            Отдел по вопросам торговли, потребительского рынка и услуг
            администрации г. Феодосии
          </p>
        </div>

        <div className={styles.contact}>
          <p>Тел.: 8 (800) 301 41 53</p>
          <p>Адрес: 295034, г. Симферополь, бульвар И. Франко, 12-14</p>
          <p>
            Территориальный фонд обязательного медицинского страхования
            Республики Крым
          </p>
        </div>
      </div>
    </Container>
  </PageLayout>
);