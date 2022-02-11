import React, { useState } from "react";
import { X } from "react-feather";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

function Table({
  first,
  title,
  options,
  values1,
  values2,
  values3,
  values4,
  values5,
}) {
  const [isOpen, setIsOpen] = useState(first ? true : false);
  return (
    <>
      <button
        onClick={() => {
          isOpen ? setIsOpen(false) : setIsOpen(true);
        }}
        className="compare__screen__table__header"
        style={isOpen ? null : { marginBottom: ".2em" }}
      >
        {title}
      </button>
      {isOpen ? (
        <div className="compare__screen__table">
          <div className="compare__screen__table__col">
            {options.map((option) => (
              <div className="compare__screen__table__col__row">{option}</div>
            ))}
          </div>
          {values1 ? (
            <div className="compare__screen__table__col">
              {values1.map((value) =>
                value === "" ? (
                  <div className="compare__screen__table__col__row">
                    <X size={20} color="currentColor" />
                  </div>
                ) : (
                  <div className="compare__screen__table__col__row">
                    {value}
                  </div>
                )
              )}
            </div>
          ) : null}
          {values2 ? (
            <div className="compare__screen__table__col">
              {values2.map((value) =>
                value === "" ? (
                  <div className="compare__screen__table__col__row">
                    <X size={20} color="currentColor" />
                  </div>
                ) : (
                  <div className="compare__screen__table__col__row">
                    {value}
                  </div>
                )
              )}
            </div>
          ) : null}
          {values3 ? (
            <div className="compare__screen__table__col">
              {values3.map((value) =>
                value === "" ? (
                  <div className="compare__screen__table__col__row">
                    <X size={20} color="currentColor" />
                  </div>
                ) : (
                  <div className="compare__screen__table__col__row">
                    {value}
                  </div>
                )
              )}
            </div>
          ) : null}
          {values4 ? (
            <div className="compare__screen__table__col">
              {values4.map((value) =>
                value === "" ? (
                  <div className="compare__screen__table__col__row">
                    <X size={20} color="currentColor" />
                  </div>
                ) : (
                  <div className="compare__screen__table__col__row">
                    {value}
                  </div>
                )
              )}
            </div>
          ) : null}
          {values5 ? (
            <div className="compare__screen__table__col">
              {values5.map((value) =>
                value === "" ? (
                  <div className="compare__screen__table__col__row">
                    <X size={20} color="currentColor" />
                  </div>
                ) : (
                  <div className="compare__screen__table__col__row">
                    {value}
                  </div>
                )
              )}
            </div>
          ) : null}
        </div>
      ) : null}
    </>
  );
}

function CompareItem({ onOrder }) {
  return (
    <div className="compare__screen__table__compare__col__entry">
      <button className="compare__screen__table__compare__col__entry__close">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15.071"
          height="15.071"
          viewBox="0 0 19.071 19.071"
        >
          <g id="x_1_" data-name="x (1)" transform="translate(-2.464 -2.464)">
            <line
              id="Line_11"
              data-name="Line 11"
              x1="12"
              y2="12"
              transform="translate(6 6)"
              fill="none"
              stroke="#ff2741"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="5"
            />
            <line
              id="Line_12"
              data-name="Line 12"
              x2="12"
              y2="12"
              transform="translate(6 6)"
              fill="none"
              stroke="#ff2741"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="5"
            />
          </g>
        </svg>
      </button>
      <div className="compare__screen__table__compare__col__entry__name">
        AMC 5
      </div>
      <button
        className="compare__screen__table__compare__col__entry__button"
        onClick={onOrder}
      >
        Order Now
      </button>
    </div>
  );
}

