import React from "react";
import Select from "react-select";
import Popup from "./Popup";

export default function TravelInsurancePopup({ onClose }) {
  return (
    <Popup title="Compare Travel Insurances" onClose={onClose}>
      <div className="popup__container__form__label">Country</div>
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
      <div className="popup__container__form__label">Travel time</div>
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
      <div className="popup__container__form__label">Passenger</div>
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
      <div className="popup__container__form__label">Date of Birth</div>
      <div className="popup__container__form__row">
        <input type="date" className="popup__container__form__row__input" />
      </div>
    </Popup>
  );
}
