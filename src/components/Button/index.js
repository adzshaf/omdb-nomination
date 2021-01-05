import React from "react";
import "./style.css";

const Button = ({ children, onClick, danger }) => {
  return (
    <button
      className={`${danger ? "danger-button" : "default"}`}
      onClick={onClick}
    >
      <p>{children}</p>
    </button>
  );
};

export default Button;
