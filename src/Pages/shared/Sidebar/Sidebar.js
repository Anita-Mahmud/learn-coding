import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    
    const [categories, setCategories] = useState([]);
// fetching data
    useEffect( () =>{
        fetch('http://localhost:5000/courses')
        .then( res => res.json())
        .then(data => setCategories(data));
    }, [])
    return (
        <div className='py-8'>
          {
            categories.map(category => <p key={category.id}>
             <button className="btn btn-block btn-secondary mb-4">
                <Link to={`/category/${category.id}`}>{category.name}</Link>
                </button>
                    </p>)
                }
        </div>
    );
};

export default Sidebar;