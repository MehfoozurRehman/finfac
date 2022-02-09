import React, { useState } from "react";
import "./App.scss";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import { Route, Routes } from "react-router-dom";
import BlogScreen from "./screens/BlogScreen";
import ToolDetails from "./screens/ToolDetails";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/tool-details:id" element={<ToolDetails />} />
        <Route path="/guide" element={<HomeScreen />} />
        <Route path="/blog" element={<BlogScreen />} />
      </Routes>
    </div>
  );
}
