import React, { useState } from "react";
import { Link } from "react-router-dom";
import FeatureSection from "../components/FeatureSection";
import ContactSection from "../components/ContactSection";

export default function ToolDetails({}) {
  const [compare, setCompare] = useState(true);
  return (
    <>
      <div className="tools__home__section">
        {compare ? (
          <div className="tools__home__section__top">
            <div className="tools__home__section__top__col">
              <div className="tools__home__section__top__col__heading">
                Prime Minister Loan Scheme
              </div>
              <Link to="/" className="feature__section__button">
                Compare
              </Link>
            </div>
            <div className="tools__home__section__top__col">
              <div className="tools__home__section__top__col__heading">
                Commercial Loan
              </div>
              <Link to="/" className="feature__section__button">
                Compare
              </Link>
            </div>
          </div>
        ) : null}
        <FeatureSection
          isCompare={compare ? false : true}
          right={true}
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
        <div className="tools__home__section__top__bottom">
          <iframe
            src="https://www.youtube.com/embed/0Dyk8NIrx-E"
            className="tools__home__section__top__bottom__video"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <iframe
            src="https://www.youtube.com/embed/0Dyk8NIrx-E"
            className="tools__home__section__top__bottom__video"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <iframe
            src="https://www.youtube.com/embed/0Dyk8NIrx-E"
            className="tools__home__section__top__bottom__video"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
      <ContactSection />
    </>
  );
}
