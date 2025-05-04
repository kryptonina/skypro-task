import React, { useState } from "react";
import Arrow from "@icons/arrow.svg";
import styles from "./Dropdown.module.scss";

interface DropdownProps<T extends string | undefined> {
  values: { key: T; value: string }[];
  setValue: React.Dispatch<React.SetStateAction<T>>;
  title: string;
}

export const Dropdown = <T extends string | undefined>({
  values,
  setValue,
  title,
}: DropdownProps<T>) => {
  const [isListVisible, setIsListVisible] = useState(false);

  const onSelect = (key: T) => {
    setValue(key);
    setIsListVisible(false);
  };

  return (
    <div>
      <span
        className={`${styles.control} ${isListVisible ? styles.rotate : ""}`}
        onClick={() => setIsListVisible((prev) => !prev)}
      >
        {title}
        <Arrow />
      </span>
      {isListVisible ? (
        <ul className={styles.list}>
          {values.map((value) => (
            <li key={value.key} onClick={() => onSelect(value.key)}>
              {value.value}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};
