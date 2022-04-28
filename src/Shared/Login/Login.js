import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-bootstrap';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const navigate = useNavigate();
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    console.log(user)
    if(user){
        navigate('/');
        toast("Log in successful")
    }

    const handleLogIn = () => {
        signInWithGoogle();
    }
 
    return (
        <div className='w-50 d-flex flex-column mx-auto border p-5 m-5'>
            <h3 className='text-center mb-4 p-3'>Login With</h3>
            <button onClick={handleLogIn} className='d-flex justify-content-evenly align-items-center border p-3 login-btn'>
                <img style={{ width: '50px' }} src="https://w7.pngwing.com/pngs/869/485/png-transparent-google-logo-computer-icons-google-text-logo-google-logo.png" alt="" />
                <p className='m-1 text-center'>Continue with Google</p>
            </button>
            <p className='link-style mt-2'>Don't have account? <Link to={"/register  "}>
                Create an account
            </Link></p>
            <ToastContainer/>
        </div>
    );
};

export default Login;