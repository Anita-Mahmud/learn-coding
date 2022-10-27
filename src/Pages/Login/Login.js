import React,{ useContext } from 'react';
import { Link } from 'react-router-dom';
import { GoogleAuthProvider } from 'firebase/auth';
import { AuthContext } from '../../context/AuthProvider';

const Login = () => {
    const { providerGoogleLogin } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider()
    // google sign in
    const handleGoogleSignIn = () => {
        providerGoogleLogin(googleProvider)
            .then(result => {
                const user = result.user;
            })
            .catch(error => console.error(error))
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <div className='mt-6 '>
<button onClick={handleGoogleSignIn} class="btn btn-active btn-secondary mr-4">Google</button>
<button class="btn btn-active btn-secondary">Github</button>
</div>
    </div>
    <form className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-10">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" placeholder="password" className="input input-bordered" />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </div>
    </form>
    <div className='text-xl'>
        <p>Don't have an account??<br />Go to <Link to='/register'><span className='text-blue-500'>Register</span></Link></p>
    </div>
  </div>
</div>


        </div>
    );
};

export default Login;