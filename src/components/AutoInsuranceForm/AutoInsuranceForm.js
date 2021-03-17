import React, { useState } from "react";
import DriverFormItem from "../DriverFormItem";
import VehicleFormItem from "../VehicleFormItem";
import sprite from "../../icons/sprite.svg";
import "./style.css";

const AutoInsuranceForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [autoChecked, setAutoChecked] = useState(true);
  const [homeChecked, setHomeChecked] = useState(false);
  const [page, setPage] = useState(1);
  const [drivers, setDrivers] = useState([{}]);
  const [vehicles, setVehicles] = useState([{}]);
  const [currentlyInsuredOption, setCurrentlyInsuredOption] = useState("");
  const [bodilyInjury, setBodilyInjury] = useState("");
  const [propertyDamage, setPropertyDamage] = useState("");
  const [medicalPayments, setMedicalPayments] = useState("");
  const [accidentsChecked, setAccidentsChecked] = useState(false);
  const [violationsChecked, setViolationsChecked] = useState(false);
  const [claimsChecked, setClaimsChecked] = useState(false);

  // Handle Pages
  const handleNextPage = () => {
    const nextPage = page + 1;
    setPage(nextPage);
  };
  const handlePrevPage = () => {
    if (page <= 1) {
      return;
    }
    const prevPage = page - 1;
    setPage(prevPage);
  };

  // Handle Add Driver/Vehicle Form Items
  const handleAddDriver = () => {
    if (drivers.length >= 6) {
      return;
    }
    setDrivers([...drivers, {}]);
  };
  const handleAddVehicle = () => {
    if (vehicles.length >= 6) {
      return;
    }
    setVehicles([...vehicles, {}]);
  };

  // Handle Remove Driver/Vehicle Form Items
  const handleRemoveDriver = (i) => {
    if (drivers.length <= 1) {
      return;
    }
    const driversCopy = [...drivers];
    driversCopy.splice(i, 1);
    setDrivers(driversCopy);
  };
  const handleRemoveVehicle = (i) => {
    if (vehicles.length <= 1) {
      return;
    }
    const vehiclesCopy = [...vehicles];
    vehiclesCopy.splice(i, 1);
    setVehicles(vehiclesCopy);
  };

  // Handle Input Changes
  const handleDriverInputChange = (e, i) => {
    const driversCopy = [...drivers];
    const driverToUpdate = driversCopy[i];
    driverToUpdate[e.target.name] = e.target.value;
    setDrivers([...driversCopy]);
  };
  const handleVehicleInputChange = (e, i) => {
    const vehiclesCopy = [...vehicles];
    const vehicleToUpdate = vehiclesCopy[i];
    vehicleToUpdate[e.target.name] = e.target.value;
    setVehicles([...vehiclesCopy]);
  };
  const handleCurrentCoverageChange = (e) => {
    setCurrentlyInsuredOption(e.target.value);
  };
  const handleBodilyInjuryChange = (e) => {
    setBodilyInjury(e.target.value);
  };
  const handlePropertyDamageChange = (e) => {
    setPropertyDamage(e.target.value);
  };
  const handleMedicalPaymentsChange = (e) => {
    setMedicalPayments(e.target.value);
  };
  const handleAccidentsChange = (e) => {
    setAccidentsChecked(!accidentsChecked);
  };
  const handleViolationsChange = (e) => {
    setViolationsChecked(!violationsChecked);
  };
  const handleClaimsChange = (e) => {
    setClaimsChecked(!claimsChecked);
  };

  return (
    <>
      <h1 className="form-heading">Auto Insurance Form</h1>
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

            <label htmlFor="address">Address</label>
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <label htmlFor="city">City</label>
            <input
              type="text"
              name="city"
              placeholder="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <label htmlFor="state">State</label>
            <input
              type="text"
              name="state"
              placeholder="State"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
            <label htmlFor="zip">Zip Code</label>
            <input
              type="text"
              name="zip"
              placeholder="Zip code"
              value={zip}
              onChange={(e) => setZip(e.target.value)}
            />
            <fieldset className="insurance-form__fieldset">
              <legend className="insurance-form__legend">
                What Services Are You Interested In?
              </legend>
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
            </fieldset>
          </>
        )}
        {page === 2 && (
          <>
            <h2 className="form-sub-heading">Drivers</h2>
            {drivers.map((driver, i) => (
              <DriverFormItem
                key={i}
                removeDriver={handleRemoveDriver}
                onChange={handleDriverInputChange}
                i={i}
                firstName={driver.firstName}
                lastName={driver.lastName}
                driverLicense={driver.driverLicense}
                gender={driver.gender}
                dob={driver.dob}
              />
            ))}
            <button
              type="button"
              className="add-driver-button"
              onClick={handleAddDriver}
            >
              <svg className="icon icon--add">
                <use href={`${sprite}#icon-add`} />
              </svg>
              Add New Driver
            </button>
            <br />
            <h2 className="form-sub-heading">Vehicles</h2>
            {vehicles.map((vehicle, i) => (
              <VehicleFormItem
                key={i}
                removeVehicle={handleRemoveVehicle}
                onChange={handleVehicleInputChange}
                i={i}
                firstName={vehicle.firstName}
                lastName={vehicle.lastName}
                year={vehicle.year}
                make={vehicle.make}
                model={vehicle.model}
                vin={vehicle.vin}
                ownership={vehicle.ownership}
                type={vehicle.type}
                vehicleUse={vehicle.vehicleUse}
              />
            ))}
            <button
              type="button"
              className="add-vehicle-button"
              onClick={handleAddVehicle}
            >
              <svg className="icon icon--add">
                <use href={`${sprite}#icon-add`} />
              </svg>
              Add New Vehicle
            </button>
            <h2 className="form-sub-heading">Current Coverage</h2>
            <fieldset className="insurance-form__fieldset">
              <legend className="insurance-form__legend">
                Are You Currently Insured?
              </legend>
              <div className="insurance-form__legend-option">
                <label htmlFor="currentCoverage" className="fieldset__label">
                  <input
                    type="radio"
                    name="currentCoverage"
                    className="insurance-form__radio-input"
                    onChange={(e) => handleCurrentCoverageChange(e)}
                    checked={currentlyInsuredOption === "Yes"}
                    value="Yes"
                  />
                  Yes
                </label>
              </div>
              <div className="insurance-form__legend-option">
                <label htmlFor="currentCoverage" className="fieldset__label">
                  <input
                    type="radio"
                    name="currentCoverage"
                    className="insurance-form__radio-input"
                    onChange={(e) => handleCurrentCoverageChange(e)}
                    checked={currentlyInsuredOption === "No"}
                    value="No"
                  />
                  No
                </label>
              </div>
            </fieldset>
            <label htmlFor="bodilyInjury">Bodily Injury</label>
            <select
              name="bodilyInjury"
              onChange={(e) => handleBodilyInjuryChange(e)}
              value={bodilyInjury}
            >
              <option value="---">---</option>
              <option value="50/100">50/100</option>
              <option value="100/100">100/100</option>
              <option value="100/300">100/300</option>
              <option value="250/500">250/500</option>
              <option value="300/300">300/300</option>
              <option value="500/500">500/500</option>
              <option value="Other">Other</option>
            </select>
            <label htmlFor="propertyDamage">Property Damage</label>
            <select
              name="propertyDamage"
              onChange={(e) => handlePropertyDamageChange(e)}
              value={propertyDamage}
            >
              <option value="---">---</option>
              <option value="State Minimum">State Minimum</option>
              <option value="15,000">15,000</option>
              <option value="25,000">25,000</option>
              <option value="50,000">50,000</option>
              <option value="100,000">100,000</option>
              <option value="250,000">250,000</option>
              <option value="500,000">500,000</option>
            </select>
            <label htmlFor="medicalPayments">Medical Payments</label>
            <select
              name="medicalPayments"
              onChange={(e) => handleMedicalPaymentsChange(e)}
              value={medicalPayments}
            >
              <option value="---">---</option>
              <option value="None">None</option>
              <option value="500">500</option>
              <option value="1,000">10,00</option>
              <option value="2,000">2,000</option>
              <option value="2,500">2,500</option>
              <option value="5,000">5,000</option>
              <option value="10,000">10,000</option>
              <option value="15,000">15,000</option>
              <option value="25,000">25,000</option>
              <option value="50,000">50,000</option>
              <option value="100,000">100,000</option>
            </select>
            <fieldset className="insurance-form__fieldset">
              <legend className="insurance-form__legend">Incidents</legend>
              <div className="insurance-form__legend-option">
                <label htmlFor="accidents" className="fieldset__label">
                  Accidents
                </label>
                <input
                  type="checkbox"
                  name="accidents"
                  checked={accidentsChecked}
                  onChange={(e) => setAccidentsChecked(e.target.checked)}
                />
              </div>
              <div className="insurance-form__legend-option">
                <label htmlFor="violations" className="fieldset__label">
                  Violations
                </label>
                <input
                  type="checkbox"
                  name="violations"
                  checked={violationsChecked}
                  onChange={(e) => setViolationsChecked(e.target.checked)}
                />
              </div>
              <div className="insurance-form__legend-option">
                <label htmlFor="claims" className="fieldset__label">
                  Claims
                </label>
                <input
                  type="checkbox"
                  name="claims"
                  checked={claimsChecked}
                  onChange={(e) => setClaimsChecked(e.target.checked)}
                />
              </div>
            </fieldset>
          </>
        )}
      </form>
      {page > 1 && (
        <button
          className="insurance-form__page-button"
          type="button"
          onClick={handlePrevPage}
        >
          Back
        </button>
      )}
      {page < 3 && (
        <button
          className="insurance-form__page-button"
          type="button"
          onClick={handleNextPage}
        >
          Next
        </button>
      )}
    </>
  );
};

export default AutoInsuranceForm;
