import React from "react";
import "./Incomplete.css";
import CardComponent from "../Card/CardComponent.jsx"; 
import "bootstrap/dist/css/bootstrap.min.css";
const Incomplete = () => {
    return (
      <div className="incomplete">
        <div className="incomplete__card scrollable-card">
          <span className="half__circle"></span>
          <p className="title">Incomplete</p>
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

export default Incomplete;
