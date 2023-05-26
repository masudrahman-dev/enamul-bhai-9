import React, { useEffect, useState } from "react";

import JobCategoryCard from "./JobCategoryCard";
import { useLoaderData } from "react-router-dom";
const JobCategory = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/masudrahman-dev/enamul-bhai-7-data/main/category.json"
    )
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="container mx-auto mt-20">
      <div className="text-center">
        <h1>Job Category List</h1>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5  mt-12">
        {data?.map((item) => (
          <JobCategoryCard key={item.logo} item={item}></JobCategoryCard>
        ))}
      </div>
    </div>
  );
};

export default JobCategory;
