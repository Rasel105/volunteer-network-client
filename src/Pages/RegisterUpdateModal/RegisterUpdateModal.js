import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { FiEdit } from "react-icons/fi";

const RegisterUpdateModal = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);


    // const hanldeUpdateUser = id => {
    //     console.log(id);
    //     fetch('https://example.com/profile', {
    //         method: 'PUT', // or 'POST'
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(),
    //     })
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log('Success:', data);
    //         })
    // }


    return (
        <div>
            <>
                <FiEdit onClick={handleShow} />
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Update User</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form id='register-style' onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column">
                            <input placeholder='Full Name' {...register("fullName", { required: true })} />
                            <input placeholder='Username or Email' {...register("email", { required: true })} />
                            <input placeholder='Date' type="date" {...register("date", { required: true })} />
                            <input placeholder='Desicription' {...register("Desicription", { required: true })} />
                            <input placeholder='Organize books at the library' {...register("organize", { required: true })} />
                            <input className='submit-btn mt-3 btn btn-primary p-3' type="submit" value="Register" />
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        </div>
    );
};

export default RegisterUpdateModal;