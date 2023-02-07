import React, { Component } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import HomPage from "./pages/home";
import CalculatorProject from "./pages/CalculatorProject";
import DrumProject from "./pages/DrumProject";
import ClockProject from "./pages/ClockProject";
import MarkDownProject from "./pages/MarkdownProject";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomPage />} />
        <Route path={"/calculator"} element={<CalculatorProject />} />
        <Route path={"/quote"} element={<div>Quote</div>} />
        <Route path={"/drum"} element={<DrumProject />} />
        <Route path={"/clock"} element={<ClockProject />} />
        <Route path={"/markdown"} element={<MarkDownProject />} />
      </Route>
    </Routes>
  );
}

export default App;
