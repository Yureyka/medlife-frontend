import React, { useState } from "react";
import cn from "classnames";
import { Button, Container, Input } from "ui";

import styles from "./FeedbackForm.module.scss";

interface IFeedbackForm {
  withMap?: boolean;
}

export const FeedbackForm: React.FC<IFeedbackForm> = ({ withMap }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("+7");

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleChangePhone = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(event.target.value);
  };

  return (
    <Container>
      <section className={styles.feedback_form}>
        <form
          className={cn(styles.form, {
            [styles.withMap]: withMap,
          })}
        >
          <h3 className={styles.title}>Остались вопросы?</h3>
          {!withMap && (
            <h6 className={styles.subTitle}>
              Оставьте свои данные и мы свяжемся с Вами в течение 30 минут{" "}
            </h6>
          )}
          <div className={styles.formGroup}>
            <Input
              label="Имя"
              type="text"
              value={name}
              onChange={handleChangeName}
            />
            <Input
              label="Телефон"
              type="tel"
              value={phone}
              onChange={handleChangePhone}
            />
            <Button fullWidth>{`заказать ${
              withMap ? "обратный звонок" : "консультацию"
            }`}</Button>
          </div>
        </form>
        {withMap && (
          <div className={styles.mapWrapper}>
            <iframe
              name="map"
              className={styles.map}
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A3dc0fa650845ae72add9925d26a253d8663c42565480c5a5a99f457fed2a12e4&amp;source=constructor"
            ></iframe>
          </div>
        )}
      </section>
    </Container>
  );
};
