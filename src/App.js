import React, { useState } from "react";
import "./App.scss";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import { Route, Routes } from "react-router-dom";
import BlogScreen from "./screens/BlogScreen";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/invested-money" element={<HomeScreen />} />
        <Route path="/need-money" element={<HomeScreen />} />
        <Route path="/protection" element={<HomeScreen />} />
        <Route path="/guide" element={<HomeScreen />} />
        <Route path="/blog" element={<BlogScreen />} />
        <Route path="/contact-us" element={<HomeScreen />} />
      </Routes>
    </div>
  );
}
