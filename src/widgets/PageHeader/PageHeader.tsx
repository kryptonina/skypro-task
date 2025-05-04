import React, { FC } from "react";
import Logo from "@icons/logo.svg";
import { Link, NavLink, redirect } from "react-router-dom";
import styles from "./PageHeader.module.scss";
import { Nav } from "./Nav/Nav";

export const Header: FC = () => {
  const handleLogout = () => redirect("/login");

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo />
        <Nav>
          <NavLink to="/">Мои расходы</NavLink>
          <NavLink to="/analysis">Анализ расходов</NavLink>
        </Nav>
        <button className={styles.logout} onClick={handleLogout}>
          <Link to="/login"> Выход</Link>
        </button>
      </div>
    </header>
  );
};
