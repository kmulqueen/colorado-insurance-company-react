import React from "react";
import sprite from "../../icons/sprite.svg";
import "./style.css";

const VehicleFormItem = ({
  removeVehicle,
  onChange,
  i,
  firstName = "",
  lastName = "",
  year = "",
  make = "",
  model = "",
  vin = "",
  ownership = "",
  type = "",
  vehicleUse = "",
}) => {
  const removeNewVehicle = () => {
    removeVehicle(i);
  };

  const handleChange = (e) => {
    onChange(e, i);
  };

  return (
    <>
      <svg
        className="vehicle-form-item__remove-button"
        onClick={removeNewVehicle}
      >
        <use href={`${sprite}#icon-remove`} />
      </svg>
      <label htmlFor="firstName">Driver First Name</label>
      <input
        type="text"
        name="firstName"
        placeholder="Driver First name"
        onChange={(e) => handleChange(e)}
        value={firstName}
      />
      <label htmlFor="lastName">Driver Last Name</label>
      <input
        type="text"
        name="lastName"
        placeholder="Driver Last name"
        onChange={(e) => handleChange(e)}
        value={lastName}
      />

      <label htmlFor="year">Vehicle Year</label>
      <input
        type="text"
        name="year"
        placeholder="Vehicle Year"
        onChange={(e) => handleChange(e)}
        value={year}
      />
      <label htmlFor="make">Vehicle Make</label>
      <input
        type="text"
        name="make"
        placeholder="Vehicle Make"
        onChange={(e) => handleChange(e)}
        value={make}
      />
      <label htmlFor="model">Vehicle Model</label>
      <input
        type="text"
        name="model"
        placeholder="Vehicle Model"
        onChange={(e) => handleChange(e)}
        value={model}
      />
      <label htmlFor="vin">Vehicle VIN #</label>
      <input
        type="text"
        name="vin"
        placeholder="Vehicle VIN #"
        onChange={(e) => handleChange(e)}
        value={vin}
      />
      <label htmlFor="ownership">Ownership Status</label>
      <select
        name="ownership"
        onChange={(e) => handleChange(e)}
        value={ownership}
      >
        <option value="---">---</option>
        <option value="Own">Own</option>
        <option value="Lien">Lien</option>
        <option value="Lease">Lease</option>
      </select>
      <label htmlFor="type">Type</label>
      <select name="type" onChange={(e) => handleChange(e)} value={type}>
        <option value="---">---</option>
        <option value="Full">Full</option>
        <option value="Liability">Liability</option>
      </select>
      <label htmlFor="vehicleUse">Vehicle Use</label>
      <select
        name="vehicleUse"
        onChange={(e) => handleChange(e)}
        value={vehicleUse}
      >
        <option value="---">---</option>
        <option value="Business">Business</option>
        <option value="Pleasure">Pleasure</option>
        <option value="Farming">Farming</option>
        <option value="To/From Work">To/From Work</option>
        <option value="To/From School">To/From School</option>
      </select>
      <hr className="vehicle-form-item__seperator" />
    </>
  );
};

export default VehicleFormItem;
