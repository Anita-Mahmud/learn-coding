import React,{ useContext } from 'react';
import { Link, useNavigate,useLocation } from 'react-router-dom';
import { GoogleAuthProvider,GithubAuthProvider } from 'firebase/auth';
import { AuthContext } from '../../context/AuthProvider';

const Login = () => {
    const { providerGoogleLogin,providerGitLogin ,signIn, setLoading} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const googleProvider = new GoogleAuthProvider();
    const gitProvider = new GithubAuthProvider();
    // google sign in
    const handleGoogleSignIn = () => {
        providerGoogleLogin(googleProvider)
            .then(result => {
                const user = result.user;
                navigate(from, {replace: true});
            })
            .catch(error => console.error(error))
    }
    // git signin
    const handleGitSignIn=()=>{
      providerGitLogin(gitProvider)
      .then(result => {
        const user = result.user;
        navigate(from, {replace: true});
    })
    .catch(error => console.error(error))

    }
    //email pass
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                navigate(from, {replace: true});
                form.reset();
                
                
                
            })
            .catch(error => {
                console.error(error)
               
            })
            .finally(() => {
                setLoading(false);
            })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <div className='mt-6 '>
<button onClick={handleGoogleSignIn} class="btn btn-active btn-secondary mr-4">Google</button>
<button onClick={handleGitSignIn}class="btn btn-active btn-secondary">Github</button>
</div>
    </div>
    <form onSubmit={handleSubmit} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-10">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" name="email" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary" type='submit'>Login</button>
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