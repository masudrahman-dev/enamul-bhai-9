import React, { useEffect, useState } from 'react';
import Jobs from '../../components/Jobs/Jobs';

const AppliedJobs = () => {

    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('features.json')
            .then((res) => res.json())
            .then((data) => setData(data));
            
            
    }, []);

    return (
        <div>
            <div className='applied-jobs'>
                <h3 className='text-black text-center font-semibold text-2xl mt-3'>Applied Jobs</h3>
            </div>
            <div className="container mx-auto mt-20">

                <div className="grid border-sky-400 border-2">
                    {data?.map((item) => (

                        <Jobs key={item.logo} item={item}></Jobs>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AppliedJobs;