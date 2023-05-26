import { useState } from "react";
import React from "react";
import iconComplete from "../assets/images/icon-complete.svg";

type FormProps = {
  sendName: string,
  sendNumber: number,
  sendMonth: number,
  sendYear: number
}

const Form:React.FC<FormProps> = ({ sendName, sendNumber, sendMonth, sendYear }) => {
  const [nameError, setNameError] = useState(false);
  const [numberError, setNumberError] = useState(false);
  const [monthError, setMonthError] = useState(false);
  const [yearError, setYearError] = useState(false);
  const [CVCError, setCVCError] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [nameBlank, setNameBlank] = useState(false);
  const [numberBlank, setNumberBlank] = useState(false);
  const [monthBlank, setMonthBlank] = useState(false);
  const [yearBlank, setYearBlank] = useState(false);
  const [CVCBlank, setCVCBlank] = useState(false);

  const handleName = (e: React.FormEvent<HTMLInputElement>) => {
    let input = e.currentTarget.value;

    if (/\d/.test(input) === true) {
      setNameError(true);
    } else {
      setNameBlank(false);
      setNameError(false);
      sendName(input);
    }
  };

  const handleNameBlank = (e: React.FormEvent<HTMLInputElement>) => {
    if (e.currentTarget.value === "") {
      setNameBlank(true);
    } else {
      setNameBlank(false);
    }
  };

  const handleNumber = (e: React.FormEvent<HTMLInputElement>) => {
    let input = e.currentTarget.value;

    if (/\D/.test(input) === true) {
      setNumberError(true);
      setNumberBlank(false);
    } else if (input === "") {
      setNumberBlank(true);
      setNumberError(false);
    } else {
      setNumberError(false);
      setNumberBlank(false);
      sendNumber(input);
    }
  };

  const handleNumberBlank = (e: React.FormEvent<HTMLInputElement>) => {
    if (e.currentTarget.value === "") {
      setNumberBlank(true);
    } else {
      setNumberBlank(false);
    }
  };

  const handleMonth = (e: React.FormEvent<HTMLInputElement>) => {
    let input = e.currentTarget.value;

    if (/\D/.test(input) === true || Number(input) > 12) {
      setMonthError(true);
      setMonthBlank(false);
    } else if (input === "") {
      setMonthBlank(true);
      setMonthError(false);
    } else {
      setMonthError(false);
      setMonthBlank(false);
      sendMonth(input);
    }
  };

  const handleMonthBlank = (e: React.FormEvent<HTMLInputElement>) => {
    if (e.currentTarget.value === "") {
      setMonthBlank(true);
    } else {
      setMonthBlank(false);
    }
  };

  const handleYear = (e: React.FormEvent<HTMLInputElement>) => {
    let input = e.currentTarget.value;
    

    if (/\D/.test(input) === true) {
      setYearError(true);
      setYearBlank(false);
    } else if (input === "") {
      setYearBlank(true);
      setYearError(false);
    } else {
      setYearError(false);
      setYearBlank(false);
      sendYear(input);
    }
  };

  const handleYearBlank = (e: React.FormEvent<HTMLInputElement>) => {
    if (e.currentTarget.value === "") {
      setYearBlank(true);
    } else {
      setYearBlank(false);
    }
  };

  const handleCVC = (e: React.FormEvent<HTMLInputElement>) => {
    let input = e.currentTarget.value;

    if (/\D/.test(input) === true) {
      setCVCError(true);
      setCVCBlank(false);
    } else if (input === "") {
      setCVCBlank(true);
      setCVCError(false);
    } else {
      setCVCError(false);
      setCVCBlank(false);
    }
  };

  const handleCVCBlank = (e: React.FormEvent<HTMLInputElement>) => {
    if (e.currentTarget.value === "") {
      setCVCBlank(true);
    } else {
      setCVCBlank(false);
    }
  };

  const handleSubmit = (e: any) => {

    if (
      nameError === false &&
      numberError === false &&
      monthError === false &&
      yearError === false &&
      CVCError === false &&
      nameBlank === false &&
      numberBlank === false &&
      monthBlank === false &&
      yearBlank === false &&
      CVCBlank === false
    ) {
      setSubmitted(true);
    }
  };

  if (submitted === false) {
    return (
      <>
        <div className="separator" />
        <form className="form" onSubmit={handleSubmit}>
          <label className="form__label" htmlFor="Name">
            Cardholder name
          </label>
          <input
            className={
              nameError || nameBlank
                ? "form__input form__input__error"
                : "form__input"
            }
            type="text"
            placeholder="e.g. Jane Appleseed"
            onChange={handleName}
            onBlur={handleNameBlank}
          />
          <span
            className={
              nameError || nameBlank ? "form__error" : "form__error unactive"
            }
          >
            {nameBlank ? "Can't be blank" : "Wrong format, insert a name"}
          </span>
          <label className="form__label" htmlFor="Card Number">
            Card Number
          </label>
          <input
            className={
              numberError || numberBlank
                ? "form__input form__input__error"
                : "form__input"
            }
            type="text"
            placeholder="e.g. 1234 5678 9123 0000"
            onKeyUp={handleNumber}
            maxLength={16}
            onBlur={handleNumberBlank}
          />
          <span
            className={
              numberError || numberBlank
                ? "form__error"
                : "form__error unactive"
            }
          >
            {numberBlank ? "Can't be blank" : "Wrong format, numbers only"}
          </span>
          <div className="form__flex">
            <label className="form__label" htmlFor="Expiration date">
              Exp. Date (MM/YY)
            </label>
            <label className="form__label" htmlFor="CVC">
              CVC
            </label>
          </div>
          <div className="form__flex2">
            <input
              aria-label="expiration month"
              className={
                monthError || monthBlank
                  ? "form__input form__input__date form__input__error"
                  : "form__input form__input__date"
              }
              type="text"
              placeholder="MM"
              onChange={handleMonth}
              maxLength={2}
              onBlur={handleMonthBlank}
            />
            <input
              aria-label="expiration year"
              className={
                yearError || yearBlank
                  ? "form__input form__input__date form__input__error"
                  : "form__input form__input__date"
              }
              type="text"
              placeholder="YY"
              onChange={handleYear}
              maxLength={2}
              onBlur={handleYearBlank}
            />
            <input
              className={
                CVCError || CVCBlank
                  ? "form__input form__input__CVC form__input__date form__input__error"
                  : "form__input form__input__CVC form__input__date"
              }
              type="text"
              placeholder="e.g. 123"
              maxLength={3}
              onChange={handleCVC}
              onBlur={handleCVCBlank}
            />
          </div>
          <div className="form__flex3">
            <span
              className={
                monthError || monthBlank || yearError || yearBlank
                  ? "form__error"
                  : "form__error unactive"
              }
            >
              {monthError || yearError
                ? "Insert a valid date"
                : "Can't be blank"}
            </span>
            <span
              className={
                CVCError || CVCBlank ? "form__error" : "form__error unactive"
              }
            >
              {CVCError ? "Insert a valid CVC" : "Can't be blank"}
            </span>
          </div>
          <button className="form__button" type="submit">
            Confirm
          </button>
        </form>
      </>
    );
  } else {
    return (
      <>
        <div className="separator" />
        <div className="form form__completed">
          <img className="form__image" src={iconComplete} />
          <h1>THANK YOU!</h1>
          <p>We've added your card details</p>
          <button onClick={() => window.location.reload()} className="form__button">
            Continue
          </button>
        </div>
      </>
    );
  }
}

export default Form;
