import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'
const Login = () => {
    
    return (
        <div className='w-50 mx-auto border p-5 m-5'>
            <h3 className='text-center mb-4 p-3'>Login With</h3>
            <p className='d-flex justify-content-evenly align-items-center border p-3 login-btn'>
                <img style={{width: '50px'}} src="https://w7.pngwing.com/pngs/869/485/png-transparent-google-logo-computer-icons-google-text-logo-google-logo.png" alt="" />
                <p className='m-1 text-center'>Continue with Google</p>
            </p>
            
                <p className='link-style'>Don't have account? <Link to={"/register  "}>
                    Create an account
                </Link></p>
            
        </div>
    );
};

export default Login;