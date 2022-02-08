import React from "react";
import { Link } from "react-router-dom";
import autoLoan from "../assets/tools/autoLoan.svg";
import autoLoanActive from "../assets/tools/autoLoanActive.svg";

function ToolCard({ icon, iconActive, name }) {
  return (
    <Link to="/" className="tool__card">
      <img src={icon} alt="icon" className="tool__card__img" />
      <img
        src={iconActive}
        alt="iconActive"
        className="tool__card__img__active"
      />
      <span>{name}</span>
    </Link>
  );
}

export default function ToolsSection() {
  return (
    <section className="tool__section">
      <div className="section__heading">
        All the Right Financial Tools to Keep You Going
      </div>
      <div className="tool__section__content">
        <ToolCard
          icon={autoLoan}
          iconActive={autoLoanActive}
          name="Auto Loan"
        />
        <ToolCard
          icon={autoLoan}
          iconActive={autoLoanActive}
          name="Auto Loan"
        />
        <ToolCard
          icon={autoLoan}
          iconActive={autoLoanActive}
          name="Auto Loan"
        />
        <ToolCard
          icon={autoLoan}
          iconActive={autoLoanActive}
          name="Auto Loan"
        />
        <ToolCard
          icon={autoLoan}
          iconActive={autoLoanActive}
          name="Auto Loan"
        />
        <ToolCard
          icon={autoLoan}
          iconActive={autoLoanActive}
          name="Auto Loan"
        />
        <ToolCard
          icon={autoLoan}
          iconActive={autoLoanActive}
          name="Auto Loan"
        />
        <ToolCard
          icon={autoLoan}
          iconActive={autoLoanActive}
          name="Auto Loan"
        />
        <ToolCard
          icon={autoLoan}
          iconActive={autoLoanActive}
          name="Auto Loan"
        />
        <ToolCard
          icon={autoLoan}
          iconActive={autoLoanActive}
          name="Auto Loan"
        />
        <ToolCard
          icon={autoLoan}
          iconActive={autoLoanActive}
          name="Auto Loan"
        />
        <ToolCard
          icon={autoLoan}
          iconActive={autoLoanActive}
          name="Auto Loan"
        />
      </div>
    </section>
  );
}
