import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@components/Button";
import { InputWithLabel } from "@components/InputWithLabel";
import styles from "./Login.module.scss";

export const Login = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <form>
        <InputWithLabel label="Логин" placeholder="Введите логин" type="text" />
        <InputWithLabel label="Пароль" placeholder="Введите пароль" type="password" />
        <Button
          onClick={(e) => {
            e.preventDefault();
            navigate("/");
          }}
        >
          Войти
        </Button>
      </form>
    </div>
  );
};