export default function CompareScreen({
  setCompareMorePopup,
  setPlaceOrderPopup,
}) {
  return (
    <div className="compare__screen">
      <div className="compare__screen__header">
        <button
          className="compare__screen__header__button"
          onClick={() => setCompareMorePopup(true)}
        >
          Compare More
        </button>
        <Link to="/" className="header__wrapper__logo">
          <img src={logo} alt="logo" className="header__wrapper__logo__img" />
        </Link>
        <a
          href="http://www.africau.edu/images/default/sample.pdf"
          className="compare__screen__header__button"
        >
          Download
        </a>
      </div>
      <div className="compare__screen__header__top">
        <div className="compare__screen__header__top__strip">
          <div className="compare__screen__header__top__strip__heading">
            Value
          </div>
          <div className="compare__screen__header__top__strip__value">
            5,000,0000 PKR
          </div>
        </div>
        <div className="compare__screen__header__top__strip">
          <div className="compare__screen__header__top__strip__heading">
            Contribuation
          </div>
          <div className="compare__screen__header__top__strip__value">42%</div>
        </div>
        <div className="compare__screen__header__top__strip">
          <div className="compare__screen__header__top__strip__heading">
            Years
          </div>
          <div className="compare__screen__header__top__strip__value">
            1 Year
          </div>
        </div>
      </div>
      <div className="compare__screen__table__compare">
        <div className="compare__screen__table__compare__col"></div>
        <div className="compare__screen__table__compare__col">
          <CompareItem
            onOrder={() => {
              setPlaceOrderPopup(true);
            }}
          />
        </div>
        <div className="compare__screen__table__compare__col">
          <CompareItem
            onOrder={() => {
              setPlaceOrderPopup(true);
            }}
          />
        </div>
        <div className="compare__screen__table__compare__col">
          <CompareItem
            onOrder={() => {
              setPlaceOrderPopup(true);
            }}
          />
        </div>
        <div className="compare__screen__table__compare__col">
          <CompareItem
            onOrder={() => {
              setPlaceOrderPopup(true);
            }}
          />
        </div>
        <div className="compare__screen__table__compare__col">
          <CompareItem
            onOrder={() => {
              setPlaceOrderPopup(true);
            }}
          />
        </div>
      </div>
      <Table
        first={true}
        title="Asset Allocation Fund"
        options={[
          "Loan Amount",
          "APR",
          "AMC Rating",
          "Loan Amount",
          "APR",
          "AMC Rating",
        ]}
        noOfCols={5}
        values1={[
          "Loan Amount",
          "APR",
          "AMC Rating",
          "Loan Amount",
          "APR",
          "AMC Rating",
        ]}
        values2={["Loan", "APR", "AMC Rating", "Loan Amount", "", "AMC Rating"]}
        values3={["Loan", "", "AMC Rating", "Loan Amount", "APR", "AMC Rating"]}
        values4={["Loan", "APR", "AMC Rating", "Loan Amount", "", "AMC Rating"]}
        values5={["Loan", "APR", "AMC Rating", "Loan Amount", "", "AMC Rating"]}
      />
      <Table
        title="Asset Allocation Fund"
        options={[
          "Loan Amount",
          "APR",
          "AMC Rating",
          "Loan Amount",
          "APR",
          "AMC Rating",
        ]}
        noOfCols={5}
        values1={[
          "Loan Amount",
          "APR",
          "AMC Rating",
          "Loan Amount",
          "APR",
          "AMC Rating",
        ]}
        values2={["Loan", "APR", "AMC Rating", "Loan Amount", "", "AMC Rating"]}
        values3={["Loan", "", "AMC Rating", "Loan Amount", "APR", "AMC Rating"]}
        values4={["Loan", "APR", "AMC Rating", "Loan Amount", "", "AMC Rating"]}
        values5={["Loan", "APR", "AMC Rating", "Loan Amount", "", "AMC Rating"]}
      />
      <Table
        title="Asset Allocation Fund"
        options={[
          "Loan Amount",
          "APR",
          "AMC Rating",
          "Loan Amount",
          "APR",
          "AMC Rating",
        ]}
        noOfCols={5}
        values1={[
          "Loan Amount",
          "APR",
          "AMC Rating",
          "Loan Amount",
          "APR",
          "AMC Rating",
        ]}
        values2={["Loan", "APR", "AMC Rating", "Loan Amount", "", "AMC Rating"]}
        values3={["Loan", "", "AMC Rating", "Loan Amount", "APR", "AMC Rating"]}
        values4={["Loan", "APR", "AMC Rating", "Loan Amount", "", "AMC Rating"]}
        values5={["Loan", "APR", "AMC Rating", "Loan Amount", "", "AMC Rating"]}
      />
    </div>
  );
}
