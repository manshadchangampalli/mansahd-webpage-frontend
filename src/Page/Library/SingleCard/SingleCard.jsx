import React from 'react';
import ArrowIcon from "../../../Assets/images/navImages/Arrow.png";
import { Link } from 'react-router-dom';
import './SingleCard.scss'

function SingleCard() {
  return (
    <div className="single-card">
        <h3>
         <Link to="/library">
          <img src={ArrowIcon} alt="" />
          Back
        </Link>
        </h3>
        <div className="container">
            
        </div>
    </div>
    )
}

export default SingleCard;
