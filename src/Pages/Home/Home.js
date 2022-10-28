import React from 'react';

const Home = () => {
    return (
        <div className="bg-cover bg-center bg-scroll" style={{backgroundImage: `url('banner.jpg')`,width:"100%"}}>
         
          <div className='p-40'>
            <h1 className='text-6xl text-center font-bold'>Wanna Be A Pro in Programming</h1>
            <p className='text-3xl text-center font-semibold mt-10'>Then Congrats!!</p>
            <p className='text-3xl text-center font-semibold mt-10'>You are in the right place..You give our 100% to ensure your learning.</p>
          </div>
        </div>
    );
};

export default Home;