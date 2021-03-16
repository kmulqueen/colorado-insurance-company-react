import React, { useState } from "react";
import emailjs from "emailjs-com";
import Message from "../Message";
import { Link } from "react-router-dom";
import "./style.css";

const LifeInsuranceForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [termLength, setTermLength] = useState("");
  const [deathBenefitAmount, setDeathBenefitAmount] = useState("");
  const [tobaccoUser, setTobaccoUser] = useState("");
  const [page, setPage] = useState(1);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  function sendEmail(e) {
    e.preventDefault();

    // Field validation
    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      phone === "" ||
      gender === "---" ||
      gender === "" ||
      address === "" ||
      city === "" ||
      state === "" ||
      zip === "" ||
      termLength === "---" ||
      termLength === "" ||
      deathBenefitAmount === "---" ||
      deathBenefitAmount === "" ||
      tobaccoUser === "---" ||
      tobaccoUser === ""
    ) {
      setMessage(null);
      setError("Please ensure all fields are filled out correctly.");
      return;
    }

    const templateParams = {
      firstName,
      lastName,
      email,
      phone,
      gender,
      address,
      city,
      state,
      zip,
      productType: "Life Insurance",
      termLength,
      deathBenefitAmount,
      tobaccoUser:
        tobaccoUser === "Yes"
          ? "Standard Tobacco Rate"
          : "Standard + Non-Tobacco",
    };
    emailjs
      .send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setError(null);
    setPage(0);
    setMessage("Thank you! We will be in contact with you shortly.");
    setSubmitSuccess(true);
  }

  const handleSubmit = (e) => {
    if (page !== 2) {
      return;
    }
    e.preventDefault();
    sendEmail(e);
  };

  const handleNextPage = () => {
    const nextPage = page + 1;
    setPage(nextPage);
  };

  const handlePrevPage = () => {
    const prevPage = page - 1;
    setPage(prevPage);
  };
  return (
    <>
      <h1 className="form-heading">Life Insurance Form</h1>
      {error && <Message type="error" message={error} />}
      <form onSubmit={handleSubmit} className="insurance-form">
        {page === 1 && (
          <>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              placeholder="First name"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              placeholder="Last name"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              placeholder="Email address"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              placeholder="Phone Number"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <label htmlFor="gender">Select Gender</label>
            <select
              name="gender"
              onChange={(e) => setGender(e.target.value)}
              value={gender}
            >
              <option value="---">---</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            <label htmlFor="address">Address</label>
            <input
              type="text"
              name="address"
              placeholder="Enter address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <label htmlFor="city">City</label>
            <input
              type="text"
              name="city"
              placeholder="Enter city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <label htmlFor="state">State</label>
            <input
              type="text"
              name="state"
              placeholder="Enter state"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
            <label htmlFor="zip">Zip Code</label>
            <input
              type="text"
              name="zip"
              placeholder="Enter zip code"
              value={zip}
              onChange={(e) => setZip(e.target.value)}
            />
          </>
        )}
        {page === 2 && (
          <>
            <label htmlFor="termLength">Term Length</label>
            <select
              name="termLength"
              onChange={(e) => setTermLength(e.target.value)}
              value={termLength}
            >
              <option value="---">---</option>
              <option value="10 Years">10 Years</option>
              <option value="20 Years">20 Years</option>
              <option value="30 Years">30 Years</option>
              <option value="Other">Other</option>
            </select>
            <label htmlFor="deathBenefitAmount">Death Benefit Amount</label>
            <select
              name="deathBenefitAmount"
              onChange={(e) => setDeathBenefitAmount(e.target.value)}
              value={deathBenefitAmount}
            >
              <option value="---">---</option>
              <option value="$500,000">$500,000</option>
              <option value="$750,000">$750,000</option>
              <option value="$1,000,000">$1,000,000</option>
              <option value="Other">Other</option>
            </select>
            <label htmlFor="tobacco">Tobacco User?</label>
            <select
              name="tobacco"
              onChange={(e) => setTobaccoUser(e.target.value)}
              value={tobaccoUser}
            >
              <option value="---">---</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
            <button type="submit" className="insurance-form__submit">
              Submit
            </button>
          </>
        )}
        {page === 1 ? (
          <button
            type="button"
            className="insurance-form__page-button"
            onClick={handleNextPage}
          >
            Next
          </button>
        ) : (
          page === 2 && (
            <button
              type="button"
              className="insurance-form__page-button"
              onClick={handlePrevPage}
            >
              Go Back
            </button>
          )
        )}
      </form>
      {submitSuccess && message && (
        <>
          <Message type="success" message={message} />
          <Link to="/" className="insurance-form__home-button">
            Go Home
          </Link>
        </>
      )}
    </>
  );
};

export default LifeInsuranceForm;
