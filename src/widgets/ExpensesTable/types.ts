import { CategoriesEnum } from "./constants";

export type Categories = keyof typeof CategoriesEnum;

export interface TableRecord {
  id: number;
  description: string;
  category: Categories;
  date: string;
  amount: number;
}
