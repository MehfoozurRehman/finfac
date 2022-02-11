import React from "react";
import PopupReverse from "./PopupReverse";

function CompareableItem() {
  return (
    <div className="campareable__items__entry">
      <div className="campareable__items__entry__name">AMC 1</div>
      <button className="campareable__items__entry__button">Compare</button>
    </div>
  );
}

export default function CompareMorePopup({ onClose }) {
  return (
    <PopupReverse title="Select To Compare" onClose={onClose}>
      <div className="campareable__items">
        <CompareableItem />
        <CompareableItem />
        <CompareableItem />
        <CompareableItem />
        <CompareableItem />
        <CompareableItem />
        <CompareableItem />
        <CompareableItem />
      </div>
    </PopupReverse>
  );
}
