import { Categories } from "./types";

export const CategoriesEnum = {
  Transport: "Transport",
  Food: "Food",
  Other: "Other",
  Entertainment: "Entertainment",
  Education: "Education",
  Home: "Home",
  "": "",
} as const;

export const CategoriesTranslation: Record<Categories, string> = {
  Transport: "Транспорт",
  Food: "Еда",
  Other: "Другое",
  Entertainment: "Развлечения",
  Education: "Образование",
  Home: "Жилье",
  "": "",
};

export const categories = [
  { key: undefined, value: "Не фильтровать" },
  ...Object.values(CategoriesEnum)
    .filter((item) => item !== "")
    .map((category) => ({ key: category, value: CategoriesTranslation[category] })),
];
