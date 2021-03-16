import React from "react";
import sprite from "../../icons/sprite.svg";
import "./style.css";

const Message = ({ type, message }) => {
  return type === "error" ? (
    <>
      <p className={`message message--${type}`}>
        <svg className="message__icon message__icon--warning">
          <use href={`${sprite}#icon-warning`} />
        </svg>
        {message}
      </p>
    </>
  ) : (
    type === "success" && (
      <>
        <p className={`message message--${type}`}>
          <svg className="message__icon message__icon--success">
            <use href={`${sprite}#icon-checkmark`} />
          </svg>
          {message}
        </p>
      </>
    )
  );
};

export default Message;
