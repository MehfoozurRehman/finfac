import React, { useState } from "react";
import "./App.scss";
import Header from "./components/Header";
import TestimonialSection from "./components/TestimonialsSection";
import BlogSection from "./components/BlogSection";
import PartnersSection from "./components/PartnersSection";

export default function App() {
  return (
    <div className="App">
      <Header />
      <PartnersSection />
      <BlogSection />
      <TestimonialSection />
    </div>
  );
}
