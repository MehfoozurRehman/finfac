import React from "react";
import Select from "react-select";
import Popup from "./Popup";
import PopupRadioButton from "./PopupRadioButton";
import Slider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";
export default function HomeLoansPopup({ onClose }) {
  return (
    <Popup title="Compare Home Loans" onClose={onClose}>
      <div className="popup__container__form__row" style={{ marginBottom: 0 }}>
        <div
          className="popup__container__form__label "
          style={{ width: "50%" }}
        >
          Value of Home
        </div>
        <div
          className="popup__container__form__label"
          style={{ width: "50%", color: "#ed263d", textAlign: "right" }}
        >
          100,000,000 PKR
        </div>
      </div>
      <div className="popup__container__form__row">
        <Slider />
      </div>
      <div
        className="popup__container__form__row"
        style={{ marginBottom: 0, marginTop: 10 }}
      >
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
          50%
        </div>
      </div>
      <div
        className="popup__container__form__row"
        style={{ marginBottom: ".5em" }}
      >
        <Slider />
      </div>
      <div className="popup__container__form__row">
        <div
          className="popup__container__form__label"
          style={{ textAlign: "right" }}
        >
          46,538,277 PKR
        </div>
      </div>
      <div className="popup__container__form__row" style={{ marginBottom: 0 }}>
        <div className="popup__container__form__label" style={{ width: "50%" }}>
          Tenure
        </div>
        <div
          className="popup__container__form__label"
          style={{ width: "50%", color: "#ed263d", textAlign: "right" }}
        >
          13 Year
        </div>
      </div>
      <div className="popup__container__form__row">
        <Slider />
      </div>
      <div className="popup__container__form__label">Type</div>
      <div className="popup__container__form__row">
        <PopupRadioButton defaultChecked name="loanType">
          All
        </PopupRadioButton>
        <PopupRadioButton name="loanType">Conventional</PopupRadioButton>
        <PopupRadioButton name="loanType">Islamic</PopupRadioButton>
      </div>
      <div className="popup__container__form__label">Occupation</div>
      <div className="popup__container__form__row">
        <PopupRadioButton defaultChecked name="occupation">
          All
        </PopupRadioButton>
      </div>
      <div className="popup__container__form__label">City</div>
      <div className="popup__container__form__row">
        <Select options={[{ label: "All", value: "all" }]} />
      </div>
    </Popup>
  );
}
