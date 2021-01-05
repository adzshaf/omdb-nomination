import React from "react";
import "./style.css";

const Button = ({ children, onClick }) => {
  return (
    <button className="default" onClick={onClick}>
      <p>{children}</p>
    </button>
  );
};

export default Button;
