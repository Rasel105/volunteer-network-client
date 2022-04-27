import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import user from '../../logos/users-alt 1.png'
import logo from '../../logos/plus 1.png'
import './VolunteerLists.css'

const VolunteerLists = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/register')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setUsers(data)
            })
    }, [])
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
                            <img style={{ width: "20px", height: "20px" }} className="me-2" src={logo} alt="" />
                            <p className='text-primary'>Add Events</p>
                        </div>
                    </div>
                    <div className="col-lg-8" >
                        {/* {
                            users.map(user => <table key={user._id} className="table">
                                <thead className='tableHeader'>
                                    <tr>
                                        <th scope="col">Full Name</th>
                                        <th scope="col">Email ID</th>
                                        <th scope="col">Registation Date</th>
                                        <th scope="col">Volunteer List</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">{user.fullName}</th>
                                        <td>{user.email}</td>
                                        <td>{user.date}</td>
                                        <td>{user.organize}</td>
                                        <button className='btn btn-danger'>Delete</button>
                                    </tr>
                                </tbody>
                            </table>)
                        } */}

                        <table key={user._id} className="table">
                            <thead className='tableHeader'>
                                <tr>
                                    <th scope="col">Full Name</th>
                                    <th scope="col">Email ID</th>
                                    <th scope="col">Registation Date</th>
                                    <th scope="col">Volunteer List</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.map(user =>
                                        <tr>
                                            <th scope="row">{user.fullName}</th>
                                            <td>{user.email}</td>
                                            <td>{user.date}</td>
                                            <td>{user.organize}</td>
                                            <button className='btn btn-danger'>Delete</button>
                                        </tr>
                                    )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VolunteerLists;