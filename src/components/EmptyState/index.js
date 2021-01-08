import React from "react";
import Search from "../../image/search.png";
import "./style.css";

const EmptyState = () => {
  return (
    <div className="empty-state-container">
      <img src={Search} className="search-image" alt="empty-state" />
      <div>
        <h2>You haven't nominated yet!</h2>
        <p>Add your favorite movies to be nominated</p>
      </div>
    </div>
  );
};

export default EmptyState;
