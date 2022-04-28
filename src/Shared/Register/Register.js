import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import './Register.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Register = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data, e) => {
        fetch('http://localhost:5000/register', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                toast("Registation Successfull.")
                e.target.reset();
            })
    }


    return (
        <form id='register-style' onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column w-50 mx-auto mt-3">
            <h1 className='mb-4'>Register as a Volunteer</h1>
            <input placeholder='Full Name' {...register("fullName", { required: true })} />
            <input placeholder='Username or Email' {...register("email", { required: true })} />
            <input placeholder='Date' type="date" {...register("date", { required: true })} />
            <input placeholder='Desicription' {...register("Desicription", { required: true })} />
            <input placeholder='Organize books at the library' {...register("organize", { required: true })} />
            <input className='submit-btn mt-3 btn btn-primary p-3' type="submit" value="Register" />
            <ToastContainer />
        </form>
    );
};

export default Register;