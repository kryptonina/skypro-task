import React, { FC, PropsWithChildren } from "react";
import style from "./Nav.module.scss";

export const Nav: FC<PropsWithChildren> = ({ children }) => {
  return <nav className={style.nav}>{children}</nav>;
};
