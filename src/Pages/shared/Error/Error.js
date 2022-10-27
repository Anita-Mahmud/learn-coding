import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='bg-black w-screen h-full py-20'>
            <img src='images/error.png' className='w-full h-96 '></img>
            {/* <button className="btn btn-xs btn-secondary sm:btn-sm md:btn-md lg:btn-lg w-36 ml-20 md:w-96 md:ml-96 my-16"> */}
            <button className="btn btn-block btn-secondary w-4/5 ml-24 ">
                <Link to='/'>Back to Home</Link>
            </button>
        </div>
    );
};

export default Error;