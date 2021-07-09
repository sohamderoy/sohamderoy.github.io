import React from "react";
import "./Button.css";

const Button = ({ path, buttonText, buttonType, disabled, onClick }) => {
  return (
    <div className="button-wrapper">
      <a href={path} target="_blank" download rel="noreferrer nofollow">
        <button
          onclick={onClick}
          disabled={disabled}
          className={`button ${buttonType} ${
            disabled === true ? "button-disabled" : ""
          }`}
          type="button"
        >
          {buttonText}
        </button>
      </a>
    </div>
  );
};

export default Button;
