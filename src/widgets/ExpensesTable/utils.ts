import { Expense } from "../../entitites/types";

export const sortByDate = (data: Expense[], order: "asc" | "desc") => {
  return (data as Required<Expense>[]).sort((a, b) =>
    b.date === a.date
      ? 0
      : order === "desc"
        ? b.date > a.date
          ? 1
          : -1
        : a.date > b.date
          ? 1
          : -1,
  );
};
