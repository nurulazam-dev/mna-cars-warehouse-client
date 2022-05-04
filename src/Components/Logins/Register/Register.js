import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../Firebase/firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const numberRef = useRef('');

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    /* if (error) {
        return error
    }; */


    const handleRegister = event => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const number = numberRef.current.value;
        const password = passwordRef.current.value;

        createUserWithEmailAndPassword(email, password);
        console.log(name, email, password, number);
    }

    const navigate = useNavigate();
    const navigateToLogin = (event) => {
        navigate('/login')
    }

    return (
        <div className='w-25 mx-auto border my-5 p-2 rounded bg-dark'>
            <h2 className='text-warning text-center'>Create your account</h2>

            <Form onSubmit={handleRegister} className='text-white w-75 mx-auto my-4'>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Your Full Name</Form.Label>
                    <Form.Control className='fs-5' ref={nameRef} type="text" placeholder="Enter Your Name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control className='fs-5' ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicNumber">
                    <Form.Label>Phone No.</Form.Label>
                    <Form.Control className='fs-5' ref={numberRef} type="text" placeholder="Phone No." required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control className='fs-5' ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>

                {/* <p>{error?.message}</p> */}
                <Button className='w-100 mt-2 fs-5' variant="primary" type="submit">
                    Register
                </Button>
            </Form>
            <p className='text-center text-white'>Already have an account ? <Link to='/login' onClick={navigateToLogin} className='text-warning pe-auto text-decoration-none'>Please Login</Link></p>

            <SocialLogin />
        </div>
    );
};

export default Register;