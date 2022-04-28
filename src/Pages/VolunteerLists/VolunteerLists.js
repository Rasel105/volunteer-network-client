import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import user from '../../logos/users-alt 1.png'
import logo from '../../logos/plus 1.png'
import './VolunteerLists.css'
import { AiFillDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { Link } from 'react-router-dom';
import RegisterUpdateModal from '../RegisterUpdateModal/RegisterUpdateModal';

const VolunteerLists = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/register')
            .then(res => res.json())
            .then(data => {
                setUsers(data)
            })
    }, [users]);

    const handleDeleteUser = id => {
        const proceed = window.confirm("Are you sure to delete the user?");
        if (proceed) {
            fetch(`http://localhost:5000/register/${id}`, {
                method: 'DELETE',
            })
                .then(res => {
                    return res.json()
                })
                .then(data => {
                    console.log(data);

                });
        }
    }

    const hanldeUpdateUser = id => {
        console.log(id);
        // fetch('https://example.com/profile', {
        //     method: 'PUT', // or 'POST'
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(),
        // })
        //     .then(response => response.json())
        //     .then(data => {
        //         console.log('Success:', data);
        //     })
    }


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
                            <Link to='/register' style={{ textDecoration: "none" }}>
                                <p className='event-text'>Add event</p>
                            </Link>
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
                                    <th scope="col">Reg: Date</th>
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
                                            <button onClick={() => handleDeleteUser(user._id)} className='delete-icon p-0 me-2'>
                                                <AiFillDelete />
                                            </button>
                                            <button className='update-icon p-0'>
                                                <RegisterUpdateModal hanldeUpdateUser={hanldeUpdateUser}  user={user}/>
                                            </button>
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