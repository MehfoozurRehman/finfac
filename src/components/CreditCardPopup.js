import React, { useEffect } from "react";
import Popup from "./Popup";
import PopupRadioButton from "./PopupRadioButton";

export default function CreditCardPopup({ onClose }) {
  return (
    <Popup title="Compare Credit Card" onClose={onClose}>
      <div className="popup__container__form__label">CardType</div>
      <div className="popup__container__form__row">
        <PopupRadioButton defaultChecked name="cardType">
          All
        </PopupRadioButton>
        <PopupRadioButton name="cardType">Platinum</PopupRadioButton>
        <PopupRadioButton name="cardType">Travel</PopupRadioButton>
      </div>
      <div className="popup__container__form__row">
        <PopupRadioButton name="cardType">Reward</PopupRadioButton>
        <PopupRadioButton name="cardType">Classic</PopupRadioButton>
        <PopupRadioButton name="cardType">Gold</PopupRadioButton>
      </div>
    </Popup>
  );
}
