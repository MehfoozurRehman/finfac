import React from "react";
import Select from "react-select";
import Popup from "./Popup";
import Slider from "rc-slider";

export default function CarInsurancePopup({ onClose }) {
  return (
    <Popup title="Compare Car Insurances" onClose={onClose}>
      <div className="popup__container__form__row" style={{ marginBottom: 0 }}>
        <div
          className="popup__container__form__label "
          style={{ width: "50%" }}
        >
          Value of Car
        </div>
        <div
          className="popup__container__form__label"
          style={{ width: "50%", color: "#ed263d", textAlign: "right" }}
        >
          5,000,000
        </div>
      </div>
      <div className="popup__container__form__row">
        <Slider />
      </div>
      <div className="popup__container__form__label">Make</div>
      <div className="popup__container__form__row">
        <Select
          options={[
            { label: "All", value: "all" },
            { label: "11,600", value: "11600" },
            { label: "13,750", value: "13750" },
            { label: "9,410", value: "9410" },
          ]}
        />
      </div>
      <div className="popup__container__form__label">Model</div>
      <div className="popup__container__form__row">
        <Select
          options={[
            { label: "All", value: "all" },
            { label: "11,600", value: "11600" },
            { label: "13,750", value: "13750" },
            { label: "9,410", value: "9410" },
          ]}
        />
      </div>
      <div className="popup__container__form__label">Year of Manufacturing</div>
      <div className="popup__container__form__row">
        <Select
          options={[
            { label: "All", value: "all" },
            { label: "11,600", value: "11600" },
            { label: "13,750", value: "13750" },
            { label: "9,410", value: "9410" },
          ]}
        />
      </div>
    </Popup>
  );
}
