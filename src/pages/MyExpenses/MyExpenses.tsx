import React, { FormEvent, useId, useState } from "react";
import { Layout } from "@widgets/Layout";
import { ExpensesTable } from "@widgets/ExpensesTable";
import { AddExpenseForm } from "@widgets/AddExpenseForm";
import styles from "./MyExpenses.module.scss";
import { Category, Expense } from "../../entitites/types";
import { data } from "./data";

const defaultExpense = {
  description: "",
  date: "",
  category: "" as Category,
  amount: 0,
};

export const MyExpenses = () => {
  const [expense, setExpense] = useState<Expense>(defaultExpense);
  const [expenses, setExpenses] = useState(data);
  const [isEdit, setIsEdit] = useState(false);

  const id = useId();

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (isEdit) {
      setExpenses((prev) =>
        prev.map((currentExpense) =>
          currentExpense.id !== expense.id ? currentExpense : { ...currentExpense, ...expense },
        ),
      );
    } else {
      setExpenses((prev) => [{ ...expense, id }, ...prev]);
    }
    setExpense(defaultExpense);
    setIsEdit(false);
  };

  const onDelete = (id: Expense["id"]) => {
    setExpenses((prev) => prev.filter((expense) => expense.id !== id));
  };

  const onEdit = (row: Expense | undefined) => {
    if (row) {
      setIsEdit(true);
      setExpense(row);
    } else {
      setIsEdit(false);
      setExpense(defaultExpense);
    }
  };

  return (
    <Layout title="Мои расходы">
      <div className={styles.container}>
        <ExpensesTable expenses={expenses} onDelete={onDelete} onEdit={onEdit} />
        <AddExpenseForm
          {...expense}
          onSubmit={onSubmit}
          setNewExpense={setExpense}
          isEdit={isEdit}
        />
      </div>
    </Layout>
  );
};
