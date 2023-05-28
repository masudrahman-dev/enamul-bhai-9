import React from "react";
import Banner from "./Banner/Banner";
import JobCategory from "./JobCategory/JobCategory";
import FeaturedJobs from "./FeaturedJobs/FeaturedJobs";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <JobCategory></JobCategory>
      <FeaturedJobs></FeaturedJobs>
      <div className="text-center">
        <button className="btn btn-info mt-5 ">See All Jobs</button>
      </div>
    </div>
  );
};

export default Home;


