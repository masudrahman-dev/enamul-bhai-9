import React from 'react';
import './ServiceDetails.css';

const ServiceDetails = () => {
    return (
        <div className=''>
            <div className='service-details'>
                <h3 className='text-black text-center font-semibold text-2xl mt-3'>Job Details</h3>
            </div>
            <div className='flex flex-row justify-between mt-5'>
                <div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum, amet nobis. Dolor deleniti dolores ex sunt, doloremque iste vel blanditiis eaque beatae laborum reprehenderit perspiciatis pariatur optio iure nihil ab cupiditate amet. Voluptate, dignissimos distinctio provident nesciunt necessitatibus ab harum, soluta iure vel commodi aliquid atque itaque, alias dolor quae?</p>
                </div>
                <div className='bg-gray-50 w-3/4 p-5'>
                    <h3 className='font-semibold'>Details</h3>
                    <h4>Salary :</h4>
                    <h5>Job Title :</h5>
                    <p className='font-semibold'>Contact Information</p>
                    <p>Phone:</p>
                    <p>Email:</p>
                    <p>Address:</p>
                    <button className='btn btn-primary mt-5 w-full'>Apply Now</button>

                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;



/*

.job-details {
    background-image: url('path/to/your/image.jpg');
    background-size: cover; /* Adjust this property as needed */
   // background-position: center; /* Adjust this property as needed */

