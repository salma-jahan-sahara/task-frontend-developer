import React from "react";
import "./UnderReview.css";
import "../Incomplete/Incomplete.css";
import CardComponent from "../Card/CardComponent.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
const UnderReview = () => {
  return (
    <div className="incomplete">
      <div className="incomplete__card scrollable-card">
        <p className="title__review">Under Review</p>
        <span className="number">0</span>
      </div>
      <div className="cards scrollable-card">
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
      </div>
    </div>
  );
};

export default UnderReview;
