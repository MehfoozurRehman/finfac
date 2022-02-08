import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Rating from "react-rating";
import testimonialsPic from "../assets/testimonialsPic.png";
import { Heart, Star } from "react-feather";
function TestimonialCard() {
  return (
    <div className="testimonial__card">
      <div className="testimonial__card__box">
        <img
          src={testimonialsPic}
          alt="testimonialsPic"
          className="testimonial__card__box__img"
        />
      </div>
      <div className="testimonial__card__content">
        <Rating
          className="testimonial__card__content__rating"
          readonly
          initialRating={5}
          emptySymbol={<Star size={20} color="currentColor" />}
          placeholderSymbol={<Star size={20} color="currentColor" />}
          fullSymbol={
            <Star size={20} color="currentColor" fill="currentColor" />
          }
        />
        <div className="testimonial__card__content__info">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          sunt quae recusandae nemo assumenda ab
        </div>
        <div className="testimonial__card__content__heading">Riad Isalm</div>
        <div className="testimonial__card__content__sub__heading">Product</div>
      </div>
    </div>
  );
}

export default function TestimonialSection() {
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
    <section className="testimonial__section">
      <div className="section__heading">Our Clients Feedback</div>
      <div className="section__info">
        It Is A Long Established Fact That A Reader Will Be Distracted By The
        Readable Content Of A Page When Looking At Its Layout. The Point Of
        Using Lorem Ipsum Is
      </div>
      <div className="testimonial__section__content">
        <Swiper
          spaceBetween={50}
          slidesPerView={
            screenSize === "large"
              ? 3
              : screenSize === "medium"
              ? 2
              : screenSize === "small"
              ? 1
              : 3
          }
          //   onSlideChange={() => console.log("slide change")}
          //   onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <TestimonialCard />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
