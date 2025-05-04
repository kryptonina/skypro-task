import React, { FC, PropsWithChildren } from "react";
import styles from "./WidgetContainer.module.scss";

interface WidgetContainerProps extends PropsWithChildren {}

export const WidgetContainer: FC<WidgetContainerProps> = ({ children }) => {
  return <article className={styles.widget}>{children}</article>;
};
