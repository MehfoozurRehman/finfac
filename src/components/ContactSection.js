import React from "react";
import { Facebook, Instagram, Linkedin, Twitter } from "react-feather";
import contactPic from "../assets/contactPic.svg";

export default function ContactSection() {
  return (
    <section id="contact__section" className="contact__section">
      <form action="" className="contact__section__left">
        <div className="contact__section__left__heading">Contact Us</div>
        <div className="contact__section__left__info">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde odio
          reiciendis, ab consequuntur vero architecto?
        </div>
        <input
          type="text"
          placeholder="Name"
          className="contact__section__left__input__box"
        />
        <input
          type="email"
          placeholder="Email Address"
          className="contact__section__left__input__box"
        />
        <input
          type="text"
          placeholder="Subject"
          className="contact__section__left__input__box"
        />
        <textarea
          placeholder="Message/Note"
          className="contact__section__left__input__textarea"
        />
        <button className="contact__section__left__button">Contact Us</button>
      </form>
      <div className="contact__section__right">
        <img
          src={contactPic}
          alt="contactPic"
          className="contact__section__right__img"
        />
        <div className="contact__section__right__link">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14.991"
            height="14.991"
            viewBox="0 0 14.991 14.991"
          >
            <defs>
              <linearGradient
                id="linear-gradient"
                x1="0.5"
                x2="0.5"
                y2="1"
                gradientUnits="objectBoundingBox"
              >
                <stop offset="0" stop-color="#ed263d" />
                <stop offset="1" stop-color="#77131f" />
              </linearGradient>
            </defs>
            <path
              id="Icon_awesome-phone-alt"
              data-name="Icon awesome-phone-alt"
              d="M14.563,10.594,11.284,9.188a.7.7,0,0,0-.82.2L9.012,11.165A10.853,10.853,0,0,1,3.824,5.977L5.6,4.524a.7.7,0,0,0,.2-.82L4.395.425A.707.707,0,0,0,3.59.018L.545.721A.7.7,0,0,0,0,1.406,13.584,13.584,0,0,0,13.586,14.991a.7.7,0,0,0,.685-.545l.7-3.045a.711.711,0,0,0-.41-.808Z"
              fill="url(#linear-gradient)"
            />
          </svg>
          <span>+92 345 7225510</span>
        </div>
        <div className="contact__section__right__link">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18.27"
            height="12.332"
            viewBox="0 0 18.27 12.332"
          >
            <defs>
              <linearGradient
                id="linear-gradient"
                x1="0.5"
                x2="0.5"
                y2="1"
                gradientUnits="objectBoundingBox"
              >
                <stop offset="0" stop-color="#ed263d" />
                <stop offset="1" stop-color="#77131f" />
              </linearGradient>
            </defs>
            <path
              id="Icon_zocial-email"
              data-name="Icon zocial-email"
              d="M.072,15.308V5.16q0-.018.053-.335L6.1,9.935.142,15.661a1.493,1.493,0,0,1-.07-.352ZM.865,4.121a.759.759,0,0,1,.3-.053H17.25a1,1,0,0,1,.317.053l-5.99,5.127-.793.634L9.216,11.168,7.648,9.882l-.793-.634ZM.882,16.348,6.89,10.587l2.326,1.885,2.326-1.885,6.008,5.761a.846.846,0,0,1-.3.053H1.164a.8.8,0,0,1-.282-.053ZM12.334,9.935l5.955-5.109a1.052,1.052,0,0,1,.053.335V15.308a1.35,1.35,0,0,1-.053.352Z"
              transform="translate(-0.072 -4.068)"
              fill="url(#linear-gradient)"
            />
          </svg>

          <span>ahmadarshad17@gmail.com</span>
        </div>
        <div className="contact__section__right__link">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19.642"
            height="25.76"
            viewBox="0 0 19.642 25.76"
          >
            <defs>
              <linearGradient
                id="linear-gradient"
                x1="0.5"
                x2="0.5"
                y2="1"
                gradientUnits="objectBoundingBox"
              >
                <stop offset="0" stop-color="#ed263d" />
                <stop offset="1" stop-color="#77131f" />
              </linearGradient>
            </defs>
            <path
              id="Icon_map-city-hall"
              data-name="Icon map-city-hall"
              d="M5.255,11.882h1.87V23.9H9.932V13.6h2.806V23.9h2.806V13.6H18.35V23.9h2.806V11.882h1.87a.9.9,0,0,0,.936-.859.835.835,0,0,0-.39-.694l0,0-.014-.008-.024-.014-8.927-4.62V4.332c1.649.758,3.006-.547,5.144.237V1.579c-2.139-.785-3.5.519-5.144-.238V1.149a.469.469,0,0,0-.934,0V5.685L4.747,10.3l-.024.014-.013.009v0a.837.837,0,0,0-.389.694A.9.9,0,0,0,5.255,11.882Zm.935,12.88L4.32,26.479H23.962l-1.871-1.717Z"
              transform="translate(-4.32 -0.72)"
              fill="url(#linear-gradient)"
            />
          </svg>
          <span>Islamabad, Pakistan</span>
        </div>
        <div className="contact__section__right__socials">
          <a href="#" className="contact__section__right__socials__link">
            <Facebook size={20} color="currentColor" />
          </a>
          <a href="#" className="contact__section__right__socials__link">
            <Twitter size={20} color="currentColor" />
          </a>
          <a href="#" className="contact__section__right__socials__link">
            <Linkedin size={20} color="currentColor" />
          </a>
          <a href="#" className="contact__section__right__socials__link">
            <Instagram size={20} color="currentColor" />
          </a>
        </div>
      </div>
    </section>
  );
}
