import React, { useEffect } from "react";
import { X } from "react-feather";

export default function PopupReverse({ children, title, onClose }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "auto");
  }, []);
  return (
    <div className="popup__reverse">
      <div className="popup__reverse__form">
        <div className="popup__reverse__form__header">
          <div className="popup__reverse__form__header__heading">{title}</div>
          <button
            className="popup__reverse__form__header__close"
            onClick={onClose}
          >
            <X size={20} color="currentColor" strokeWidth={4} />
          </button>
        </div>
        <div className="popup__reverse__form__content">{children}</div>
      </div>
    </div>
  );
}
