import React, { useEffect, useState } from "react";
import * as yup from "yup";
import { Button, Input } from "ui";
import { IUser } from "interfaces";

import styles from "./AdminLayout.module.scss";
import { useMutation, useQuery } from "@tanstack/react-query";
import { UserApi } from "api";
import { redirect } from "react-router-dom";

interface IAuthPage {
  handleLogin: (token: string) => void;
}

const validationSchema = yup.object().shape({
  login: yup.string().required("Поле 'Имя' обязательно для заполнения"),
  password: yup.string().required("Поле 'Телефон' обязательно для заполнения"),
});

export const AdminAuthPage: React.FC<IAuthPage> = ({ handleLogin }) => {
  const [authData, setAuthData] = useState<IUser>({
    login: "",
    password: "",
  });
  const [errors, setErrors] = useState({ login: "", password: "" });

  const { refetch } = useQuery(["adminLogin"], () => UserApi.login(authData), {
    enabled: false,
    onSuccess: (data) => {
      handleLogin(data.token);
    },
  });

  const handleChangeState = <T extends keyof IUser>(
    fieldName: T,
    value: IUser[T]
  ) => {
    setAuthData((prev) => {
      return {
        ...prev,
        [fieldName]: value,
      } as IUser;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await validationSchema.validate(
        { login: authData.login, password: authData.password },
        { abortEarly: false }
      );
      refetch();
      setAuthData({
        login: "",
        password: "",
      });
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        error.inner.forEach((e) => {
          if (e.path === "name") {
            setErrors((prev) => {
              return {
                ...prev,
                login: e.message,
              };
            });
          } else if (e.path === "phone") {
            setErrors((prev) => {
              return {
                ...prev,
                password: e.message,
              };
            });
          }
        });
      }
    }
  };

  return (
    <div className={styles.authorization}>
      <h2 className={styles.authTitle}>Авторизация</h2>
      <form className={styles.authorizationForm}>
        <div className={styles.formInput}>
          <Input
            label="Логин"
            value={authData!.login || ""}
            invalidMessage={errors.login}
            onChange={(e) => {
              handleChangeState("login", e.target.value);
            }}
          />
        </div>
        <div className={styles.formInput}>
          <Input
            label="Пароль"
            type="password"
            value={authData!.password}
            invalidMessage={errors.password}
            onChange={(e) => {
              handleChangeState("password", e.target.value);
            }}
          />
        </div>
        <Button fullWidth onClick={handleSubmit}>
          войти
        </Button>
      </form>
    </div>
  );
};
