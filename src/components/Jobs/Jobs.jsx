import React from 'react';
import { FaBeer } from 'react-icons/fa';


const Jobs = ({ item }) => {

    const { jobTitle, companyName, companyLogo } = item;
    return (
        <div className="w-full">
            <table className="table w-full">
                <tbody className=''>

                    <tr className='bg-gray-100'>
                        <td className='mb-10'>
                            <div className="flex items-center space-x-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img className='w-25 h-25' src={companyLogo} alt="xyz" />
                                    </div>
                                </div>
                            </div>
                        </td>



                        <td className='mb-10'>
                            <h3>jobTitle: {jobTitle}</h3>
                            <span className="badge badge-ghost badge-sm">{companyName}</span>
                            <br />
                            <div>
                                <button className='btn btn-outline btn-xs'><span>Remote</span> </button>
                                <button className='btn btn-outline btn-xs ml-2'><span>Full Time</span> </button>
                            </div>
                            <div className='flex'>
                                <h3 className='flex justify-center items-center'><span className=''><FaBeer/></span> Location :</h3>
                                <h3 className='flex justify-center items-center'><span className=''><FaBeer/></span> Salary:</h3>
                                
                            </div>
                        </td>


                        {/* <td>Purple</td> */}


                        <th>
                            <button className="btn btn-primary">details</button>
                        </th>
                    </tr>

                </tbody>
            </table>
        </div>
    );
};

export default Jobs;







