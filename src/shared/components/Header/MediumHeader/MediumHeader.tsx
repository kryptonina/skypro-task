import React, { FC, PropsWithChildren } from "react";
import styles from "./MediumHeader.module.scss";

export const MediumHeader: FC<PropsWithChildren> = ({ children }) => {
  return <h2 className={styles.header}>{children}</h2>;
};
