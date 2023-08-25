import React from 'react'
import "./SecondCard.css";
import { FaClipboard, FaDatabase } from "react-icons/fa6";
const SecondCard = () => {
  return (
    <div className="second__row">
      <span>
        <FaDatabase />
      </span>
      <p className="m-0">Lorem ipsum dolor sit amet curn...</p>
      <span className="clipboard">
        <FaClipboard />
        <span className="space">1/2</span>
      </span>
    </div>
  );
}

export default SecondCard
