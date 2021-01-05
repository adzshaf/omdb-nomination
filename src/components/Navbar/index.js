import React from "react";
import "./index.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <h1>The Shoppies</h1>
      <div className="input-container">
        <input placeholder="Search movie title"></input>
      </div>
    </div>
  );
};

export default Navbar;
