import React from "react";
import contactPic from "../assets/contactPic.svg";
import PopupRadioButton from "../components/PopupRadioButton";
import RangeSlider from "../components/RangeSlider";
import Toggle from "react-toggle";

export default function SIPCalculator() {
  const listOfEntries = [
    {
      name: "I Know My Goal",
      default: true,
    },
    {
      name: "I Want to Invest",
      default: false,
    },
  ];
  return (
    <>
      <div className="calculator__container">
        <div className="calculator__container__left">
          <div className="calculator__container__left__heading">
            SIP Calculator
          </div>
          <div className="calculator__container__left__para">
            SIP stands for systematic Investment Plan, which is a systematic way
            of investing a fixed amount in a predetermined scheme of mutual fund
            at a fixed interval. SIP is a attern/style of investment not a
            scheme/fund or a stock. It is a method to invest periodically in a
            scheme of your choice
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
          <div className="sip__calculator__content__card">
            <div className="sip__calculator__content__card__left">
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
                title="I need Rs."
                value="26200"
                minRange="5 Lac"
                maxRange="5 Cr"
              />
              <RangeSlider
                title="No. of years"
                value="10.5%"
                minRange="7%"
                maxRange="10.5%"
              />
              <RangeSlider
                title="Expected of Return"
                value="3"
                minRange="1"
                maxRange="8"
              />
            </div>
            <div className="sip__calculator__content__card__right">
              <div className="sip__calculator__content__card__right__banner">
                Monthly SIP Amount $505
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="calculator__container__content">
        <div className="calculator__container__heading">What is a SIP?</div>
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
          What is SIP Calculator?
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
          What is SIP Calculator?
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
          3 most important components of SIP:
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
          What is SIP Calculator?
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
