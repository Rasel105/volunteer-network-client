import React, { useState } from 'react';
import user from '../../logos/users-alt 1.png'
import logo from '../../logos/plus 1.png'
import './Events.css';
import { useForm } from 'react-hook-form';

const Events = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    const [selectedImage, setSelectedImage] = useState(false);
    return (
        <div>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-lg-4">
                        <div className='d-flex'>
                            <img style={{ width: "20px", height: "20px" }} className="me-2" src={user} alt="" />
                            <p className='event-text'>Volunteer register list</p>
                        </div>
                        <div className='d-flex'>
                            <img src={logo} style={{ width: "20px", height: "20px" }} className="me-2" alt="" />
                            <p className='text-primary'>Add Events</p>
                        </div>
                    </div>
                    <div className="col-lg-8 bg-color p-4" >
                        <form onSubmit={handleSubmit(onSubmit)} >
                            <div className="row bg-white rounded-3 p-4">
                                <div className='col-md-6'>
                                    <div className='input-style mb-3'>
                                        <label className='title-style mb-1' style={{ display: "block" }}>Event Title</label>
                                        <input style={{ width: '100%' }} placeholder='Event Title' {...register("event-title", { required: true })} />
                                    </div>
                                    <div className='mb-3'>
                                        <label className='title-style mb-1' style={{ display: "block" }}>Description</label>
                                        <textarea style={{ width: '100%' }} placeholder='Description' {...register("description")} />
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className='input-style mb-4'>
                                        <label className='title-style mb-1' style={{ display: "block" }}>Event Date</label>
                                        <input style={{ width: '100%' }} placeholder='Event Title' type="date" {...register("date")} />
                                    </div>
                                    <div className='d-flex'>
                                        <div>
                                            <label className='title-style mb-1' style={{ width: "50%", display: "block" }}>Banner</label>
                                            <input
                                                style={{ width: "50%"}}
                                                type="file"
                                                name="myImage"
                                                onChange={(event) => {
                                                    console.log(event.target.files[0]);
                                                    setSelectedImage(event.target.files[0]);
                                                }}
                                            />
                                        </div>
                                        <div className=' mt-3'>
                                            {
                                                selectedImage && (
                                                    <div>
                                                        <img alt="not fount" width={"80px"} height={"80px"} src={URL.createObjectURL(selectedImage)} />
                                                        <br />
                                                        <button className='btn btn-danger mt-2' onClick={() => setSelectedImage(!selectedImage)}>Remove</button>
                                                    </div>
                                                )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Events;