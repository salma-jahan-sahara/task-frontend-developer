import React from "react";
import "./CardComponent.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Card } from "react-bootstrap";
// import { FaClipboard, FaDatabase } from "react-icons/fa6";
import FirstCard from "../FirstCard/FirstCard";
import SecondCard from "../SecondCard/SecondCard";
import ThirdCard from "../ThirdCard/ThirdCard";
const CardComponent = () => {
  return (
    <div className="card font">
      <FirstCard />
      <SecondCard />
      <ThirdCard />
    </div>
  );
};
export default CardComponent;
