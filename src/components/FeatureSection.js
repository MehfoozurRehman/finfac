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
            ? optionsSpecial.map((item) => (
                <div className="feature__section__left__list">{item.name}</div>
              ))
            : options.map((option) => (
                <div className="feature__section__left__list">{option}</div>
              ))}
          <Link to={to} className="feature__section__button">
            Get More
          </Link>
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
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
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
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>
      ) : (
        <div className="feature__section__left">
          <div className="feature__section__left__heading">{heading}</div>
          <div className="feature__section__left__info">{info}</div>
          {optionsSpecial
            ? optionsSpecial.map((item) => (
                <>
                  <div className="feature__section__left__list feature__section__left__list__top">
                    {item.title}
                    <div className="feature__section__left__list__details">
                      {item.info}
                    </div>
                  </div>
                </>
              ))
            : options.map((option) => (
                <div className="feature__section__left__list">{option}</div>
              ))}
          <Link to={to} className="feature__section__button">
            Get More
          </Link>
        </div>
      )}
    </div>
  );
}
