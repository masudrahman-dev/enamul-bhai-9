import React from "react";
import FeaturedImg from "../../../assets/Logo/netflix-4 1.png";
const FeaturedJobsCard = () => {
  return (
    <div className=" p-7 bg-base-100 shadow-xl rounded-lg border">
      <div>
        <img src={FeaturedImg} alt="Shoes" />
      </div>
      <div className="mt-3">
        <h2 className="card-title">Senior Product Designer</h2>
        <p>Google LLC</p>
        <div className="mt-3">
          <button className="btn btn-outline btn-warning">Onsite</button>
          <button className="btn btn-outline btn-warning ml-3">
            Full Time
          </button>
        </div>
        <div className="flex gap-3 mt-3">
          <p>
            <span>🚁</span>Dhaka, Bangladesh
          </p>
          <p>
            <span>💰</span>Salary : 100K - 150K
          </p>
        </div>
        <button className="btn  btn-warning mt-3">View Details</button>
      </div>
    </div>
  );
};

export default FeaturedJobsCard;
