import React, { FC, PropsWithChildren } from "react";
import { Header } from "@widgets/PageHeader/PageHeader";
import { LargeHeader } from "@components/Header";
import styles from "./Layout.module.scss";

interface LayoutProps extends PropsWithChildren {
  title: string;
}

export const Layout: FC<LayoutProps> = ({ children, title }) => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.offsetContainer}>
        <div className={styles.body}>
          <LargeHeader>{title}</LargeHeader>
          {children}
        </div>
      </div>
    </div>
  );
};
