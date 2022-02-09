import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

export default function HomeSection() {
  const [screenSize, setScreenSize] = useState("large");
  useEffect(() => {
    if (window.innerWidth > 1250) {
      setScreenSize("large");
    } else if (window.innerWidth < 1250 && window.innerWidth > 900) {
      setScreenSize("medium");
    } else if (window.innerWidth < 900) {
      setScreenSize("small");
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth > 1250) {
        setScreenSize("large");
      } else if (window.innerWidth < 1250 && window.innerWidth > 900) {
        setScreenSize("medium");
      } else if (window.innerWidth < 900) {
        setScreenSize("small");
      }
    });
  }, []);
  return (
    <div className="home__section">
      <div className="home__section__top">
        <div className="home__section__top__left">
          <div className="home__section__top__left__heading">
            Let's Help You With
          </div>
          <div className="home__section__top__left__heading">
            HOME LOANS & CHEAPEST
          </div>
          <div className="home__section__top__left__sub__heading">
            RATES ON MUTUAL FUNDS
          </div>
        </div>
        <div className="home__section__top__right">
          <iframe
            src="https://www.youtube.com/embed/0Dyk8NIrx-E"
            className="home__section__top__right__video"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
      <div className="home__section__bottom">
        <div className="home__section__bottom__info">
          It Is A Long Established Fact That A Reader Will Be Distracted By The
          Readable Content Of A Page When Looking At Its Layout. The Point Of
          Using Lorem Ipsum Is That It Has A More-Or-Less Normal Distribution Of
          Letters, As Opposed To Using 'Content Here, Content Here', Making It
          Look Like Readable English. Many Desktop Publishing Packages And Web
          Page Editors Now Use Lorem Ipsum As Their Default Model Text, And A
          Search For 'Lorem Ipsum' Will Uncover Many Web Sites Still In Their
          Infancy. Various Versions Have Evolved Over The Years, Sometimes By
          Accident, Sometimes On Purpose (Injected Humour And The Like).
        </div>
        <div className="home__section__bottom__buttons">
          <Link to="/" className="home__section__bottom__buttons__primary">
            Home Loans
          </Link>
          <Link to="/" className="home__section__bottom__buttons__secondary">
            Our Plans
            <svg
              id="arrow_right_alt-24px"
              xmlns="http://www.w3.org/2000/svg"
              width="24.371"
              height="24.371"
              viewBox="0 0 24.371 24.371"
            >
              <path
                id="Path_5"
                data-name="Path 5"
                d="M0,0H24.371V24.371H0Z"
                fill="none"
              />
              <path
                id="Path_6"
                data-name="Path 6"
                d="M16.2,11.046H4v2.031H16.2v3.046l4.052-4.062L16.2,8Z"
                transform="translate(0.062 0.124)"
                fill="#fff"
              />
            </svg>
          </Link>
        </div>
      </div>
      <div className="home__section__overlay">
        <Swiper
          spaceBetween={50}
          slidesPerView={
            screenSize === "large"
              ? 4
              : screenSize === "medium"
              ? 2
              : screenSize === "small"
              ? 1
              : 4
          }
          //   onSlideChange={() => console.log("slide change")}
          //   onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div className="home__section__overlay__entry">
              <div className="home__section__overlay__entry__heading">
                Kibor
              </div>
              <div className="home__section__overlay__entry__info">57%</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="home__section__overlay__entry">
              <div className="home__section__overlay__entry__heading">
                Dollar Exchange Rate
              </div>
              <div className="home__section__overlay__entry__info">
                143.54Rs
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="home__section__overlay__entry">
              <div className="home__section__overlay__entry__heading">
                Gdp To Pkr
              </div>
              <div className="home__section__overlay__entry__info">4343</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="home__section__overlay__entry">
              <div className="home__section__overlay__entry__heading">
                Gold Rate
              </div>
              <div className="home__section__overlay__entry__info">1234212</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="home__section__overlay__entry">
              <div className="home__section__overlay__entry__heading">
                Kibor
              </div>
              <div className="home__section__overlay__entry__info">57%</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="home__section__overlay__entry">
              <div className="home__section__overlay__entry__heading">
                Dollar Exchange Rate
              </div>
              <div className="home__section__overlay__entry__info">
                143.54Rs
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="home__section__overlay__entry">
              <div className="home__section__overlay__entry__heading">
                Gdp To Pkr
              </div>
              <div className="home__section__overlay__entry__info">4343</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="home__section__overlay__entry">
              <div className="home__section__overlay__entry__heading">
                Gold Rate
              </div>
              <div className="home__section__overlay__entry__info">1234212</div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
