import React from "react";
import "./CardComponent.css";
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
