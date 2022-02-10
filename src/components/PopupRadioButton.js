import React from "react";

export default function PopupRadioButton({ name, children, defaultChecked }) {
  return (
    <div className="popup__container__form__input__radio">
      <input
        type="radio"
        className="popup__container__form__input__radio__overlay"
        name={name}
        defaultChecked={defaultChecked}
      />
      <div className="popup__container__form__input__radio__content">
        {children}
      </div>
    </div>
  );
}
