import React from "react";
import "./style.css";

const Button = ({ children }) => {
  return (
    <button className="default">
      <p>{children}</p>
    </button>
  );
};

export default Button;
