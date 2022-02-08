import React from "react";
import leftSvg from "../assets/partners/leftSvg.png";
import rightSvg from "../assets/partners/rightSvg.png";
import logo1 from "../assets/partners/logo1.png";
import logo2 from "../assets/partners/logo2.png";
import logo3 from "../assets/partners/logo3.png";
import logo4 from "../assets/partners/logo4.png";
import logo5 from "../assets/partners/logo5.png";
import logo6 from "../assets/partners/logo6.png";
import logo7 from "../assets/partners/logo7.png";
import logo8 from "../assets/partners/logo8.png";
import logo9 from "../assets/partners/logo9.png";

function PartnerCard({ logo }) {
  return (
    <div className="partner__card">
      <img src={logo} alt="logo" className="partner__card__logo" />
    </div>
  );
}

export default function PartnersSection() {
  return (
    <section className="partner__section">
      <div className="partner__section__wrapper">
        <div className="section__heading">Our Partners</div>
        <div className="section__info">
          We Have Partnerships With More Than 50 Banks, Insurance Companies, And
          Financial Firms In The Philippines.
        </div>
        <div className="partner__section__content">
          <img
            src={leftSvg}
            alt="leftSvg"
            className="partner__section__content__left__img"
          />
          <PartnerCard logo={logo1} />
          <PartnerCard logo={logo2} />
          <PartnerCard logo={logo3} />
          <PartnerCard logo={logo4} />
          <PartnerCard logo={logo5} />
          <PartnerCard logo={logo6} />
          <PartnerCard logo={logo7} />
          <PartnerCard logo={logo8} />
          <PartnerCard logo={logo9} />
          <img
            src={rightSvg}
            alt="rightSvg"
            className="partner__section__content__right__img"
          />
        </div>
      </div>
    </section>
  );
}
