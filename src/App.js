import React, { useState } from "react";
import "./App.scss";
import Header from "./components/Header";
import TestimonialSection from "./components/TestimonialsSection";
import BlogSection from "./components/BlogSection";
import PartnersSection from "./components/PartnersSection";
import FeatureSection from "./components/FeatureSection";
import WhySection from "./components/WhySection";

export default function App() {
  return (
    <div className="App">
      <Header />
      <WhySection />
      <FeatureSection
        heading="Comparing personal loan options is easy!"
        info="All It Takes Is Four Simple Steps:"
        optionsSpecial={[
          {
            title: "Tell Us What You're Looking For",
            info: "Share Details That Will Help Us Show You The Best Personal Loans In The Philippines That You Might Be Eligible For. Don't Worry, We Take Data Privacy Seriously.",
          },
          {
            title: "Identify The Loan That Best Fits Your Needs",
            info: "Discover Your Personalized Results And Sort Them According To Interest Rates, Payment Terms, And Loan Requirements.",
          },
          {
            title: "Submit Your Loan Application Online",
            info: "Enter Your Contact Details To Help Us Assess Your Online Personal Loan Application.",
          },
          {
            title: "Our Partners Will Be In Touch",
            info: "The Bank And Lenders Will Contact You If You're Eligible For The Loan.",
          },
        ]}
        to="/"
      />
      <FeatureSection
        right={true}
        heading="I want to build my credit history"
        info="Looking To Apply For Your First Credit Card? Planning To Take Out Your First Loan? Stay On The Right Track With These Products."
        options={[
          "Personal Loans",
          "Home Loans",
          "Credit Card",
          "Personal Loans",
        ]}
        to="/"
      />
      <FeatureSection
        heading="I want to protect my family"
        info="Have Peace Of Mind, In And Out Of Your Home. These Insurance Products Are A Must-Have For Growing Families."
        options={[
          "Card Insurance",
          "Health Insurance",
          "Travel Insurance",
          "Life Insurance",
        ]}
        to="/"
      />
      <FeatureSection
        right={true}
        heading="I want to grow my business"
        info="Increase Your Working Capital, Purchase Or Upgrade Equipment, Or Expand Your Product Line Or Service With Loans Especially Made For Msmes."
        options={[
          "Mutual Funds",
          "National Savings",
          "Advanced Investment Options",
        ]}
        to="/"
      />
      <PartnersSection />
      <BlogSection />
      <TestimonialSection />
    </div>
  );
}
