import React from "react";
import jobImg from "../../../assets/Icons/accounts 1.png";
const JobCategoryCard = ({item}) => {
  // console.log('item :>> ', item);
  return (
    <div className=" p-7 bg-base-100 shadow-xl rounded-lg border">
      <div >
        <img src={jobImg} alt="Shoes" />
      </div>
      <div className="mt-3">
        <h2 className="card-title">{item?.name}</h2>
        <p>{item?.jobsAvailable} Jobs Available</p>
      </div>
    </div>
  );
};

export default JobCategoryCard;
