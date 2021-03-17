import React from "react";
import sprite from "../../icons/sprite.svg";
import "./style.css";

const DriverFormItem = ({
  removeDriver,
  onChange,
  i,
  firstName = "",
  lastName = "",
  driverLicense = "",
  gender = "",
  dob = "",
}) => {
  const removeNewDriver = () => {
    removeDriver(i);
  };

  const handleChange = (e) => {
    onChange(e, i);
  };

  return (
    <>
      <svg
        className="driver-form-item__remove-button"
        onClick={removeNewDriver}
      >
        <use href={`${sprite}#icon-remove`} />
      </svg>
      <label htmlFor="firstName">First Name</label>
      <input
        type="text"
        name="firstName"
        placeholder="First name"
        onChange={(e) => handleChange(e)}
        value={firstName}
      />
      <label htmlFor="lastName">Last Name</label>
      <input
        type="text"
        name="lastName"
        placeholder="Last name"
        onChange={(e) => handleChange(e)}
        value={lastName}
      />
      <label htmlFor="dob">Date Of Birth</label>
      <input
        type="date"
        name="dob"
        value={dob}
        onChange={(e) => handleChange(e)}
      />
      <label htmlFor="gender">Select Gender</label>
      <select name="gender" onChange={(e) => handleChange(e)} value={gender}>
        <option value="---">---</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>
      <label htmlFor="driverLicense">Driver License #</label>
      <input
        type="text"
        name="driverLicense"
        placeholder="Driver License Number"
        onChange={(e) => handleChange(e)}
        value={driverLicense}
      />
      <hr className="driver-form-item__seperator" />
    </>
  );
};

export default DriverFormItem;
