import React from "react";
import "./Doing.css";
import "../Incomplete/Incomplete.css";
import CardComponent from "../Card/CardComponent.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

const Doing = () => {
  return (
    <div className="incomplete">
      <div className="incomplete__card scrollable-card">
        <span className="half__circle-doing"></span>
        <p className="title__doing">Doing</p>
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

export default Doing;
