import React from "react";
import bannerImg from "../../../assets/All Images/P3OLGJ1 copy 1.png";
const Banner = () => {
  return (
    <div className="container mx-auto mt-20 ">
      <div className="hero  bg-base-200 ">
        <div className="  flex flex-col lg:flex-row-reverse justify-center items-center gap-7 p-7">
          <img src={bannerImg} className="max-w-sm rounded-lg shadow-2xl" />
          <div className="text-center">
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi. Provident cupiditate voluptatem et in. Quaerat
              fugiat ut assumenda excepturi exercitationem quasi. In deleniti
              eaque aut repudiandae et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
