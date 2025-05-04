import React, { FC, useState } from "react";
import { MediumHeader } from "@components/Header";
import styles from "./Expensestable.module.scss";
import { categories, CategoriesTranslation } from "./constants";
import { Category, Expense } from "../../entitites/types";
import { Dropdown } from "@components/Dropdown";
import { WidgetContainer } from "@widgets/WidgetContainer/WidgetContainer";
import { Sort } from "@components/Sort";
import { sortByDate } from "./utils";
import { ActionsCell } from "./ActionsCell";

interface ExpensesTableProps {
  expenses: Expense[];
  onDelete: (id: number | string) => void;
  onEdit: (expense: Expense | undefined) => void;
}

export const ExpensesTable: FC<ExpensesTableProps> = ({ expenses, onDelete, onEdit }) => {
  const [category, setCategory] = useState<Category | undefined>();
  const [order, setOrder] = useState<"asc" | "desc">("desc");

  const filtered = category
    ? expenses.filter((expense) => expense.category === category)
    : expenses;
  const sorted = sortByDate(filtered, order);

  return (
    <WidgetContainer>
      <div className={styles.container}>
        <div className={styles.header}>
          <MediumHeader>Таблица расходов</MediumHeader>
          <Dropdown values={categories} setValue={setCategory} title="Фильтровать по категории" />
          <Sort
            title="дате"
            onClick={() => {
              setOrder((prev) => (prev === "asc" ? "desc" : "asc"));
            }}
            direction={order}
          />
        </div>

        {sorted?.length ? (
          <div className={styles.tableContainer}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Описание</th>
                  <th>Категория</th>
                  <th>Дата</th>
                  <th colSpan={2}>Сумма</th>
                </tr>
              </thead>
              <tbody>
                {sorted.map((row) => (
                  <tr key={row.id}>
                    <td>{row.description}</td>
                    <td>{CategoriesTranslation[row.category!]}</td>
                    <td>{new Date(row.date!).toLocaleDateString()}</td>
                    <td>{`${row.amount.toLocaleString()} ₽`}</td>
                    <ActionsCell
                      row={row}
                      className={styles.buttonsContainer}
                      buttonClassName={styles.button}
                      onEdit={onEdit}
                      onDelete={onDelete}
                    />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p>Ничего не найдено</p>
        )}
      </div>
    </WidgetContainer>
  );
};
