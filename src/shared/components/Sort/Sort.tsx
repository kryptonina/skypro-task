import React, { FC } from "react";
import Arrow from "@icons/arrow.svg";
import styles from "./Sort.module.scss";

interface SortProps {
  title: string;
  direction: "asc" | "desc";
  onClick: () => void;
}

export const Sort: FC<SortProps> = ({ onClick, title, direction }) => {
  return (
    <div>
      <span
        className={`${styles.control} ${direction === "asc" ? styles.rotate : ""}`}
        onClick={onClick}
      >
        <span>
          Сортировать по <span className={styles.field}>{title}</span>
        </span>
        <Arrow />
      </span>
    </div>
  );
};
