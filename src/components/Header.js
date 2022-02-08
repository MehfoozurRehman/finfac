import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import logo from "../assets/logo.svg";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "react-feather";

function NavLink({ to, children, setIsNavOpen }) {
  const navigate = useNavigate();
  return (
    <div className="header__wrapper__nav__link">
      <input
        type="radio"
        defaultChecked={to === window.location.pathname}
        className="header__wrapper__nav__link__input"
        name="header__wrapper__nav__link__input"
        onClick={() => {
          navigate(to);
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
          if (window.innerWidth < 1050) {
            setIsNavOpen(false);
          }
        }}
      />
      <div className="header__wrapper__nav__link__content">{children}</div>
    </div>
  );
}

export default function Header() {
  const navigate = useNavigate();
  const [isNavOpen, setIsNavOpen] = useState(true);
  useEffect(() => {
    if (window.innerWidth < 1050) {
      setIsNavOpen(false);
    } else {
      setIsNavOpen(true);
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth < 1050) {
        setIsNavOpen(false);
      } else {
        setIsNavOpen(true);
      }
    });
    return () => window.removeEventListener("resize");
  }, []);
  return (
    <div className="header">
      <Marquee
        delay={0}
        speed={100}
        style={{
          backgroundColor: "#2C2C2C",
          color: "#ffffff",
          padding: ".8em .5em",
          fontSize: 16,
        }}
        gradient={false}
      >
        it is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. the point of
        using lorem ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'content here, content here', making it
        look like readable english. many desktop publishing packages and web
        page editors now use lorem ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy. various versions have evolved over the years, sometimes by
        accident, sometimes on purpose (injected humour and the like).
      </Marquee>
      <div className="header__wrapper">
        <a href="#" className="header__wrapper__logo">
          <img src={logo} alt="logo" className="header__wrapper__logo__img" />
        </a>
        <button
          className="header__wrapper__menu"
          onClick={() => {
            isNavOpen ? setIsNavOpen(false) : setIsNavOpen(true);
          }}
        >
          {isNavOpen ? (
            <X size={20} color="currentColor" />
          ) : (
            <Menu size={20} color="currentColor" />
          )}
        </button>
        {isNavOpen ? (
          <div className="header__wrapper__nav">
            <NavLink to="/" id="home" setIsNavOpen={setIsNavOpen}>
              Home
            </NavLink>
            <NavLink
              to="/invested-money"
              id="investedMoney"
              setIsNavOpen={setIsNavOpen}
            >
              Invest Money
            </NavLink>
            <NavLink
              to="/need-money"
              id="needMoney"
              setIsNavOpen={setIsNavOpen}
            >
              Need Money
            </NavLink>
            <NavLink
              to="/protection"
              id="protection"
              setIsNavOpen={setIsNavOpen}
            >
              Protection
            </NavLink>
            <NavLink to="/guide" id="guide" setIsNavOpen={setIsNavOpen}>
              Guide
            </NavLink>
            <NavLink to="/blog" id="blog" setIsNavOpen={setIsNavOpen}>
              Blog
            </NavLink>
            <div className="header__wrapper__nav__button">
              <input
                type="radio"
                className="header__wrapper__nav__button__input"
                name="header__wrapper__nav__link__input"
                defaultChecked={"/contact-us" === window.location.pathname}
                onClick={() => {
                  navigate("contact-us");
                  if (window.innerWidth < 1050) {
                    setIsNavOpen(false);
                  }
                }}
              />
              <div className="header__wrapper__nav__button__content">
                Contact Us
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
