import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../Pages/shared/Header/Nav';

const Main = () => {

    return (
        <div className=''>
            <Nav></Nav>
            <Outlet></Outlet>
            </div>
        
    );
};

export default Main;