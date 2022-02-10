import React, { useEffect } from "react";
import { ArrowRight, X } from "react-feather";
import popupLogo from "../assets/popupLogo.png";

export default function Popup({ children, title, onClose, onSubmit }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "auto");
  }, []);
  return (
    <div className="popup">
      <img src={popupLogo} alt="popupLogo" className="popup__img" />
      <form onSubmit={onSubmit} className="popup__container__form">
        <button className="popup__container__form__close" onClick={onClose}>
          <X size={20} color="currentColor" strokeWidth={3} />
        </button>
        <div className="popup__container__name">{title}</div>
        <div className="popup__container__form__content">{children}</div>
        <button className="popup__container__form__button" type="submit">
          Lets Go <ArrowRight size={15} color="currentColor" />
        </button>
      </form>
    </div>
  );
}
