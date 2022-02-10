import React from "react";
import Select from "react-select";
import Popup from "./Popup";
import PopupRadioButton from "./PopupRadioButton";
import Slider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";
export default function AutoLoansPopup({ onClose }) {
  return (
    <Popup title="Compare Auto Loans" onClose={onClose}>
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
          5,000,000 PKR
        </div>
      </div>
      <div className="popup__container__form__row">
        <Slider />
      </div>
      <div className="popup__container__form__row" style={{ marginBottom: 0 }}>
        <div
          className="popup__container__form__label "
          style={{ width: "50%" }}
        >
          Your Contribution
        </div>
        <div
          className="popup__container__form__label"
          style={{ width: "50%", color: "#ed263d", textAlign: "right" }}
        >
          42%
        </div>
      </div>
      <div className="popup__container__form__row">
        <Slider />
      </div>

      <div className="popup__container__form__label">Tenure</div>
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
      <div className="popup__container__form__label">Type</div>
      <div className="popup__container__form__row">
        <PopupRadioButton defaultChecked name="autoType">
          All
        </PopupRadioButton>
        <PopupRadioButton name="autoType">Conventional</PopupRadioButton>
        <PopupRadioButton name="autoType">Islamic</PopupRadioButton>
      </div>
      <div className="popup__container__form__label">Occupation</div>
      <div className="popup__container__form__row">
        <PopupRadioButton defaultChecked name="occupation">
          All
        </PopupRadioButton>
        <PopupRadioButton name="occupation">Salaried</PopupRadioButton>
        <PopupRadioButton name="occupation">Buisness</PopupRadioButton>
      </div>
    </Popup>
  );
}
