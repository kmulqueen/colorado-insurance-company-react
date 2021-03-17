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
