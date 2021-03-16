import React, { useState } from "react";
import "./style.css";

const HomeInsuranceForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [homeChecked, setHomeChecked] = useState(true);
  const [autoChecked, setAutoChecked] = useState(false);
  const [page, setPage] = useState(1);

  const handleNextPage = () => {
    console.log("home", homeChecked);
    console.log("auto", autoChecked);
  };

  return (
    <>
      <h1 className="form-heading">Home Insurance Form</h1>
      <form className="insurance-form">
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
            {/* <label htmlFor="gender">Select Gender</label>
          <select
            name="gender"
            onChange={(e) => setGender(e.target.value)}
            value={gender}
          >
            <option value="---">---</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select> */}
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
            <fieldset className="insurance-form__fieldset">
              <legend className="insurance-form__legend">
                What Services Are You Interested In?
              </legend>
              <div className="insurance-form__legend-option">
                <label htmlFor="homeInsurance" className="fieldset__label">
                  Home
                </label>
                <input
                  type="checkbox"
                  name="homeInsurance"
                  checked={homeChecked}
                  onChange={(e) => setHomeChecked(e.target.checked)}
                />
              </div>
              <div className="insurance-form__legend-option">
                <label htmlFor="autoInsurance" className="fieldset__label">
                  Auto
                </label>
                <input
                  type="checkbox"
                  name="autoInsurance"
                  checked={autoChecked}
                  onChange={(e) => setAutoChecked(e.target.checked)}
                />
              </div>
            </fieldset>
          </>
        )}
      </form>
      <button
        className="insurance-form__page-button"
        type="button"
        onClick={handleNextPage}
      >
        Next
      </button>
    </>
  );
};

export default HomeInsuranceForm;
