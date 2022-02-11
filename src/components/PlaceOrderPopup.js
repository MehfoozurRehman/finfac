import React from "react";
import PopupReverse from "./PopupReverse";

export default function PlaceOrderPopup({ onClose }) {
  return (
    <PopupReverse title="Place Order" onClose={onClose}>
      <form action="" className="place__order__form">
        <input
          type="text"
          placeholder="Name"
          className="popup__reverse__input"
        />
        <input
          type="text"
          placeholder="Email Address"
          className="popup__reverse__input"
        />
        <input
          type="text"
          placeholder="Contact Info"
          className="popup__reverse__input"
        />
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          className="popup__reverse__textarea"
          placeholder="Message / Note"
        />
        <button className="campareable__items__entry__button">
          Place Order
        </button>
      </form>
    </PopupReverse>
  );
}
