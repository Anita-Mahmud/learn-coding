import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Nav from '../shared/Header/Nav';

const Check = () => {
    const premium = useLoaderData();
    return (
        <div>
            <Nav></Nav>
           <h1 className='text-center text-5xl text-semibold p-10'>Thank You for puchasing {premium.name}</h1>
        </div>
    );
};

export default Check;