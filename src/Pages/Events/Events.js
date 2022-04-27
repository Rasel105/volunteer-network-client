import React from 'react';
import user from '../../logos/users-alt 1.png'
import logo from '../../logos/plus 1.png'
import './Events.css'
import { useForm } from 'react-hook-form';

const Events = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div>
            <div class="container">
                <div class="row">
                    <div class="col-sm-4">
                        <div className='d-flex justify-content-center align-items-center'>
                            <img style={{ width: "30px" }} className="me-2" src={user} alt="" />
                            <p className='mt-2 event-text'>Volunteer register list</p>
                        </div>
                        <div className='d-flex justify-content-center align-items-center'>
                            <img src={logo} style={{ width: "30px" }} className="me-2" alt="" />
                            <p className='mt-2 text-primary'>Add Events</p>
                        </div>
                    </div>
                    <div class="col-sm-8 bg-color" >
                        <div >
                            <form onSubmit={handleSubmit(onSubmit)} >
                                <div className="row">
                                    <div className='col-md-6"'>
                                        <div>
                                            <p htmlFor="event">Event Title</p>
                                            <input placeholder='Event Title' {...register("event-title", { required: true })} />
                                        </div>
                                        <div>
                                            <p htmlFor="event">Description</p>
                                            <input placeholder='Description' {...register("description")} />
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <input placeholder='Event Title' type="number" {...register("age")} />
                                        <input type="submit" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Events;