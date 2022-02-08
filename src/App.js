import React, { useState } from "react";
import "./App.scss";
import Header from "./components/Header";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import TestimonialSection from "./components/TestimonialsSection";
import BlogSection from "./components/BlogSection";

export default function App() {
  return (
    <div className="App">
      <Header />
      <BlogSection />
      <TestimonialSection />
    </div>
  );
}
