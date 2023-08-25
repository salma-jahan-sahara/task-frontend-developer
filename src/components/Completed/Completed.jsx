import React from 'react'
import "../Incomplete/Incomplete.css";
import "../UnderReview/UnderReview.css"
import CardComponent from "../Card/CardComponent.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
const Completed = () => {
  return (
    <div>
      <div className="incomplete">
        <div className="incomplete__card scrollable-card">
          <p className="title__review">Completed</p>
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
    </div>
  );
}

export default Completed
