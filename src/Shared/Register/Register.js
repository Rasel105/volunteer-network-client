import React from 'react';
import { useForm } from "react-hook-form";
import './Register.css'

const Register = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column w-50 mx-auto">
            <h1 className='mb-4'>Register as a Volunteer</h1>
            <input placeholder='Full Name' {...register("FullName", { required: true })} />
            <input placeholder='Username or Email' {...register("Username", { required: true })} />
            <input placeholder='Date' type="number" {...register("Date", { required: true })} />
            <input placeholder='Desicription' {...register("Desicription", { required: true })} />
            <input placeholder='Organize books at the library' {...register("Organize", { required: true })} />
            <input className='submit-btn mt-3 btn btn-primary p-3' type="submit" value="Register"/>
        </form>
    );
};

export default Register;