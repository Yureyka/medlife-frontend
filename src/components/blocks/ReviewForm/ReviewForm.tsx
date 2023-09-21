import React, { useState } from "react";
import * as yup from "yup";
import { Button, Container, Input, Textarea } from "ui";

import styles from "./ReviewForm.module.scss";
import { IFeedbackForm } from "interfaces";
import { ReviewApi } from "api";
import { useMutation } from "@tanstack/react-query";

const validationSchema = yup.object().shape({
  name: yup.string().required("Поле 'Имя' обязательно для заполнения"),
  comment: yup.string().required("Поле 'ОТзыв' обязательно для заполнения"),
});

export const ReviewForm: React.FC<IFeedbackForm> = () => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [isBtnDisabled, setIsBtnDisabled] = useState(false);
  const [errors, setErrors] = useState({ name: "", comment: "" });

  const createMutation = useMutation(
    ["createCallRequest"],
    ReviewApi.createReview,
    {
      onMutate: () => {
        setName("");
        setComment("");
        setIsBtnDisabled(true);
      },
      onSuccess: () => {
        setIsBtnDisabled(false);
      },
    }
  );

  const handleChangeName = (value: string) => {
    setName(value);
    setErrors((prev) => {
      return {
        ...prev,
        name: "",
      };
    });
  };

  const handleChangeComment = (value: string) => {
    setComment(value);
    setErrors((prev) => {
      return {
        ...prev,
        comment: "",
      };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await validationSchema.validate({ name, comment }, { abortEarly: false });
      createMutation.mutate({
        name,
        comment,
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
          } else if (e.path === "comment") {
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
    <section className={styles.feedback_form}>
      <form className={styles.form}>
        <h3 className={styles.title}>Поделитесь впечатлением от Медлайф</h3>

        <div className={styles.formGroup}>
          <Input
            label="Имя"
            type="text"
            value={name}
            invalidMessage={errors.name}
            onChange={(e) => {
              handleChangeName(e.target.value);
            }}
          />
          <Textarea
            label="Отзыв"
            type="tel"
            value={comment}
            invalidMessage={errors.comment}
            maxLength={500}
            onChange={(e) => {
              handleChangeComment(e.target.value);
            }}
          />
          <Button
            ariaLabel="Оставить отзыв"
            disabled={isBtnDisabled}
            onClick={handleSubmit}
            fullWidth
          >
            оставить отзыв
          </Button>
        </div>
      </form>
    </section>
  );
};
