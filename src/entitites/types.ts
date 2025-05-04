export type Category = "Food" | "Transport" | "Home" | "Entertainment" | "Education" | "Other" | "";

export interface Expense {
  id?: string | number;
  description?: string;
  category?: Category;
  amount?: number;
  date?: string;
}
