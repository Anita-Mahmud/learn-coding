import React,{ useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';
import logo from '../../../images/logo.jpg';

const Nav = () => {
 
  const { user, logOut } = useContext(AuthContext);
  console.log(user)
 
  const handleLogOut = () => {
    logOut()
        .then(() => { })
        .catch(error => console.error(error))
}
    return (

        <div>
          <div className="navbar  px-20 py-10">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link to='/courses'>Courses</Link></li>
        <li tabIndex={0}>
          <Link to='/faq' className="justify-between">
            FAQ
          </Link>
        </li>
        <li><Link to='/blog'>Blog</Link></li>
      
      </ul>
    </div>
    <Link to='/' className="btn btn-ghost  normal-case text-xl">
        <img src={logo} className='w-16 lg:w-20 mr-10'></img><span className='md:visible invisible'>Learn Code</span></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
      <li><Link to='/courses'>Courses</Link></li>
      <li tabIndex={0}>
      <Link to='/faq'>FAQ</Link>
      </li>
      <li><Link to='/blog'>Blog</Link></li>
     
        
    </ul>

  </div>
  <div className="navbar-end">
   {user?.uid?
   <>
   <img src={user?.photoURL} className="rounded-full w-20 mr-2"alt="profile" title={user?.displayName}></img>
   <button className="btn btn-active btn-ghost" onClick={handleLogOut}>
   Logout
   </button>
   </>
   :
   <Link to='/login' className="btn">Login</Link>
  }
  </div>
</div>
        </div>
    );
};

export default Nav;