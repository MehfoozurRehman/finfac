import React from "react";
import { Link } from "react-router-dom";
import autoLoan from "../assets/tools/autoLoan.svg";
import autoLoanActive from "../assets/tools/autoLoanActive.svg";

function CalculatorCard({ icon, iconActive, name, path }) {
  return (
    <Link
      to={path ? path : "/"}
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }}
      className="calculator__card"
    >
      <img src={icon} alt="icon" className="calculator__card__img" />
      <img
        src={iconActive}
        alt="iconActive"
        className="calculator__card__img__active"
      />
      <span>{name}</span>
    </Link>
  );
}

export default function GuideScreen() {
  return (
    <div className="guide__container">
      <div className="guide__container__heading">Financial Tools</div>
      <div className="guide__container__para">
        Enter the world of financial tools to empower and fuel everyday money
        decisions
      </div>
      <div className="guide__container__content">
        <CalculatorCard
          icon={autoLoan}
          iconActive={autoLoanActive}
          path="/car-loan-calculator"
          name="Car Loan Calculator"
        />
        <CalculatorCard
          icon={autoLoan}
          iconActive={autoLoanActive}
          path="/sip-calculator"
          name="SIP Calculator"
        />
        <CalculatorCard
          icon={autoLoan}
          iconActive={autoLoanActive}
          name="Home Loan Calculator"
        />
        <CalculatorCard
          icon={autoLoan}
          iconActive={autoLoanActive}
          name="Credit Card EMI Calculator"
        />
      </div>
    </div>
  );
}
