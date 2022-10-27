import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const Register = () => {
    const { createUser ,updateUserProfile} =useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const displayName
        = form.name.value;
        const photoURL = form.url.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                navigate(from, {replace: true});
                form.reset();
                handleUpdateUserProfile(displayName, photoURL);
            })
            .catch(e => {
                console.error(e);
            });
    }
    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }

        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error));
    }
    return (
        <div>
        <div className="hero min-h-screen bg-base-200">
<div className="hero-content flex-col lg:flex-row-reverse">
<div className="text-center lg:text-left">
  <h1 className="text-5xl font-bold">Register now!</h1>
 
</div>
<form onSubmit={handleSubmit} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-10">
  <div className="card-body">
  <div className="form-control">
      <label className="label">
        <span className="label-text">Full Name</span>
      </label>
      <input type="text" name="name" placeholder="full name" className="input input-bordered" />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Photo URL</span>
      </label>
      <input type="url" name="url" placeholder="text" className="input input-bordered" />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Email</span>
      </label>
      <input type="email" name="email"placeholder="email" className="input input-bordered" />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Password</span>
      </label>
      <input type="password" name="password" placeholder="password" className="input input-bordered" />
    </div>
    <div className="form-control mt-6">
      <button className="btn btn-primary" type="submit">Register</button>
    </div>
  </div>
</form>
<div className='text-xl'>
    <p>Already have an account??<br />Go to <Link to='/login'><span className='text-blue-500'>Login</span></Link></p>
</div>
</div>
</div>
    </div>
    );
};

export default Register;