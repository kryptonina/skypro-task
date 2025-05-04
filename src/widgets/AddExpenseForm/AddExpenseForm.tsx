import { WidgetContainer } from "@widgets/WidgetContainer/WidgetContainer";
import React, { FC } from "react";
import { Category, Expense } from "../../entitites/types";
import { Button } from "@components/Button";
import { MediumHeader } from "@components/Header";
import { InputWithLabel } from "@components/InputWithLabel";
import { RadioButtonGroup } from "@components/RadioButtonGroup";
import styles from "./AddExpenseForm.module.scss";
import { inputs, radios } from "./constants";

interface AddExpenseFormProps extends Expense {
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  setNewExpense: React.Dispatch<React.SetStateAction<Expense>>;
  isEdit: boolean;
}

export const AddExpenseForm: FC<AddExpenseFormProps> = ({
  onSubmit,
  setNewExpense,
  isEdit,
  ...rest
}) => {
  const radiosWithChecked = radios.map((radio) =>
    radio.id === rest.category ? { ...radio, checked: true } : { ...radio, checked: false },
  );

  return (
    <WidgetContainer>
      <div className={styles.container}>
        <MediumHeader>{isEdit ? "Изменение расхода" : "Новый расход"}</MediumHeader>
        <form onSubmit={onSubmit}>
          {inputs.map((input) => {
            const key = input.key;
            if (key !== "category") {
              return (
                <InputWithLabel
                  {...input}
                  key={key}
                  value={rest[key]}
                  onChange={(event) =>
                    setNewExpense((prev) => ({
                      ...(prev ?? {}),
                      [key]: key === "amount" ? Number(event.target.value) : event.target.value,
                    }))
                  }
                  required
                />
              );
            } else {
              return (
                <RadioButtonGroup
                  key={input.key}
                  label={input.label}
                  name={input.name}
                  radios={radiosWithChecked}
                  required={input.required}
                  onChange={(event) => {
                    setNewExpense((prev) => ({
                      ...(prev ?? {}),
                      [input.key]: event.target.id as Category,
                    }));
                  }}
                />
              );
            }
          })}
          <Button type="submit">{isEdit ? "Изменить расход" : "Добавить новый расход"}</Button>
        </form>
      </div>
    </WidgetContainer>
  );
};
