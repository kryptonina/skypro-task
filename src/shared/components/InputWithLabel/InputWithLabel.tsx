import React, { FC, InputHTMLAttributes } from "react";
import styles from "./InputWithLabel.module.scss";

interface InputWithLabelProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const InputWithLabel: FC<InputWithLabelProps> = ({ label, id, ...rest }) => {
  return (
    <div>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <br />
      <input className={styles.input} id={id} {...rest}></input>
    </div>
  );
};
