import React from "react";
import "./style.css";

const Button = ({ children, onClick, danger, disabled }) => {
  return (
    <button
      className={`${danger ? "danger-button" : "default"}`}
      onClick={onClick}
      disabled={disabled}
    >
      <p>{children}</p>
    </button>
  );
};

export default Button;
