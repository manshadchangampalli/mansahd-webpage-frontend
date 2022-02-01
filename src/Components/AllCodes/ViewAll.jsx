import React, { useEffect } from "react";
import Codes from "../../Page/Library/Cards/Card";
import "./ViewAll.scss";
import ArrowIcon from "../../Assets/images/navImages/Arrow.png";
import { Link } from "react-router-dom";

function ViewAll() {
  useEffect(() => {
    window.scrollTo(0,0)
  },[]);
  return (
    <div className="view-all-items">
      <Link to="/library">
        <h3>
          <img src={ArrowIcon} alt="" />
          Back
        </h3>
      </Link>
      <div className="card-container">
        <Codes />
        <Codes />
        <Codes />
        <Codes />
        <Codes />
        <Codes />
        <Codes />
        <Codes />
      </div>
    </div>
  );
}

export default ViewAll;
