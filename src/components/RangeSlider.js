import React from "react";
import Slider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";

export default function RangeSlider({ title, value, minRange, maxRange }) {
  return (
    <>
      <div className="range__slider__content">
        <div className="range__slider__content__heading">{title}</div>
        <div className="range__slider__content__value">{value}</div>
      </div>
      <div className="range__slider__container">
        <Slider />
        <div className="range__slider__containr__row">
          <div className="range__slider__containr__row__value">{minRange}</div>
          <div className="range__slider__containr__row__value">{maxRange}</div>
        </div>
      </div>
    </>
  );
}
