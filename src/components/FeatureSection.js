import React from "react";
import { Link } from "react-router-dom";
import featureLeftSvg from "../assets/featureLeftSvg.png";
import featureRightSvg from "../assets/featureRightSvg.png";
export default function FeatureSection({
  optionsSpecial,
  right,
  heading,
  to,
  info,
  options,
  isCompare,
}) {
  return (
    <div
      className={
        right
          ? "feature__section"
          : "feature__section feature__section__reverse"
      }
    >
      {right ? (
        <div className="feature__section__left">
          <div className="feature__section__left__heading">{heading}</div>
          <div className="feature__section__left__info">{info}</div>
          {optionsSpecial
            ? optionsSpecial.map((item, i) => (
                <React.Fragment key={i}>
                  <div className="feature__section__left__list feature__section__left__list__top">
                    {item.title}
                    <div className="feature__section__left__list__details">
                      {item.info}
                    </div>
                  </div>
                </React.Fragment>
              ))
            : options.map((option, i) => (
                <div className="feature__section__left__list" key={i}>
                  {option}
                </div>
              ))}
          <div style={{ marginTop: "2em" }}>
            <Link to={to} className="feature__section__button">
              Get More
            </Link>
            {isCompare ? (
              <Link
                to="/compare_tool"
                className="feature__section__button__secondary"
              >
                Compare Now
              </Link>
            ) : null}
          </div>
        </div>
      ) : (
        <div className="feature__section__right">
          {right ? (
            <img
              src={featureRightSvg}
              alt="featureRightSvg"
              className="feature__section__right__img"
            />
          ) : (
            <img
              src={featureLeftSvg}
              alt="featureLeftSvg"
              className="feature__section__left__img"
            />
          )}
          <iframe
            src="https://www.youtube.com/embed/0Dyk8NIrx-E"
            className="feature__section__right__video"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )}
      {right ? (
        <div className="feature__section__right">
          {right ? (
            <img
              src={featureRightSvg}
              alt="featureRightSvg"
              className="feature__section__right__img"
            />
          ) : (
            <img
              src={featureLeftSvg}
              alt="featureLeftSvg"
              className="feature__section__left__img"
            />
          )}
          <iframe
            src="https://www.youtube.com/embed/0Dyk8NIrx-E"
            className="feature__section__right__video"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      ) : (
        <div className="feature__section__left">
          <div className="feature__section__left__heading">{heading}</div>
          <div className="feature__section__left__info">{info}</div>
          {optionsSpecial
            ? optionsSpecial.map((item, i) => (
                <React.Fragment key={i}>
                  <div className="feature__section__left__list feature__section__left__list__top">
                    {item.title}
                    <div className="feature__section__left__list__details">
                      {item.info}
                    </div>
                  </div>
                </React.Fragment>
              ))
            : options.map((option, i) => (
                <div className="feature__section__left__list" key={i}>
                  {option}
                </div>
              ))}
          <div style={{ marginTop: "2em" }}>
            <Link to={to} className="feature__section__button">
              Get More
            </Link>
            {isCompare ? (
              <Link
                to="/compare_tool"
                className="feature__section__button__secondary"
              >
                Compare Now
              </Link>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
}
