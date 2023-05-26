import React from "react";
import FeaturedJobsCard from "./FeaturedJobsCard";

const FeaturedJobs = () => {
  return (
    <div className="container mx-auto mt-20">
      <div className="text-center">
        <h1>Featured Jobs</h1>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5  mt-12">
        <FeaturedJobsCard></FeaturedJobsCard>
        <FeaturedJobsCard></FeaturedJobsCard>
        <FeaturedJobsCard></FeaturedJobsCard>
        <FeaturedJobsCard></FeaturedJobsCard>
      
      </div>
    </div>
  );
};

export default FeaturedJobs;
