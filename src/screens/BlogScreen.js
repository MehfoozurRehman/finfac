import React from "react";
import blogPic from "../assets/blogPic.png";
import blogBg from "../assets/blogBg.png";
import { Link } from "react-router-dom";
import Pagination from "react-js-pagination";
import ContactSection from "../components/ContactSection";

function BlogListFilter({ name, defaultChecked }) {
  return (
    <div className="blog__home__section__list__filters__entry">
      <input
        type="radio"
        defaultChecked={defaultChecked}
        className="blog__home__section__list__filters__entry__input"
        name="blog__home__section__list__filters__entry__input"
      />
      <div className="blog__home__section__list__filters__entry__content">
        {name}
      </div>
    </div>
  );
}

function BlogCard() {
  return (
    <Link
      to="/blog-detail:travel__vlog"
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }}
      className="blog__home__section__list__entry"
    >
      <div className="blog__home__section__list__entry__box">
        <img
          src={blogPic}
          alt="blogPic"
          className="blog__home__section__list__entry__box__img"
        />
      </div>
      <div className="blog__home__section__list__entry__content">
        <div className="blog__home__section__list__entry__content__category">
          Travel Insurance
        </div>
        <div className="blog__home__section__list__entry__content__title">
          Increase Your Working Capital, Purchase Or Upgrade Equipment, Or
          Expand Your Product Line Or Service With Loans Especially Made For
          Msmes.
        </div>
        <div className="blog__home__section__list__entry__content__about">
          <div className="blog__home__section__list__entry__content__author">
            By Team Finfac
          </div>
          <div className="blog__home__section__list__entry__content__date">
            Sep 27 2021
          </div>
        </div>
        <div className="blog__home__section__list__entry__content__info">
          You Must Be Agreed, Human Instinct Keeps Us Alert From Unforeseen
          Events. And, It’s Natural; You Want To Protect Your Loved Ones And
          Valuable Possession From A Series Of Bad Episodes. When You Think
          About Protection, The First Thing That Clicks Is Commonly Known As
          ‘Insurance’. Again, You Might Not Be Satisfied With Their Giving Out
          Of Interest-Based Return. As You Know; A Fixed Or Guaranteed Profit Is
          Not Allowed In Islamic And Strictly Should Not Be Practiced.Then, What
          Is The Best Alternative? Takaful; It Is Around For Decades And Is
          Widely Used In The Middle East And Asia Region. This Blog Will
          Highlight Factors That Promote The Islamic Way Of Insurance, How Do
          Takaful Work And Different Models Used. So, Let’s Get Down To Finding
          More.
        </div>
      </div>
    </Link>
  );
}

export default function BlogScreen() {
  return (
    <>
      <div className="blog__home__section">
        <div className="blog__home__section__background">
          <img
            src={blogBg}
            alt="blogBg"
            className="blog__home__section__background__img"
          />
          <div className="blog__home__section__background__overlay">
            Featured Blogs
          </div>
        </div>
        <div className="blog__home__section__list__filters">
          <BlogListFilter name="All" defaultChecked={true} />
          <BlogListFilter name="Auto Loan" />
          <BlogListFilter name="Travel Insurance" />
          <BlogListFilter name="Health Insurance" />
        </div>
        <div className="blog__home__section__list">
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
        <Pagination
          itemsCountPerPage={10}
          totalItemsCount={450}
          pageRangeDisplayed={5}
        />
      </div>
      <ContactSection />
    </>
  );
}
