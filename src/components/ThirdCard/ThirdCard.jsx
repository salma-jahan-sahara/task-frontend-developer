import React from 'react'
import "./ThirdCard.css";
import { FaRegComments, FaCalendarDays } from "react-icons/fa6";
import client from "../../assets/client_two.jpg";
import women from "../../assets/women.jpg";
import ModalAttach from '../Modal/ModalAttach';

const ThirdCard = () => {
  return (
    <div className="third__row">
      <img src={client} alt="Image" />
      <img src={women} alt="Image" />
      <span className="light__bg">12+</span>
      <span>
        <span>
          <FaRegComments />
        </span>
        <span className="space">15</span>
      </span>
      <span className='flex'>
        <ModalAttach />
        <span className="space">25</span>
      </span>
      <span>
        <span>
          <FaCalendarDays />
        </span>
        <span className="space"> 30-12-2022</span>
      </span>
    </div>
  );
}

export default ThirdCard
