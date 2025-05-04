import React from "react";
import { Route, Routes } from "react-router-dom";
import { Analysis } from "../pages/Analysis/Analysis";
import { Login } from "../pages/Login/Login";
import { MyExpenses } from "../pages/MyExpenses/MyExpenses";
import "./app.css";

export const App = () => (
  <Routes>
    <Route path="/" element={<MyExpenses />} />
    <Route path="/analysis" element={<Analysis />} />
    <Route path="/login" element={<Login />} />
    <Route path="*" element={<p>error</p>} />
  </Routes>
);
