import React, { useState } from "react";
import cn from "classnames";
import * as yup from "yup";
import { Button, Container, Input } from "ui";

import styles from "./FeedbackForm.module.scss";
import { IFeedbackForm } from "interfaces";
import { CallRequestApi } from "api";
import { useMutation } from "@tanstack/react-query";

const PHONE_REGEXP = /(?:\+|\d)[\d\-\(\) ]{9,}\d/g;

const validationSchema = yup.object().shape({
  name: yup.string().required("Поле 'Имя' обязательно для заполнения"),
  phone: yup
    .string()
    .matches(PHONE_REGEXP, "Номер телефона недействителен")
    .required("Поле 'Телефон' обязательно для заполнения"),
});

export const FeedbackForm: React.FC<IFeedbackForm> = ({ withMap }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("+7");
  const [isBtnDisabled, setIsBtnDisabled] = useState(false);
  const [errors, setErrors] = useState({ name: "", phone: "" });

  const createMutation = useMutation(
    ["createCallRequest"],
    CallRequestApi.createCallRequest,
    {
      onMutate: () => {
        setName("");
        setPhone("+7");
        setIsBtnDisabled(true);
      },
      onSuccess: () => {
        setIsBtnDisabled(false);
      },
    }
  );

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setName(value);
    setErrors((prev) => {
      return {
        ...prev,
        name: "",
      };
    });
  };

  const handleChangePhone = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setPhone(value);
    setErrors((prev) => {
      return {
        ...prev,
        phone: "",
      };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await validationSchema.validate({ name, phone }, { abortEarly: false });
      createMutation.mutate({
        name,
        phone,
      });
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        error.inner.forEach((e) => {
          if (e.path === "name") {
            setErrors((prev) => {
              return {
                ...prev,
                name: e.message,
              };
            });
          } else if (e.path === "phone") {
            setErrors((prev) => {
              return {
                ...prev,
                phone: e.message,
              };
            });
          }
        });
      }
    }
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
          <div
            className={cn(styles.formGroup, {
              [styles.fromWithoutMap]: !withMap,
            })}
          >
            <Input
              label="Имя"
              type="text"
              value={name}
              invalidMessage={errors.name}
              onChange={handleChangeName}
            />
            <Input
              label="Телефон"
              type="tel"
              value={phone}
              invalidMessage={errors.phone}
              onChange={handleChangePhone}
            />
            <Button
              disabled={isBtnDisabled}
              onClick={handleSubmit}
              fullWidth
            >{`заказать ${
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
