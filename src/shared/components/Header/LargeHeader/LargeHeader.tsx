import React, { FC, PropsWithChildren } from "react";
import styles from "./LargeHeader.module.scss";

export const LargeHeader: FC<PropsWithChildren> = ({ children }) => {
  return <h1 className={styles.header}>{children}</h1>;
};
