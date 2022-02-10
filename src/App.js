import React, { useState } from "react";
import "./App.scss";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import { Route, Routes } from "react-router-dom";
import BlogScreen from "./screens/BlogScreen";
import ToolDetails from "./screens/ToolDetails";
import BlogDetailsScreen from "./screens/BlogDetailsScreen";
import GuideScreen from "./screens/GuideScreen";
import CompareScreen from "./screens/CompareScreen";
import CreditCardPopup from "./components/CreditCardPopup";
import AutoLoansPopup from "./components/AutoLoansPopup";
import HealthInsurancePopup from "./components/HealthInsurancePopup";
import HomeLoansPopup from "./components/HomeLoansPopup";
import LifeInsurancePopup from "./components/LifeInsurancePopup";
import TravelInsurancePopup from "./components/TravelInsurancePopup";
import CarInsurancePopup from "./components/CarInsurancePopup";
import Footer from "./components/Footer";

export default function App() {
  const [creditCardPopup, setCreditCardPopup] = useState(false);
  const [autoLoansPopup, setAutoLoansPopup] = useState(false);
  const [healthInsurancePopup, setHealthInsurancePopup] = useState(false);
  const [homeLoansPopup, setHomeLoansPopup] = useState(false);
  const [lifeInsurancePopup, setLifeInsurancePopup] = useState(false);
  const [travelInsurancePopup, setTravelInsurancePopup] = useState(false);
  const [carInsurancePopup, setCarInsurancePopup] = useState(false);
  return (
    <div className="App">
      {creditCardPopup ? (
        <CreditCardPopup onClose={() => setCreditCardPopup(false)} />
      ) : null}
      {autoLoansPopup ? (
        <AutoLoansPopup onClose={() => setAutoLoansPopup(false)} />
      ) : null}
      {homeLoansPopup ? (
        <HomeLoansPopup onClose={() => setHomeLoansPopup(false)} />
      ) : null}
      {healthInsurancePopup ? (
        <HealthInsurancePopup onClose={() => setHealthInsurancePopup(false)} />
      ) : null}
      {lifeInsurancePopup ? (
        <LifeInsurancePopup onClose={() => setLifeInsurancePopup(false)} />
      ) : null}
      {travelInsurancePopup ? (
        <TravelInsurancePopup onClose={() => setTravelInsurancePopup(false)} />
      ) : null}
      {carInsurancePopup ? (
        <CarInsurancePopup onClose={() => setCarInsurancePopup(false)} />
      ) : null}
      <Header />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/tool-details:id" element={<ToolDetails />} />
        <Route path="/guide" element={<GuideScreen />} />
        <Route path="/compare" element={<CompareScreen />} />
        <Route path="/blog" element={<BlogScreen />} />
        <Route path="/blog-detail:id" element={<BlogDetailsScreen />} />
      </Routes>
      <Footer />
    </div>
  );
}
