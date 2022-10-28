import React,{ useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import Nav from '../shared/Header/Nav';
import { AuthContext } from '../../context/AuthProvider';
const Check = () => {
  const { user } = useContext(AuthContext);
    const premium = useLoaderData();
    return (
        <div>
            <Nav></Nav>
           <h1 className='text-center text-2xl md:text-5xl  pt-10'>Thank You  
           <span className=" font-semibold md:font-bold  text-pink-400 text-2xl md:text-5xl"> {user.displayName} </span> 
           for enrolling in {premium.name}</h1>
           <div className="card  shadow-xl w-96 mx-auto md:w-full shadow-blue-500/50  ">
  <figure><img src={premium.image} 
  className="w-96 py-10 px-18"/></figure>
  <div className="card-body text-2xl px-20">
    <p >{premium.details}</p>
    <p className='font-bold pt-4'>Course Duration: 3 months</p>
  </div>
</div>
        </div>
    );
};

export default Check;