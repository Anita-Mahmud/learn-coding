import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

import Sidebar from '../shared/Sidebar/Sidebar';
const Courses = () => {
    const all_courses = useLoaderData();
    return (
      <div>
      <div class="grid grid-cols-1 md:grid-cols-4 gap-4 px-20 py-4">
        {/* sidebar */}
            <div>
                <Sidebar></Sidebar>
            </div>
            {/* courses */}
             <div className='col-span-3'>
             <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-10 '>
           {all_courses.map(courses =>
            <div className="card  bg-base-100 shadow-2xl shadow-blue-500/50 hover:shadow-lg hover:shadow-cyan-500/50">
  <figure><img src={courses.image} alt="Shoes" className="w-full h-52" / ></figure>
  <div className="card-body">
    <h2 className="card-title">{courses.name}</h2>
    <p>
    {
                        courses.details.length > 150 ?
                            <>{courses.details.slice(0, 150) + '...'} 
                             <div className="card-actions justify-end mt-4">
      <button className="btn btn-primary"><Link to={`/course/${courses.id}`}>Read More</Link></button>
    </div>
                             </>
                            :
                            courses.details
                    }
        </p>
   
  </div>
</div>)}
        </div>
             </div>
            
            
            </div> 
        
      </div>
    );
};

export default Courses;