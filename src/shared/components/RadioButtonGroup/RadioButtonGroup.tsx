import React, { FC, InputHTMLAttributes, ReactNode } from "react";
import styles from "./RadioButtonGroup.module.scss";

interface RadioButton extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon: ReactNode;
}

interface RadioButtonGroup {
  label: string;
  name: string;
  radios: RadioButton[];
  required: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export const RadioButtonGroup: FC<RadioButtonGroup> = ({
  label,
  name,
  radios,
  required,
  onChange,
}) => {
  return (
    <div>
      <label className={styles.label}>{label}</label>
      <br />
      <div className={styles.container}>
        {radios.map(({ id, icon, label, ...rest }) => (
          <div key={id} className={styles.tag}>
            <label htmlFor={id}>
              {icon}
              {label}
            </label>
            <input
              type="radio"
              id={id}
              name={name}
              {...rest}
              required={required}
              onChange={onChange}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
