import React from "react";
import blogPic from "../assets/blogPic.png";

function BlogCard() {
  return (
    <div className="blog__card">
      <div className="blog__card__box">
        <img src={blogPic} alt="blogsPic" className="blog__card__box__img" />
      </div>
      <div className="blog__card__content">
        <div className="blog__card__content__heading">Riad Isalm</div>
        <div className="blog__card__content__info">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          sunt quae recusandae nemo assumenda ab Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Voluptates sunt quae recusandae nemo
          assumenda ab Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Voluptates sunt quae recusandae nemo assumenda ab
        </div>
      </div>
    </div>
  );
}

export default function BlogSection() {
  return (
    <section className="blog__section">
      <div className="section__heading">Featured Blogs</div>
      <div className="blog__section__content">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </section>
  );
}
