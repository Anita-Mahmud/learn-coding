import { PDFDownloadLink } from '@react-pdf/renderer';
import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Pdf from '../PDF/Pdf';
import Nav from '../shared/Header/Nav';
import { ArrowDownCircleIcon } from '@heroicons/react/24/solid'
const Course = () => {
  
    const course = useLoaderData();
    const {id,name,image,details} = course;
   
    return (
        <div className=''>
           <Nav></Nav>
          <div className='mx-40'>
         <div className='lg:flex items-center justify-between'>
         <h1 className='text-6xl text-center my-10 font-bold'>Welcome To {name}</h1>
        {/* pdf download */}
      <button className="btn btn-primary justify-end mb-4" >
      <PDFDownloadLink document={<Pdf details = {course}/>} fileName="FILE">
      <div className='flex items-center'><ArrowDownCircleIcon className='w-8' />download</div>
        </PDFDownloadLink>
        </button>
  
         </div>
          <div className="card bg-base-100 shadow-xl w-96 my-20 -mx-24 md:mx-auto md:w-full shadow-blue-500/50  ">
  <figure><img src={image} alt="Shoes" 
  className="w-screen h-96"/></figure>
  <div className="card-body">
    <h2 className="card-title text-5xl font-semibold mb-4">{name}</h2>
    <p>{details}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">
      <Link to={`/course/premium/${id}`}>
        Get Premium Access</Link>
        </button>
    </div>
  </div>
</div>
          </div>
        </div>
    );
};

export default Course;