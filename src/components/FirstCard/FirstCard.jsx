import React from 'react'
import './FirstCard.css';
import client from "../../assets/client.jpg";
import sadik from "../../assets/sadik.jpg";
const FirstCard = () => {
  return (
    <div className="first__row center">
      <div className="client center">
        <img src={client} alt="Client Image" />
        <p className="m-0 fw-bold">Client Name</p>
      </div>
      <div className="client center">
        <img src={sadik} alt="Image" />
        <p className="m-0 fw-bold px-1">Sadik Istiak</p>
      </div>
    </div>
  );
}

export default FirstCard
