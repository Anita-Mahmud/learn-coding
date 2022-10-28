import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../Pages/shared/Header/Nav';
import Sidebar from '../Pages/shared/Sidebar/Sidebar';
import banner from '../images/banner.jpg';
const Main = () => {

    return (
        <div className=''>
            <Nav></Nav>
            <img src={banner} className='w-screen h-96'></img>
            <div class="grid grid-cols-1 md:grid-cols-4 gap-4 px-20 py-4">
            <div>
                <Sidebar></Sidebar>
            </div>
            <div className='col-span-3'>
               <Outlet></Outlet>
            </div>
            
            
            </div> </div>
        
    );
};

export default Main;