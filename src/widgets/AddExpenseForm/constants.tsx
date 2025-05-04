import React from "react";
import Food from "@icons/bag.svg";
import Car from "@icons/car.svg";
import Home from "@icons/house.svg";
import Entertainment from "@icons/gameboy.svg";
import Education from "@icons/teacher.svg";
import Other from "@icons/message-text.svg";

export const radios = [
  { id: "Food", icon: <Food />, label: "Еда" },
  { id: "Transport", icon: <Car />, label: "Транспорт" },
  { id: "Home", icon: <Home />, label: "Жилье" },
  { id: "Entertainment", icon: <Entertainment />, label: "Развлечения" },
  { id: "Education", icon: <Education />, label: "Образование" },
  { id: "Other", icon: <Other />, label: "Другое" },
];

export const inputs = [
  {
    key: "description",
    id: "description",
    name: "description",
    type: "text",
    label: "Описание",
    placeholder: "Введите описание",
    required: true,
  },
  {
    key: "category",
    name: "category",
    label: "Категория",
    required: true,
  },
  {
    key: "date",
    id: "date",
    name: "date",
    type: "date",
    label: "Дата",
    placeholder: "Введите дату",
    required: true,
  },
  {
    key: "amount",
    id: "amount",
    name: "amount",
    type: "number",
    label: "Сумма",
    placeholder: "Введите сумму",
    min: 1,
    required: true,
  },
] as const;
