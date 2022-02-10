import React from "react";
import Select from "react-select";
import Popup from "./Popup";

export default function HealthInsurancePopup({ onClose }) {
  return (
    <Popup title="Compare Health Insurances" onClose={onClose}>
      <div className="popup__container__form__label">Premium</div>
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
