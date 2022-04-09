import React, { useState } from "react";
import contactPic from "../assets/contactPic.svg";
import RangeSlider from "../components/RangeSlider";
import Toggle from "react-toggle";
import LineGraph from "../components/LineGraph";

function AmortizationCardEntry() {
  return (
    <div className="calulator__section__content__botttom__card__content__row">
      <div className="calulator__section__content__botttom__card__content__row__entry">
        1
      </div>
      <div className="calulator__section__content__botttom__card__content__row__entry">
        26,20,000
      </div>
      <div className="calulator__section__content__botttom__card__content__row__entry">
        6,20,000
      </div>
      <div className="calulator__section__content__botttom__card__content__row__entry">
        26,20,00
      </div>
      <div className="calulator__section__content__botttom__card__content__row__entry">
        20,000
      </div>
    </div>
  );
}

function AmountInterestLink({ title, select, setSelect }) {
  return (
    <button
      onClick={() => {
        setSelect(title);
      }}
      className="calulator__section__content__btn"
    >
      <div
        className={
          select === title
            ? "calulator__section__content__btn__circle calulator__section__content__btn__circle__select"
            : "calulator__section__content__btn__circle"
        }
      ></div>
      {title}
    </button>
  );
}

export default function CreditCardCalculator() {
  const [select, setSelect] = useState("Table");
  const listOfEntries = [
    {
      name: "Instant EMI",
      default: true,
    },
    {
      name: "EMI on call",
      default: false,
    },
  ];
  return (
    <>
      <div className="calculator__container">
        <div className="calculator__container__left">
          <div className="calculator__container__left__heading">
            Home Loan Calculator
          </div>
          <div className="calculator__container__left__para">
            Equal Monthly Instalment is the monthly repayment of the home loan
            principal amount and interest charged on such home loan. If you go
            for a longer tenure which can be maximum 30 years, your EMI will be
            reduced. It helps to plan your monthly budget. Initially the EMI you
            pay contribute towards payment of the interest on the home loan, and
            later towards the payment of the principal as it works on reducing
            balance method. It works in benefit of the borrower of the loan. It
            makes your repayments comfortable and easier
          </div>
        </div>
        <img
          src={contactPic}
          alt="carLoanPic"
          className="calculator__container__img"
        />
      </div>
      <div className="calculator__section">
        <div className="calculator__section__content">
          <div className="credit__card__section__content__top">
            <div className="credit__card__calculator__content__card">
              <div className="credit__card__calculator__content__card__heading">
                Type of EMI
              </div>
              <div className="sip__calculator__content__card__toggle__row">
                {listOfEntries.map((item, i) => (
                  <div key={i} className="main__content__form__col">
                    <label className="main__content__form__toggle">
                      <span>{item.name}</span>
                      <Toggle defaultChecked={item.default} icons={false} />
                    </label>
                  </div>
                ))}
              </div>
              <RangeSlider
                title="Transaction Amount"
                value="26200"
                minRange="1 Lac"
                maxRange="1 Cr"
              />
              <RangeSlider
                title="Tenure"
                value="10.5%"
                minRange="7%"
                maxRange="10.5%"
              />
              <RangeSlider
                title="Rate of Interest Per Annum (%)"
                value="3"
                minRange="1"
                maxRange="8"
              />
            </div>
            <div className="credit__card__calculator__graph__card__left">
              <div className="credit__card__calculator__graph__card">
                <div className="credit__card__calculator__graph__card__entry">
                  <span>Monthly EMI:</span> Rs. 6,745
                </div>
                <div className="credit__card__calculator__graph__card__entry">
                  <span>Total Interest Amount:</span>Rs. 12,470
                </div>
                <div className="credit__card__calculator__graph__card__entry">
                  <span>Total Amount Payable:</span> Rs. 1,21,403
                </div>
              </div>
              <div className="credit__card__calculator__graph__card__left__entry">
                <span> Note:-</span> Loan principal amount should not be greater
                than the Credit Limit of the Card.
              </div>
            </div>
          </div>
          <div className="calulator__section__content__botttom">
            <div className="calulator__section__content__botttom__heading">
              Amount and Interest
            </div>
            <div className="calulator__section__content__btn__wrapper">
              <AmountInterestLink
                title="Table"
                select={select}
                setSelect={setSelect}
              />
              <AmountInterestLink
                title="Graph"
                select={select}
                setSelect={setSelect}
              />
            </div>
            {select === "Table" ? (
              <>
                <div className="calulator__section__content__botttom__card">
                  <div className="calulator__section__content__botttom__card__heading__row">
                    <div className="calulator__section__content__botttom__card__heading__row__entry">
                      Installment No
                    </div>
                    <div className="calulator__section__content__botttom__card__heading__row__entry">
                      EMI Amount
                    </div>
                    <div className="calulator__section__content__botttom__card__heading__row__entry">
                      Principal
                    </div>
                    <div className="calulator__section__content__botttom__card__heading__row__entry">
                      Interest
                    </div>
                    <div className="calulator__section__content__botttom__card__heading__row__entry">
                      Balance Amount
                    </div>
                  </div>
                  <AmortizationCardEntry />
                  <AmortizationCardEntry />
                  <AmortizationCardEntry />
                  <AmortizationCardEntry />
                  <AmortizationCardEntry />
                  <AmortizationCardEntry />
                  <AmortizationCardEntry />
                  <AmortizationCardEntry />
                </div>
              </>
            ) : null}
            {select === "Graph" ? (
              <>
                <div className="calulator__section__content__botttom__card">
                  <LineGraph />
                </div>
              </>
            ) : null}
          </div>
        </div>
      </div>
      <div className="calculator__container__content">
        <div className="calculator__container__heading">
          What is Home Loan EMI?
        </div>
        <div className="calculator__container__para">
          Equal Monthly Instalment is the monthly repayment of the home loan
          principal amount and interest charged on such home loan. If you go for
          a longer tenure which can be maximum 30 years, your EMI will be
          reduced. It helps to plan your monthly budget. Initially the EMI you
          pay contribute towards payment of the interest on the home loan, and
          later towards the payment of the principal as it works on reducing
          balance method. It works in benefit of the borrower of the loan. It
          makes your repayments comfortable and easier.
        </div>
        <li className="calculator__container__para">
          Self-employed or Salaried Individuals
        </li>
        <li className="calculator__container__para">Partnership firms.</li>
        <li className="calculator__container__para">HUFs and Trus</li>
        <div className="calculator__container__heading">
          3 most important components of Car Loan EMI:
        </div>
        <div className="calculator__container__para">
          <span>Principal</span> – Principal is the amount of loan that the
          bank/lender offers to the borrower for a fixed period of time. Most of
          the bank provide 90% of the amount of the car as loan to ensure easy
          payment for the borrower through EMIs.
        </div>
        <div className="calculator__container__para">
          <span>Tenure </span> – Principal is the amount of loan that the
          bank/lender offers to the borrower for a fixed period of time. Most of
          the bank provide 90% of the amount of the car as loan to ensure easy
          payment for the borrower through EMIs.
        </div>
        <div className="calculator__container__para">
          <span>Interest </span> – Principal is the amount of loan that the
          bank/lender offers to the borrower for a fixed period of time. Most of
          the bank provide 90% of the amount of the car as loan to ensure easy
          payment for the borrower through EMIs.
        </div>
        <div className="calculator__container__heading">
          What is Car Loan EMI?
        </div>
        <div className="calculator__container__para">
          EMI stand for “Equated Monthly Installment” towards the Car Loan taken
          to purchase the car. As suggested by the name it means it is an
          installment for the entire tenure of the car loan which is paid
          equally every month by the car owner to repay the amount of the loan
          along with interest for the period of the loan. EMI consist of
          principal amount and interest amount on the car loan. It is paid by
          the borrower of the car loan/ owner of the car loan to the lender/bank
          who has provided the loan for the purchase of the car. So, before
          applying for a car loan, you must make it a point to calculate and
          check how much would be your car loan EMI every month. Car Loan EMIs
          are computed on a reducing balance method which works in favour of the
          borrower of the car loan. Initially you pay toward the interest of the
          loan, but later you pay towards your principal amount of car loan. EMI
          payment is a simplified method of payment of the car loan, and the Car
          loan EMI calculator makes the calculation of car loan makes it even
          simpler and easier.
        </div>
        <div className="calculator__container__heading">Car Loan Overview:</div>
        <div className="calculator__container__para">
          Car has become a basic necessity and it is one of the earliest
          purchases you will ever make. For millennials, car is like a status
          symbol and adds to the standard of living. The best way to buy a car
          is from your savings. However, even if you cannot buy with your
          savings, you can still afford it with easy and simple car loans where
          you are free from the stress of paying the lump sum amount at once,
          instead pay with easy every month with the EMI facility. With
          simplified car loans, buying your dream car is within your reach
          irrespective you are self-employed or a salaried person. Car loan can
          be availed by any of the following
        </div>
        <li className="calculator__container__para">
          Self-employed or Salaried Individuals
        </li>
        <li className="calculator__container__para">Partnership firms.</li>
        <li className="calculator__container__para">HUFs and Trus</li>

        <div className="calculator__container__heading">
          What is Car Loan EMI?
        </div>
        <div className="calculator__container__para">
          EMI stand for “Equated Monthly Installment” towards the Car Loan taken
          to purchase the car. As suggested by the name it means it is an
          installment for the entire tenure of the car loan which is paid
          equally every month by the car owner to repay the amount of the loan
          along with interest for the period of the loan. EMI consist of
          principal amount and interest amount on the car loan. It is paid by
          the borrower of the car loan/ owner of the car loan to the lender/bank
          who has provided the loan for the purchase of the car. So, before
          applying for a car loan, you must make it a point to calculate and
          check how much would be your car loan EMI every month. Car Loan EMIs
          are computed on a reducing balance method which works in favour of the
          borrower of the car loan. Initially you pay toward the interest of the
          loan, but later you pay towards your principal amount of car loan. EMI
          payment is a simplified method of payment of the car loan, and the Car
          loan EMI calculator makes the calculation of car loan makes it even
          simpler and easier.
        </div>
        <div className="calculator__container__heading">
          3 most important components of Car Loan EMI:
        </div>
        <div className="calculator__container__para">
          <span>Principal</span> – Principal is the amount of loan that the
          bank/lender offers to the borrower for a fixed period of time. Most of
          the bank provide 90% of the amount of the car as loan to ensure easy
          payment for the borrower through EMIs.
        </div>
        <div className="calculator__container__para">
          <span>Tenure </span> – Principal is the amount of loan that the
          bank/lender offers to the borrower for a fixed period of time. Most of
          the bank provide 90% of the amount of the car as loan to ensure easy
          payment for the borrower through EMIs.
        </div>
        <div className="calculator__container__para">
          <span>Interest </span> – Principal is the amount of loan that the
          bank/lender offers to the borrower for a fixed period of time. Most of
          the bank provide 90% of the amount of the car as loan to ensure easy
          payment for the borrower through EMIs.
        </div>
        <div className="calculator__container__heading">
          What is Car Loan EMI?
        </div>
        <div className="calculator__container__para">
          EMI stand for “Equated Monthly Installment” towards the Car Loan taken
          to purchase the car. As suggested by the name it means it is an
          installment for the entire tenure of the car loan which is paid
          equally every month by the car owner to repay the amount of the loan
          along with interest for the period of the loan. EMI consist of
          principal amount and interest amount on the car loan. It is paid by
          the borrower of the car loan/ owner of the car loan to the lender/bank
          who has provided the loan for the purchase of the car. So, before
          applying for a car loan, you must make it a point to calculate and
          check how much would be your car loan EMI every month. Car Loan EMIs
          are computed on a reducing balance method which works in favour of the
          borrower of the car loan. Initially you pay toward the interest of the
          loan, but later you pay towards your principal amount of car loan. EMI
          payment is a simplified method of payment of the car loan, and the Car
          loan EMI calculator makes the calculation of car loan makes it even
          simpler and easier.
        </div>
      </div>
    </>
  );
}
